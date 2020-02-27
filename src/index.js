import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AddBookingForm from "./components/AddBookingForm";

ReactDOM.render(<AddBookingForm startDate={new Date()} endDate={new Date().setDate(new Date().getDate()+2)} />, document.getElementById("root"));
