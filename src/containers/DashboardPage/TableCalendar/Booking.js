/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import BookingCard from './Style/BookingCard';
import BookingText from './Style/BookingContent';
import BookingTime from './Style/BookingTime';
import { HOURS_IN_DAY } from '../../App/constant';
import { CalendarContext } from '../../../context/Calendar';
import { compareByDay } from '../../../utils/Date';
import { useHover } from '../../../utils/useHover';
import IconButton from '../../../components/shared/IconButton';

import Close from './Style/Close';

export default function Booking(props) {
  const { booking, isFirst } = props;
  const { startDay, endDay, hour, isDuration, utilize, project, _id } = booking;
  const { color, name } = project;

  const calendarContext = useContext(CalendarContext);
  const { getMarginTopBooking, removeBooking } = calendarContext;
  const length = compareByDay(endDay, startDay) + 1;
  const percentageHour = (length * utilize * HOURS_IN_DAY) / 100;
  const [hoverRef, isHovered] = useHover();

  let top = 0;
  if (isFirst) {
    top = getMarginTopBooking(booking);
  }
  const handleClick = () => {
    removeBooking(_id);
  };
  return (
    <BookingCard length={length} color={color} top={top} ref={hoverRef}>
      <BookingText>{name}</BookingText>
      <BookingTime isHovered={isHovered}>{`${
        isDuration ? hour : percentageHour
      }h`}</BookingTime>
      {isHovered ? (
        <div>
          <IconButton
            handleClick={handleClick}
            onKeyDown={handleClick}
            inputProps={<Close></Close>}
          ></IconButton>
        </div>
      ) : (
        <div></div>
      )}
    </BookingCard>
  );
}
