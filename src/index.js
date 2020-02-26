import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import DashboardPage from './containers/DashboardPage';
import AddBookingForm from "./components/AddBookingForm";

function Greeting() {
  return <h1>Hello world!</h1>;
}

ReactDOM.render(<AddBookingForm />, document.getElementById('root'));
