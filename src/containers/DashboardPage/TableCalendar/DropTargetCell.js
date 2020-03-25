import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import moment from 'moment';
import ItemTypes from './ItemTypes';
import ContentBooking from './ContentBooking';
import { WIDTH_CELL_IN_TABLE_CALENDAR } from '../../App/constant';

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
  const [, drop] = useDrop({
    accept: ItemTypes.BOOKING,
    drop: (item, monitor) => {
      const coorPointer = monitor.getClientOffset();
      const coorDragSource = monitor.getSourceClientOffset();
      const distanceOfPointerAndDrag = Math.floor(
        (coorPointer.x - coorDragSource.x) / WIDTH_CELL_IN_TABLE_CALENDAR,
      );
      const newStartDate = date.clone().add(-distanceOfPointerAndDrag, 'days');
      return { resource: resourceId, date: newStartDate };
    },
    collect: monitor => ({
      isOver: monitor.isOver({ swallow: false }),
    }),
  });

  return (
    <ContentBooking
      ref={drop}
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
