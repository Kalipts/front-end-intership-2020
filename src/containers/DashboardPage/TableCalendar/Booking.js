/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import BookingCard from './Style/BookingCard';
import BookingText from './Style/BookingContent';
import BookingTime from './Style/BookingTime';
import { HOURS_IN_DAY } from '../../App/constant';
import { CalendarContext } from '../../../context/Calendar';
import { compareByDay } from '../../../utils/Date';

export default function Booking(props) {
  const { booking, isFirst } = props;
  const { startDay, endDay, hour, isDuration, utilize, project } = booking;
  const { color, name } = project;

  const calendarContext = useContext(CalendarContext);
  const { getMarginTopBooking } = calendarContext;
  const length = compareByDay(endDay, startDay) + 1;
  const percentageHour = (length * utilize * HOURS_IN_DAY) / 100;

  let top = 0;
  if (isFirst) {
    top = getMarginTopBooking(booking);
  }
  return (
    <BookingCard length={length} color={color} top={top}>
      <BookingText>{name}</BookingText>
      <BookingTime>{`${isDuration ? hour : percentageHour}h`}</BookingTime>
    </BookingCard>
  );
}
