/* eslint-disable react/prop-types */
import React from 'react';
import BookingCard from './Style/BookingCard';
import BookingText from './Style/BookingContent';
import BookingTime from './Style/BookingTime';
import { HOURS_IN_DAY } from '../../App/constant';

export default function Booking(props) {
  const {
    startDay,
    endDay,
    details,
    color,
    top,
    isDuration,
    utilize,
    hour,
  } = props;

  const length =
    endDay
      .clone()
      .startOf('day')
      .diff(startDay.clone().startOf('day'), 'days') + 1;
  const percentageHour = (length * utilize * HOURS_IN_DAY) / 100;
  return (
    <BookingCard length={length} color={color} top={top}>
      <BookingText>{details}</BookingText>
      <BookingTime>{`${isDuration ? hour : percentageHour}h`}</BookingTime>
    </BookingCard>
  );
}
