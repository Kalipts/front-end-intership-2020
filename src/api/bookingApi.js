import moment from 'moment';
import { getData, updateData, deleteData, addData } from './axiosService';

const url = `${process.env.REACT_APP_API_URL}/api/booking`;

export const getBooking = (startDay, endDay) => {
  const formatedStart = moment(startDay.toString()).format('YYYY-MM-DD');
  const formatedEnd = moment(endDay.toString()).format('YYYY-MM-DD');

  return getData(`${url}/${formatedStart}/${formatedEnd}`, {});
};

export const deleteBooking = data => {
  const bookingId = data;
  return deleteData({ url: `${url}/${bookingId}`, bookingId });
};

export const updateBooking = data => updateData({ url: `${url}`, data });

export const addBooking = data => addData({ url: `${url}`, data });
