import { ADD_BOOKING, FETCH_BOOKING, DELETE_BOOKING } from '../actions/types'

export default function bookingReducer(state=[], action) {
    switch (action.type) {
        case ADD_BOOKING:
            return [...state, action.payload];
        case DELETE_BOOKING:
            return state.filter(booking => booking.id !== action.payload.id);
        case FETCH_BOOKING:
            return action.bookings;
        default:
            return state;
    }
}
