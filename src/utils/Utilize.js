import { getNumberOfDay, getNumberOfWeekends } from './Date';
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
