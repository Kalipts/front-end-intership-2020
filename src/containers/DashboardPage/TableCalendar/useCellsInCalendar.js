import { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { getNumberOfDay } from '../../../utils/Date';
import { CalendarContext } from '../../../context/Calendar';

export default function useCellsInCalendar(startDay, endDay) {
  const [cells, setCells] = useState([]);
  const calendarContext = useContext(CalendarContext);
  const { searchResult, getBookingWithResource, bookings } = calendarContext;
  useEffect(() => {
    const arrays = new Array(searchResult.length).fill(0);
    const cellsInCalendars = arrays.fill(0).map((row, indexResource) => {
      const numberOfdays = getNumberOfDay(startDay, endDay);
      const contentResource = new Array(numberOfdays).fill(0).map((cell, i) => {
        const dateInCell = moment(startDay.toString()).add(i, 'days');
        const weekDayName = dateInCell.format('ddd');
        const isWeekend = weekDayName === 'Sun' || weekDayName === 'Sat';
        const bookingsInCell = getBookingWithResource(
          dateInCell,
          indexResource,
        );
        return {
          dateInCell,
          weekDayName,
          isWeekend,
          bookingsInCell,
        };
      });
      const resource = searchResult[indexResource];
      return { contentResource, resource };
    });
    setCells([...cellsInCalendars]);

    return () => {};
  }, [searchResult, startDay, endDay, bookings, getBookingWithResource]);

  return { cells };
}
