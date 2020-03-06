import { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { getNumberOfDay } from '../../../utils/Date';

export default function useHeaderCalendar(startDay, endDay) {
  const [dates, setDates] = useState([]);
  const [weeks, setWeeks] = useState([]);
  const createDates = useCallback(() => {
    let nowDay = moment(startDay);
    const initialDates = new Array(getNumberOfDay(startDay, endDay))
      .fill(0)
      .map(() => {
        const weekDayName = nowDay.format('ddd');
        const isWeekend = weekDayName === 'Sun' || weekDayName === 'Sat';
        const day = nowDay.format('DD');
        const newDate = {
          weekDayName,
          isWeekend,
          day,
          nowDay: nowDay.toString(),
        };
        nowDay = nowDay.add(1, 'days');
        return newDate;
      });
    setDates([...initialDates]);
    return initialDates;
  }, [startDay, endDay]);
  const createWeeks = useCallback(() => {
    const numberOfWeek = getNumberOfDay(startDay, endDay) / 7;
    const initialWeeks = new Array(numberOfWeek).fill(0).map((week, index) => {
      const weekInCell = moment(startDay.toString()).add(index * 7, 'days');
      const weekNumber = weekInCell.week();
      const year = weekInCell.year();

      return { weekNumber, year };
    });
    setWeeks([...initialWeeks]);
    return initialWeeks;
  }, [startDay, endDay]);
  useEffect(() => {
    createDates();
    createWeeks();
    return () => {};
  }, [createDates, createWeeks]);

  return { dates, weeks };
}
