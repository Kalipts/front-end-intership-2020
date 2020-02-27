import React, { useEffect, useContext } from 'react';
import { useState } from 'react';
import moment from 'moment';

import { getNumberOfDay } from '../../utils/Date';
import { useWindowSize } from '../../utils/Window';

import Booking from './TableCalendar/Booking';
import ContainerBookingView from './TableCalendar/Style/ContainerBookingView';
import BookingView from './TableCalendar/Style/BookingView';
import RowBookingView from './TableCalendar/Style/RowBookingView';
import ContentBooking from './TableCalendar/Style/ContentBooking';
import DateBooking from './TableCalendar/Style/DateBooking';
import HeaderCalendar from './TableCalendar/HeaderCalendar';

import Sidebar from './ResourceBar/Sidebar';
import { CalendarContext } from '../../context/Calendar';

export default function TableCalendar(props) {
  const [startDay] = useState(props.startDay);
  const [endDay] = useState(props.endDay);
  const [size] = useWindowSize();
  const calendarContext = useContext(CalendarContext);
  const {
    searchResult,
    getMaxTotalOverlapBooking,
    getBookingWithResource,
    getMarginTopBooking
  } = calendarContext;

  const numberOfDay = getNumberOfDay(startDay, endDay);

  function renderBooking(date, indexResource) {
    const bookingWithResource = getBookingWithResource(date, indexResource);

    const bookingDateWithResourceRender = bookingWithResource.map(
      (booking, index) => {
        return (
          <Booking
            key={index}
            startDay={booking.startDay}
            endDay={booking.endDay}
            color={'green'}
            isDuration={true}
            top={index === 0 ? '10px' : 0}
            detail={booking.details}
          ></Booking>
        );
      }
    );
    return bookingDateWithResourceRender;
  }
  const renderCellsInCalendar = (numberOfDay, indexResource) => {
    const days = new Array(numberOfDay).fill(1).map((item, i) => {
      const dateInCell = moment(startDay.toString()).add(i, 'days');
      const bookingDateWithResource = renderBooking(dateInCell, indexResource);
      const weekDayName = dateInCell.format('ddd');
      const isWeekend = weekDayName === 'Sun' || weekDayName === 'Sat';
      
      return (
        <ContentBooking
          isWeekend={isWeekend}
          key={dateInCell + ' ' + indexResource}
        >
          {bookingDateWithResource}
        </ContentBooking>
      );
    });
    return days;
  };

  const renderRowsInCalendar = (resources, numberOfDay) => {
    const renderCells = new Array(resources.length)
      .fill(1)
      .map((cell, indexResource) => {
        const days = renderCellsInCalendar(numberOfDay, indexResource);

        return (
          <RowBookingView
            key={searchResult[indexResource]._id}
            overlapBooking={getMaxTotalOverlapBooking(indexResource)}
            numberOfDay={numberOfDay}
          >
            {days}
          </RowBookingView>
        );
      });
    return renderCells;
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <table cellPadding={0} cellSpacing={0}>
      <tbody>
        <tr>
          <Sidebar
            getMaxTotalOverlapBooking={getMaxTotalOverlapBooking}
          ></Sidebar>
          <DateBooking width={size.width}>
            <HeaderCalendar
              startDay={startDay}
              endDay={endDay}
            ></HeaderCalendar >
            <ContainerBookingView
              numberOfDay={getNumberOfDay(startDay, endDay)}
            >
              <BookingView cellPadding={0} cellSpacing={0}>
                <tbody>{renderRowsInCalendar(searchResult, numberOfDay)}</tbody>
              </BookingView>
            </ContainerBookingView>
          </DateBooking>
        </tr>
      </tbody>
    </table>
  );
}
