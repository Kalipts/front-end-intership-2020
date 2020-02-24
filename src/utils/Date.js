import moment from 'moment';
export const getNumberOfDay = (startDay, endDay) => {
  const start = moment(startDay);
  const end = moment(endDay);
  return end.diff(start, 'days');
};
