import React, { useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import moment from 'moment';
import composeRefs from '@seznam/compose-react-refs';
import ItemTypes from './ItemTypes';
import ContentBooking from './ContentBooking';
import { WIDTH_CELL_IN_TABLE_CALENDAR } from '../../App/constant';
import { compareByDay, getNumberOfDay } from '../../../utils/Date';
import { CalendarContext } from '../../../context/Calendar';

export default function DropTargetCell(props) {
  const {
    onMouseDown,
    onMouseUp,
    onMouseMove,
    inputColor,
    onMouseEnter,
    onMouseLeave,
    isWeekend,
    resourceId,
    date,
  } = props;
  const calendarContext = useContext(CalendarContext);
  const { startDay } = calendarContext;

  const ref = useRef(null);

  const checkDropInBooking = (coorDrop, coorPointerDrop) => {
    let distance =
      (coorDrop.x - coorPointerDrop.x) / WIDTH_CELL_IN_TABLE_CALENDAR;
    // round distance
    distance = distance > 0 ? Math.floor(distance) : Math.ceil(distance);
    return distance !== 0;
  };

  const getDistanceChangeDate = monitor => {
    const coorPointer = monitor.getInitialClientOffset();
    const coorDragSource = monitor.getInitialSourceClientOffset();
    const distanceOfPointerAndDrag = Math.floor(
      (coorPointer.x - coorDragSource.x) / WIDTH_CELL_IN_TABLE_CALENDAR,
    );
    const coorDrop = ref.current.getBoundingClientRect();
    const coorPointerDrop = monitor.getClientOffset();
    // solve when drop in booking
    if (checkDropInBooking(coorDrop, coorPointerDrop)) {
      let distanceOfPointerAndDrop = Math.floor(
        (coorPointerDrop.x - coorDrop.x) / WIDTH_CELL_IN_TABLE_CALENDAR,
      );
      distanceOfPointerAndDrop =
        distanceOfPointerAndDrag - distanceOfPointerAndDrop;
      return distanceOfPointerAndDrop;
    }
    return distanceOfPointerAndDrag;
  };
  const getDateDropForOverBooking = (dateDrop, booking) => {
    const distance = getNumberOfDay(startDay, dateDrop);
    const newDates = moment(booking.startDay.toString());
    return newDates.add(distance, 'days');
  };

  const [, drop] = useDrop({
    accept: ItemTypes.BOOKING,
    drop: (item, monitor) => {
      const { booking } = monitor.getItem();

      const dateDrop = date
        .clone()
        .add(-getDistanceChangeDate(monitor, booking), 'days');
      if (compareByDay(startDay, booking.startDay) <= 0) {
        return { resource: resourceId, date: dateDrop };
      }
      return {
        resource: resourceId,
        date: getDateDropForOverBooking(dateDrop, booking),
      };
    },
    collect: monitor => ({
      isOver: monitor.isOver({ swallow: true }),
    }),
  });
  return (
    <ContentBooking
      ref={composeRefs(ref, drop)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      inputColor={inputColor}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      isWeekend={isWeekend}
    >
      {props.children}
    </ContentBooking>
  );
}
DropTargetCell.propTypes = {
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseMove: PropTypes.func,
  inputColor: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isWeekend: PropTypes.bool,
  resourceId: PropTypes.string,
  date: PropTypes.instanceOf(moment),
  children: PropTypes.node,
};
