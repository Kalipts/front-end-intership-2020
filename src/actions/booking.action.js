import {ADD_BOOKING, DELETE_BOOKING, FETCH_BOOKING} from "./types";
import axios from "axios";

<<<<<<< HEAD
const apiUrl = "http://localhost:8080/bookings";
=======
const apiUrl = "http://localhost:5000/api/booking   ";
>>>>>>> 5161864... Display booking with api

export const createBooking = ({id, name, start, end}) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, {id,name,start,end})
            .then(response => {
<<<<<<< HEAD
=======
                
>>>>>>> 5161864... Display booking with api
                dispatch(createBookingSuccess(response.data))
            })
            .catch(error => {
                throw (error)
            })
    }
};

export const createBookingSuccess = (data) => {
    return {
        type: ADD_BOOKING,
        payload: {
            id: data.id,
            name: data.name,
            start: data.start,
            end: data.end
        }
    }
};

export const deleteBookingSuccess = id => {
    return {
        type: DELETE_BOOKING,
        payload: {
            id
        }
    }
};

export const deleteBooking = id=> {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/${id}`)
            .then(response => {
                dispatch(deleteBookingSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const fetchBookingsSuccess = (bookings) => {
    return {
        type: FETCH_BOOKING,
        bookings
    }
};

<<<<<<< HEAD
export const fetchBookings = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}`)
=======
export const fetchBookings = async () => {
    console.log("da chay");
    return async (dispatch) => {
        return await axios.get(`${apiUrl}`)
>>>>>>> 5161864... Display booking with api
            .then(response => {
                dispatch(fetchBookingsSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            })
    }
};

