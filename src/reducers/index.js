import { combineReducers } from "redux";

import resources from "./resourceReducer";
import bookings from "./bookingReducer";

const rootReducer = combineReducers({
  resources:  resources,
  bookings: bookings
});

export default rootReducer;
