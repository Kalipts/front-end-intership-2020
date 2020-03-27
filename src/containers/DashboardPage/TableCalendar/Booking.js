/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { useDrag } from 'react-dnd';

import BookingCard from './Style/BookingCard';
import BookingText from './Style/BookingContent';
import BookingTime from './Style/BookingTime';
import { CalendarContext } from '../../../context/Calendar';
import { compareByDay } from '../../../utils/Date';
import IconButton from '../../../components/shared/IconButton';

import Close from './Style/Close';
import ItemTypes from './ItemTypes';
import { getHoursFromUtilize } from '../../../utils/Utilize';

export default function Booking(props) {
  const { booking, isFirst, onClick } = props;
  const { startDay, endDay, hour, isDuration, utilize, project, _id } = booking;
  const { color, name } = project;
  const calendarContext = useContext(CalendarContext);
  const {
    getMarginTopBooking,
    removeBooking,
    updateOnDidDragBooking,
  } = calendarContext;
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.BOOKING, booking },
    end: async (item, monitor) => {
      const { resource, date } = monitor.getDropResult();

      await updateOnDidDragBooking(booking, resource, date);
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      opacity: 1,
    }),
  });
  const [isHover, setIsHover] = useState(false);
  const length = compareByDay(endDay, startDay) + 1;
  const percentageHour = getHoursFromUtilize(startDay, endDay, utilize);
  const top = isFirst ? getMarginTopBooking(booking) : 0;

  const handleClick = () => {
    removeBooking(_id);
  };

  return (
    <BookingCard
      isDragging={isDragging}
      length={length}
      color={color}
      top={top}
      ref={drag}
      onClick={onClick}
      onMouseUp={e => {
        e.stopPropagation();
      }}
      onMouseDown={e => {
        setIsHover(false);
        e.stopPropagation();
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
      <BookingTime isHovered={isHover}>{`${percentageHour}h`}</BookingTime>
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
