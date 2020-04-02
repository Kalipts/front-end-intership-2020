import moment from 'moment';
import React, { useContext, useState } from 'react';
import { CES_GREY_HOVER } from '../../constants/colorTypes';
import { CalendarContext } from '../../context/Calendar';
import { getNumberOfDay } from '../../utils/Date';
import Booking from './TableCalendar/Booking';
import DropTargetCell from './TableCalendar/DropTargetCell';
const CellInCalendar = props => {
  const [isDrop, setIsDrop] = useState(true);
  const calendarContext = useContext(CalendarContext);
  const {
    startDay,
    endDay,
    handleCloseModal,
    setBegin,
    setContentGlobal,
    setLastDate,
    setIsHover,
    hoverObject,
    hoverSetObject,
  } = calendarContext;
  const numberOfDay = getNumberOfDay(startDay, endDay);

  const beginSelection = (indexCell, indexResource, startDayInCell) => {
    if (hoverObject.formIsOpening) return;
    hoverSetObject.setSelecting(true);
    hoverSetObject.setStart(indexCell);
    hoverSetObject.setFirst(true);
    hoverSetObject.setEnd(indexCell);
    hoverSetObject.setLastDate(startDayInCell);
    hoverSetObject.setResourceStart(indexResource);
    hoverSetObject.setStartCellDay(startDayInCell);
    hoverSetObject.setIsHover(false);
    hoverSetObject.setAddBookingStatus(true);
    hoverSetObject.setFormIsOpening(true);
    setBegin();
    updateSelection(indexCell, indexResource, startDayInCell, true);
  };

  const endSelection = (
    indexCell = hoverObject.end,
    indexResource,
    endDayInCell,
  ) => {
    hoverSetObject.setSelecting(false);
    updateSelection(indexCell, indexResource, endDayInCell, true);
    setLastDate(endDayInCell);
  };

  const updateSelection = (indexCell, indexResource, endDayInCell, force) => {
    if (hoverObject.selecting || force) {
      setIsHover(false);
      if (indexResource === hoverObject.resourceStart) {
        hoverSetObject.setEnd(indexCell);
        setLastDate(endDayInCell);
      }
    }
  };

  function renderBooking(bookingsInCell) {
    return bookingsInCell.map((booking, index) => (
      <Booking
        onClick={() => {
          setContentGlobal({
            resource,
            booking,
          });
          handleCloseModal(true);
        }}
        key={booking._id}
        color="green"
        isDuration
        isFirst={index === 0}
        booking={booking}
        setIsDrop={setIsDrop}
      />
    ));
  }

  const { resource, row, indexResource } = props;

  const handleOnClick = (bookingsInCell, startDate, endDate) => {
    setContentGlobal({ resource, bookingsInCell, startDate, endDate });
  };

  const indexCellRow = numberOfDay * indexResource;
  const days = row.map((cell, cellIndex) => {
    const { dateInCell, isWeekend, bookingsInCell } = cell;
    const bookingDateWithResource = renderBooking(bookingsInCell);

    const hoverCellColor = () =>
      hoverObject.formIsOpening &&
      hoverObject.addBookingStatus &&
      hoverObject.isHoverWorking &&
      hoverObject.first &&
      ((hoverObject.end <= indexCellRow + cellIndex &&
        indexCellRow + cellIndex <= hoverObject.start) ||
        (hoverObject.start <= indexCellRow + cellIndex &&
          indexCellRow + cellIndex <= hoverObject.end &&
          hoverObject.resourceStart === indexResource))
        ? CES_GREY_HOVER
        : '';
    const totalIndex = indexCellRow + cellIndex;
    const handleMouseDown = () => {
      beginSelection(
        totalIndex,
        indexResource,
        moment(moment(dateInCell).toString()),
      );
    };

    const handleMouseUp = () => {
      if (hoverObject.startCellDay > hoverObject.lastDate) {
        handleOnClick(
          dateInCell,
          hoverObject.lastDate,
          hoverObject.startCellDay,
        );
      } else {
        handleOnClick(
          dateInCell,
          hoverObject.startCellDay,
          hoverObject.lastDate,
        );
      }
      endSelection(
        totalIndex,
        indexResource,
        moment(moment(dateInCell).toString()),
      );
      handleCloseModal(true);
    };

    const handleMouseMove = () => {
      updateSelection(
        totalIndex,
        indexResource,
        moment(moment(dateInCell).toString()),
      );
    };
    return (
      <DropTargetCell
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        inputColor={hoverCellColor()}
        isWeekend={isWeekend}
        key={`${dateInCell} ${resource._id}`}
        resourceId={resource._id}
        date={dateInCell}
      >
        {isDrop && bookingDateWithResource}
      </DropTargetCell>
    );
  });
  return days;
};

export default CellInCalendar;
