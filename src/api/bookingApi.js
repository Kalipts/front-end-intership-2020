import { getData, updateData, deleteData, addData } from "./axiosService";


const url = `${process.env.REACT_APP_API_URL}/api/booking`;
console.log(url);
export const getBooking = data => {
  return getData(url, data);
};

export const deleteBooking = data => {
  const bookingId = data;
  return deleteData({ url: `${url}/${bookingId}`, bookingId });
};

export const updateBooking = data => {
  return updateData({ url: `${url}`, data });
};

export const addBooking = data => {
  return addData({ url: `${url}`, data });
};
