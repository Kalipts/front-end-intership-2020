import {ADD_BOOKING, DELETE_BOOKING, FETCH_BOOKING} from "./types";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/booking   ";

export const createBooking = ({id, name, start, end}) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, {id,name,start,end})
            .then(response => {
                
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
            startDay: data.startDay,
            endDay: data.endDay,
            isDuration: false,
            details: data
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

export const fetchBookings = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}`)
            .then(response => {
                dispatch(fetchBookingsSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            })
    }
};

