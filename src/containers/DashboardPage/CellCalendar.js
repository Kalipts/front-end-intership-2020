import moment from 'moment';
import React, { useContext } from 'react';
import { CES_GREY_HOVER, CES_ORANGE_HOVER } from '../../constants/colorTypes';
import { CalendarContext } from '../../context/Calendar';
import { getNumberOfDay } from '../../utils/Date';
import Booking from './TableCalendar/Booking';
import DropTargetCell from './TableCalendar/DropTargetCell';
const CellInCalendar = props => {
  const calendarContext = useContext(CalendarContext);
  const {
    startDay,
    endDay,
    handleCloseModal,
    hoverWorking,
    setBegin,
    setContentGlobal,
    start,
    setStart,
    end,
    setEnd,
    selecting,
    setSelecting,
    resourceStart,
    setResourceStart,
    first,
    setFirst,
    startCellDay,
    setStartCellDay,
    lastDate,
    setLastDate,
    isHover,
    setIsHover,
    firstHover,
    setFirstHover,
    lastHover,
    setLastHover,
    numOfSelecting,
    setNumOfSelecting,
    addBookingStatus,
    setAddBookingStatus,
    formIsOpening,
    setFormIsOpening,
  } = calendarContext;

  const numberOfDay = getNumberOfDay(startDay, endDay);

  const beginSelection = (indexCell, indexResource, startDayInCell) => {
    if (formIsOpening) return;
    setSelecting(true);
    setStart(indexCell);
    setFirst(true);
    setEnd(indexCell);
    setLastDate(startDayInCell);
    updateSelection(indexCell, indexResource, startDayInCell, true);
    setResourceStart(indexResource);
    setStartCellDay(startDayInCell);
    setIsHover(false);
    setBegin();
    setAddBookingStatus(true);
    setFormIsOpening(true);
  };

  const endSelection = (indexCell = end, indexResource, endDayInCell) => {
    setSelecting(false);
    updateSelection(indexCell, indexResource, endDayInCell, true);
    setLastDate(endDayInCell);
  };

  const updateSelection = (indexCell, indexResource, endDayInCell, force) => {
    if (selecting || force) {
      setIsHover(false);
      if (indexResource === resourceStart) {
        setEnd(indexCell);
        setLastDate(endDayInCell);
      }
    }
  };

  const enterSelection = (indexCell, firstHover_, lastHover_) => {
    setIsHover(true);
    setFirstHover(firstHover_);
    setLastHover(lastHover_);
    setNumOfSelecting(indexCell);
  };
  const leaveSelection = indexCell => {
    if (indexCell === numOfSelecting) {
      setIsHover(false);
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
      />
    ));
  }

  const { resource } = props;
  const { row } = props;
  const { indexResource } = props;

  const handleOnClick = (bookingsInCell, startDate, endDate) => {
    setContentGlobal({ resource, bookingsInCell, startDate, endDate });
  };

  const indexCellRow = numberOfDay * indexResource;
  const days = row.map((cell, cellIndex) => {
    const { dateInCell, isWeekend, bookingsInCell } = cell;
    const bookingDateWithResource = renderBooking(bookingsInCell);

    const hoverCellColor = () =>
      formIsOpening === true &&
      addBookingStatus === true &&
      hoverWorking() === true &&
      first === true &&
      ((end <= indexCellRow + cellIndex && indexCellRow + cellIndex <= start) ||
        (start <= indexCellRow + cellIndex &&
          indexCellRow + cellIndex <= end &&
          resourceStart === indexResource))
        ? CES_GREY_HOVER
        : '';

    const hoverRowColor = () =>
      isHover === true &&
      indexCellRow + cellIndex >= firstHover &&
      indexCellRow + cellIndex < lastHover
        ? CES_ORANGE_HOVER
        : '';

    return (
      <DropTargetCell
        onMouseDown={() => {
          beginSelection(
            indexCellRow + cellIndex,
            indexResource,
            moment(moment(dateInCell).toString()),
          );
        }}
        onMouseUp={() => {
          if (startCellDay > lastDate) {
            handleOnClick(dateInCell, lastDate, startCellDay);
          } else {
            handleOnClick(dateInCell, startCellDay, lastDate);
          }
          endSelection(
            indexCellRow + cellIndex,
            indexResource,
            moment(moment(dateInCell).toString()),
          );

          handleCloseModal(true);
        }}
        onMouseMove={() =>
          updateSelection(
            indexCellRow + cellIndex,
            indexResource,
            moment(moment(dateInCell).toString()),
          )
        }
        inputColor={hoverCellColor()}
        hoverColor={hoverRowColor()}
        onMouseEnter={() => {
          enterSelection(
            indexCellRow + cellIndex,
            numberOfDay * indexResource,
            numberOfDay * (indexResource + 1),
          );
        }}
        onMouseLeave={() => {
          leaveSelection(indexCellRow + cellIndex);
        }}
        isWeekend={isWeekend}
        key={`${dateInCell} ${resource._id}`}
        resourceId={resource._id}
        date={dateInCell}
      >
        {bookingDateWithResource}
      </DropTargetCell>
    );
  });
  return days;
};

export default CellInCalendar;
