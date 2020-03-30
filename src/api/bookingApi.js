import moment from 'moment';
import { getData, updateData, deleteData, addData } from './axiosService';

const url = `${process.env.REACT_APP_API_URL}/api/booking`;

export const getBooking = (startDay, endDay) => {
  const formatedStart = moment(startDay.toString()).format('YYYY-MM-DD');
  const formatedEnd = moment(endDay.toString()).format('YYYY-MM-DD');

  return getData(`${url}/${formatedStart}/${formatedEnd}`, {});
};

export const deleteBooking = bookingId =>
  deleteData({ url: `${url}/${bookingId}`, bookingId });

export const updateBooking = booking => {
  return updateData({ url: `${url}/${booking._id}`, data: booking });
};

export const addBooking = newBooking => {
  const bookings = [];
  bookings.push(newBooking);
  try {
    bookings.map(booking => {
      addData(`${url}`, {
        ...newBooking,
        startDay: booking.startDay,
        endDay: booking.endDay,
      });
      return booking;
    });
  } catch (error) {}
};
