import moment from 'moment';
import { getData, updateData, deleteData, addData } from './axiosService';
import { seperateDayByWeekend } from '../utils/Date';

const url = `${process.env.REACT_APP_API_URL}/api/booking`;

export const getBooking = (startDay, endDay) => {
  const formatedStart = moment(startDay.toString()).format('YYYY-MM-DD');
  const formatedEnd = moment(endDay.toString()).format('YYYY-MM-DD');

  return getData(`${url}/${formatedStart}/${formatedEnd}`, {});
};

export const deleteBooking = bookingId =>
  deleteData({ url: `${url}/${bookingId}`, bookingId });

export const updateBooking = data => updateData({ url: `${url}`, data });

export const addBooking = newBooking => {
  const bookings = seperateDayByWeekend(newBooking.startDay, newBooking.endDay);
  try {
    bookings.map(booking => {
      addData(`${url}`, {
        ...newBooking,
        startDay: booking.startDay,
        endDay: booking.endDay,
      });
      return booking;
    });
  } catch (error) {
    console.log(error);
    alert("Don't add booking", error);
  }
};
