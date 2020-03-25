import moment from 'moment';
import { HOURS_IN_DAY, MAX_UTILIZE } from '../containers/App/constant';
export const getTotalHour = (start, end, utilize) => {
  let totalHour =
    (utilize / MAX_UTILIZE) * (compareByDay(start, end) + 1) * HOURS_IN_DAY;
  if (isWeekend(end, start)) {
    totalHour -= 16;
  }
  return Math.round(totalHour * 2) / 2;
};
export const getNumberOfDay = (startDay, endDay) => {
  const start = moment(startDay);
  const end = moment(endDay);
  return end.diff(start, 'days');
};
export const compareByDay = (firstDay, secondDay) => {
  const cloneFirstStart = firstDay.clone().startOf('day');
  const cloneSecondStart = secondDay.clone().startOf('day');
  return cloneFirstStart.diff(cloneSecondStart, 'days');
};
export const seperateDayByWeekend = (firstDay, endDay) => {
  let first = firstDay.clone();
  let end = endDay.clone();
  const bookings = [];
  const firstIsSunDay = first.day() === 0;
  const firstIsSaturDay = first.day() === 6;
  if (firstIsSunDay) {
    end = end.add(1, 'days');
    first = first.add(1, 'days');
  }
  if (firstIsSaturDay) {
    end = end.add(2, 'days');
    first = first.add(2, 'days');
  }
  let next = first.clone();

  while (compareByDay(next, end) <= 0) {
    const checkWeekend = next.day() === 0 || next.day() === 6;
    if (checkWeekend) {
      end = end.add(2, 'days');
      const businessDayFromFirst = compareByDay(next, first);
      const isLargerOrEqualEndDay =
        compareByDay(
          first.clone().add(businessDayFromFirst - 1, 'days'),
          end,
        ) >= 0;
      if (isLargerOrEqualEndDay) {
        bookings.push({
          startDay: first.toString(),
          endDay: end.toString(),
        });
        return bookings;
      }
      bookings.push({
        startDay: first.toString(),
        endDay: first
          .clone()
          .add(businessDayFromFirst - 1, 'days')
          .toString(),
      });
      first = first.add(businessDayFromFirst + 2, 'days');
      next = next.add(1, 'days');
    }
    const isNextEqualEnd = compareByDay(end, next) === 0;
    if (isNextEqualEnd) {
      bookings.push({
        startDay: first.toString(),
        endDay: end.toString(),
      });
      return bookings;
    }
    next = next.add(1, 'days');
  }
  return bookings;
};

export function isWeekend(startDate, endDate) {
  const startDateClone = startDate.format('MMM DD, YYYY');
  const endDateClone = endDate.format('MMM DD, YYYY');

  const startDateNew = new Date(startDateClone);
  const endDateNew = new Date(endDateClone);
  let isWeekendCheck = false;

  while (startDateNew < endDateNew) {
    const day = startDateNew.getDay();
    isWeekendCheck = day === 6 || day === 0;
    if (isWeekendCheck) {
      return true;
    }
    startDateNew.setDate(startDateNew.getDate() + 1);
  }
  return false;
}
export function getNumberOfWeekends(startDay, endDay) {
  const current = startDay.clone();
  let number = 0;
  if (compareByDay(startDay, endDay) > 0) {
    return 0;
  }
  while (current.day(7).isBefore(endDay)) {
    number += 1;
  }
  return number;
}
