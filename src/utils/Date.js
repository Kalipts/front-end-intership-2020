import moment from 'moment';

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
