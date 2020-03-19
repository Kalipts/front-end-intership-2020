/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { useDrag } from 'react-dnd';

import BookingCard from './Style/BookingCard';
import BookingText from './Style/BookingContent';
import BookingTime from './Style/BookingTime';
import { HOURS_IN_DAY } from '../../App/constant';
import { CalendarContext } from '../../../context/Calendar';
import { compareByDay } from '../../../utils/Date';
import IconButton from '../../../components/shared/IconButton';

import Close from './Style/Close';
import ItemTypes from './ItemTypes';

export default function Booking(props) {
  const { booking, isFirst, onClick } = props;
  const { startDay, endDay, hour, isDuration, utilize, project, _id } = booking;
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.BOOKING },
    begin: () => booking,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      opacity: 1,
    }),
  });
  const [isHover, setIsHover] = useState(false);

  const { color, name } = project;

  const calendarContext = useContext(CalendarContext);
  const { getMarginTopBooking, removeBooking } = calendarContext;
  const length = compareByDay(endDay, startDay) + 1;
  const percentageHour = (length * utilize * HOURS_IN_DAY) / 100;

  let top = 0;
  if (isFirst) {
    top = getMarginTopBooking(booking);
  }
  const handleClick = () => {
    removeBooking(_id);
  };
  let opacity = 1;
  if (isDragging) opacity = 0.2;
  return (
    <BookingCard
      opacity={opacity}
      length={length}
      color={color}
      top={top}
      ref={drag}
      onClick={onClick}
      onMouseDown={e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setIsHover(false);
      }}
      onMouseUp={e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
      onMouseMove={e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
      onMouseEnter={() => {
        if (isDragging) {
          setIsHover(false);
          return;
        }
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <BookingText>{name}</BookingText>
      <BookingTime isHovered={isHover}>{`${
        isDuration ? hour : percentageHour
      }h`}</BookingTime>
      {isHover ? (
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
