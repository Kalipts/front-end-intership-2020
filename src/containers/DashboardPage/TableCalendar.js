import React, { useContext, useRef, useState } from 'react';
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
import useCellsInCalendar from './TableCalendar/useCellsInCalendar';

function TableCalendar() {
  const [size] = useWindowSize();
  const calendarContext = useContext(CalendarContext);
  const {
    getMaxTotalOverlapBooking,
    startDay,
    endDay,
    setStartDay,
    setEndDay,
  } = calendarContext;
  const ref = useRef({ current: { scrollTop: 0 } });
  const [scrollTop, setScrollTop] = useState(0);
  const { cells } = useCellsInCalendar(startDay, endDay);
  const numberOfDay = getNumberOfDay(startDay, endDay);

  function renderBooking(bookingsInCell) {
    const bookingDateWithResourceRender = bookingsInCell.map(
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
  const renderCellsInCalendar = (row, indexResource) => {
    const k = numberOfDay * indexResource;
    const days = row.map((cell, i) => {
      const { dateInCell, isWeekend, bookingsInCell } = cell;
      const bookingDateWithResource = renderBooking(bookingsInCell);

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
  const renderRowsInCalendar = () => {
    const renderCells = cells.map((row, indexResource) => {
      const { contentResource, resourceId } = row;
      const days = renderCellsInCalendar(contentResource, indexResource);
      return (
        <RowBookingView
          key={resourceId}
          overlapBooking={getMaxTotalOverlapBooking(resourceId)}
        >
          {days}
        </RowBookingView>
      );
    });
    return renderCells;
  };
  const checkOnBoundScroll = () => {
    const { clientWidth, scrollWidth, scrollLeft } = ref.current;
    if (scrollLeft + clientWidth === scrollWidth) {
      setEndDay(moment(endDay.toString()).add(35, 'days'));
    }
    if (scrollLeft === 0) {
      setStartDay(moment(startDay.toString()).add(-35, 'days'));
    }
    setScrollTop(ref.current.scrollTop);
  };

  return (
    <Container height={size.height} width={size.width}>
      <Sidebar
        scrollTop={scrollTop}
        getMaxTotalOverlapBooking={getMaxTotalOverlapBooking}
      ></Sidebar>
      <DateBooking ref={ref} height={size.height} onScroll={checkOnBoundScroll}>
        <HeaderCalendar startDay={startDay} endDay={endDay}></HeaderCalendar>
        <BodyCalendar>
          <ContainerBookingView
            width={size.width}
            numberOfDays={getNumberOfDay(startDay, endDay)}
          >
            {renderRowsInCalendar()}
          </ContainerBookingView>
        </BodyCalendar>
      </DateBooking>
    </Container>
  );
}
TableCalendar.propTypes = {};
export default TableCalendar;
