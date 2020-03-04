/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import BookingCard from './Style/BookingCard';
import BookingText from './Style/BookingContent';
import BookingTime from './Style/BookingTime';
import { HOURS_IN_DAY } from '../../App/constant';
import { CalendarContext } from '../../../context/Calendar';
import { compareByDay } from '../../../utils/Date';

export default function Booking(props) {
  const { booking, color, isFirst } = props;
  const { startDay, endDay, details, hour, isDuration, utilize } = booking;

  const calendarContext = useContext(CalendarContext);
  const { getMarginTopBooking } = calendarContext;
  let top = 0;
  if (isFirst) {
    top = getMarginTopBooking(booking);
  }
  const length = compareByDay(endDay, startDay) + 1;
  const percentageHour = (length * utilize * HOURS_IN_DAY) / 100;
  return (
    <BookingCard length={length} color={color} top={top}>
      <BookingText>{details}</BookingText>
      <BookingTime>{`${isDuration ? hour : percentageHour}h`}</BookingTime>
    </BookingCard>
  );
}
