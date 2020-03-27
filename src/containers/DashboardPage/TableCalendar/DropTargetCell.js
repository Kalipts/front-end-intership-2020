import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import moment from 'moment';
import composeRefs from '@seznam/compose-react-refs';
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

  const ref = useRef(null);
  const checkDropInBooking = (coorDrop, coorPointerDrop) => {
    let distance =
      (coorDrop.x - coorPointerDrop.x) / WIDTH_CELL_IN_TABLE_CALENDAR;
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
    if (!checkDropInBooking(coorDrop, coorPointerDrop)) {
      let distanceOfPointerAndDrop = Math.floor(
        (coorPointerDrop.x - coorDrop.x) / WIDTH_CELL_IN_TABLE_CALENDAR,
      );
      distanceOfPointerAndDrop =
        distanceOfPointerAndDrag - distanceOfPointerAndDrop;
      return distanceOfPointerAndDrop;
    }
    return distanceOfPointerAndDrag;
  };

  const [, drop] = useDrop({
    accept: ItemTypes.BOOKING,
    drop: (item, monitor) => {
      const { booking } = monitor.getItem();

      const newStartDate = date
        .clone()
        .add(-getDistanceChangeDate(monitor, booking), 'days');

      return { resource: resourceId, date: newStartDate };
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
