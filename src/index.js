import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import DashboardPage from './containers/DashboardPage';
import BookingCard from './components/TableCalendar/BookingCard';
import BookingText from './components/TableCalendar/BookingContent';
import BookingTime from './components/TableCalendar/BookingTime';

function Greeting() {
  return <h1>Hello world!</h1>;
}

ReactDOM.render(
  <BookingCard color={'green'} lenth={1}>
    <BookingText>asdfjlaskjflsadjfklasjflsakdjfklsadjfklasdjfkldas;jfa;lsdjfdsa;ljfalsdjfadskljfaslkdjs</BookingText>
    <BookingTime>4h</BookingTime>
  </BookingCard>,
  document.getElementById('root')
);
