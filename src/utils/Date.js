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
    const isWeekend = next.day() === 0 || next.day() === 6;
    if (isWeekend) {
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
