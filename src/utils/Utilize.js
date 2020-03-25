import { getNumberOfDay, getNumberOfWeekends } from './Date';
import { HOURS_IN_DAY, MAX_UTILIZE } from '../containers/App/constant';

export const getHoursFromUtilize = (startDay, endDay, utilize) => {
  const percentageHour =
    ((getNumberOfDay(startDay, endDay) + 1) * utilize * HOURS_IN_DAY) /
      MAX_UTILIZE -
    2 * HOURS_IN_DAY * getNumberOfWeekends(startDay, endDay);
  return percentageHour;
};
