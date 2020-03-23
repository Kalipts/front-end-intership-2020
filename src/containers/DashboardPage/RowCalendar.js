import React, { useContext } from 'react';
import RowBookingView from './TableCalendar/Style/RowBookingView';
import useCellsInCalendar from './TableCalendar/useCellsInCalendar';
import { CalendarContext } from '../../context/Calendar';
import CellInCalendar from './CellCalendar';

const renderCellsInCalendar = (resource, row, indexResource) => (
  <CellInCalendar resource={resource} row={row} indexResource={indexResource} />
);

const RenderRowsInCalendar = () => {
  const calendarContext = useContext(CalendarContext);
  const { getMaxTotalOverlapBooking, startDay, endDay } = calendarContext;

  const { cells } = useCellsInCalendar(startDay, endDay);

  const renderCells = cells.map((row, indexResource) => {
    const { contentResource, resource } = row;
    const days = renderCellsInCalendar(
      resource,
      contentResource,
      indexResource,
    );
    return (
      <RowBookingView
        key={resource._id}
        overlapBooking={getMaxTotalOverlapBooking(resource._id)}
      >
        {days}
      </RowBookingView>
    );
  });
  return renderCells;
};

export default RenderRowsInCalendar;
