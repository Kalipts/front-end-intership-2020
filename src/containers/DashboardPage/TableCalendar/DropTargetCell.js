import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import moment from 'moment';
import ItemTypes from './ItemTypes';
import ContentBooking from './ContentBooking';
import { CalendarContext } from '../../../context/Calendar';
import { WIDTH_CELL_IN_TABLE_CALENDAR } from '../../App/constant';

export default function DropTargetCell(props) {
  const {
    onMouseDown,
    onMouseUp,
    onMouseMove,
    value,
    inputColor,
    hoverColor,
    onMouseEnter,
    onMouseLeave,
    isWeekend,
    resourceId,
    date,
  } = props;
  const calendarContext = useContext(CalendarContext);
  const { updateOnDidDragBooking } = calendarContext;
  const [, drop] = useDrop({
    accept: ItemTypes.BOOKING,
    drop: (item, monitor) => {
      const booking = monitor.getItem();
      const coorPointer = monitor.getClientOffset();
      const coorDragSource = monitor.getSourceClientOffset();
      const distanceOfPointerAndDrag = Math.floor(
        (coorPointer.x - coorDragSource.x) / WIDTH_CELL_IN_TABLE_CALENDAR,
      );
      const newStartDate = date.clone().add(-distanceOfPointerAndDrag, 'days');
      updateOnDidDragBooking(booking, resourceId, newStartDate);
    },
    collect: monitor => ({
      isOver: monitor.isOver({ swallow: true }),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <ContentBooking
      ref={drop}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      value={value}
      inputColor={inputColor}
      hoverColor={hoverColor}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputColor: PropTypes.string,
  hoverColor: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isWeekend: PropTypes.bool,
  resourceId: PropTypes.string,
  date: PropTypes.instanceOf(moment),
  children: PropTypes.node,
};
