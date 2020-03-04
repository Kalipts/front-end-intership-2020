import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getNumberOfDay } from '../../utils/Date';
import { useWindowSize } from '../../utils/Window';

import Booking from './TableCalendar/Booking';
import ContainerBookingView from './TableCalendar/Style/ContainerBookingView';
import RowBookingView from './TableCalendar/Style/RowBookingView';
// eslint-disable-next-line import/no-cycle
import ContentBooking from './TableCalendar/ContentBooking';
import DateBooking from './TableCalendar/Style/DateBooking';
import HeaderCalendar from './TableCalendar/HeaderCalendar';
import Sidebar from './ResourceBar/Sidebar';
import { CalendarContext } from '../../context/Calendar';
import Container from './TableCalendar/Style/Container';
import './TableCalendar/Style/Hover.css';
import {
  beginSelection,
  updateSelection,
  endSelection,
} from '../../utils/Hover';
import BodyCalendar from './TableCalendar/Style/BodyCalendar';

function TableCalendar({ startDay, endDay }) {
  const [size] = useWindowSize();
  const calendarContext = useContext(CalendarContext);
  const {
    searchResult,
    getMaxTotalOverlapBooking,
    getBookingWithResource,
  } = calendarContext;
  const ref = useRef({ current: { scrollTop: 0 } });
  const [scroll, setScroll] = useState(0);

  const numberOfDay = getNumberOfDay(startDay, endDay);

  function renderBooking(date, indexResource) {
    const bookingWithResource = getBookingWithResource(date, indexResource);

    const bookingDateWithResourceRender = bookingWithResource.map(
      (booking, index) => (
        <Booking
          key={booking._id}
          color="green"
          isDuration
          isFirst={index === 0}
          booking={booking}
        ></Booking>
      ),
    );
    return bookingDateWithResourceRender;
  }
  const renderCellsInCalendar = indexResource => {
    // 35 need dynamic(num of days in a row)
    const k = 35 * indexResource;
    const days = new Array(numberOfDay).fill(1).map((item, i) => {
      const dateInCell = moment(startDay.toString()).add(i, 'days');
      const bookingDateWithResource = renderBooking(dateInCell, indexResource);
      const weekDayName = dateInCell.format('ddd');
      const isWeekend = weekDayName === 'Sun' || weekDayName === 'Sat';

      const cellValue = [dateInCell.toString(), indexResource];
      return (
        <ContentBooking
          beginSelection={() => beginSelection(k + i)}
          endSelection={() => endSelection(k + i)}
          updateSelection={() => updateSelection(k + i)}
          date_value={cellValue}
          isWeekend={isWeekend}
          key={`${dateInCell} ${indexResource}`}
        >
          {bookingDateWithResource}
        </ContentBooking>
      );
    });
    return days;
  };

  const renderRowsInCalendar = resources => {
    const renderCells = new Array(resources.length)
      .fill(1)
      .map((cell, indexResource) => {
        const days = renderCellsInCalendar(indexResource);
        return (
          <RowBookingView
            key={searchResult[indexResource]._id}
            overlapBooking={getMaxTotalOverlapBooking(indexResource)}
          >
            {days}
          </RowBookingView>
        );
      });
    return renderCells;
  };

  return (
    <Container height={size.height} width={size.width}>
      <Sidebar
        scrollTop={scroll}
        getMaxTotalOverlapBooking={getMaxTotalOverlapBooking}
      ></Sidebar>
      <DateBooking
        ref={ref}
        height={size.height}
        onScroll={() => {
          setScroll(ref.current.scrollTop);
        }}
      >
        <HeaderCalendar startDay={startDay} endDay={endDay}></HeaderCalendar>
        <BodyCalendar>
          <ContainerBookingView
            width={size.width}
            numberOfDays={getNumberOfDay(startDay, endDay)}
          >
            {renderRowsInCalendar(searchResult, numberOfDay)}
          </ContainerBookingView>
        </BodyCalendar>
      </DateBooking>
    </Container>
  );
}
TableCalendar.propTypes = {
  startDay: PropTypes.instanceOf(moment),
  endDay: PropTypes.instanceOf(moment),
};
export default TableCalendar;
