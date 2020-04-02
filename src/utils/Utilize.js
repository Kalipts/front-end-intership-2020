import { getNumberOfDay, getNumberOfWeekends, compareByDay } from './Date';
import { HOURS_IN_DAY, MAX_UTILIZE } from '../containers/App/constant';

export const getHoursFromUtilize = (startDay, endDay, utilize) => {
  const percentageHour = Math.floor(
    ((getNumberOfDay(startDay, endDay) +
      1 -
      2 * getNumberOfWeekends(startDay, endDay)) *
      utilize *
      HOURS_IN_DAY) /
      MAX_UTILIZE,
  );
  return percentageHour > 0 ? percentageHour : 0;
};
export const getLengthOfBooking = (startDay, endDay, booking) => {
  const start =
    compareByDay(startDay, booking.startDay) > 0 ? startDay : booking.startDay;
  const end =
    compareByDay(endDay, booking.endDay) < 0 ? endDay : booking.endDay;
  return getNumberOfDay(start, end) + 1;
};
