import { isWeekend, compareByDay } from './Date';
import { getHoursFromUtilize } from './Utilize';

export const isSameReource = (first, end) =>
  first.resourceId === end.resourceId;
export const checkOvertimeNewBooking = (newBooking, bookings) => {
  // check booking is weekend
  if (isWeekend(newBooking.startDay, newBooking.endDay)) {
    return true;
  }
  const schedules = bookings.filter(
    booking =>
      compareByDay(newBooking.startDay, booking.startDay) >= 0 &&
      compareByDay(newBooking.startDay, booking.endDay) <= 0 &&
      isSameReource(booking, newBooking),
  );
  const sumHoursSchedules = schedules.reduce((acc, schedule) => {
    if (schedule._id === newBooking._id) {
      return acc;
    }
    return (
      acc +
      getHoursFromUtilize(schedule.startDay, schedule.endDay, schedule.utilize)
    );
  }, getHoursFromUtilize(newBooking.startDay, newBooking.endDay, newBooking.utilize));
  return sumHoursSchedules > 8;
};
