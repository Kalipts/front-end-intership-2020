import React, { useContext, useRef, useState } from 'react';
import moment from 'moment';

import { getNumberOfDay } from '../../utils/Date';
import { useWindowSize } from '../../utils/Window';

import Booking from './TableCalendar/Booking';
import ContainerBookingView from './TableCalendar/Style/ContainerBookingView';
import RowBookingView from './TableCalendar/Style/RowBookingView';
// eslint-disable-next-line import/no-cycle
import ContentBooking from './TableCalendar/ContentBooking';
import DateBooking from './TableCalendar/Style/DateBooking';
import HeaderCalendar from './TableCalendar/HeaderCalendar';
import Sidebar from './ResourceBar/Sidebar';
import { CalendarContext } from '../../context/Calendar';
import Container from './TableCalendar/Style/Container';
import './TableCalendar/Style/Hover.css';

import BodyCalendar from './TableCalendar/Style/BodyCalendar';
import useCellsInCalendar from './TableCalendar/useCellsInCalendar';
import AddBookingForm from '../../components/AddBookingForm';
import {CES_ORANGE_HOVER} from "../../constants/colorTypes";

function TableCalendar() {
  const [size] = useWindowSize();
  const calendarContext = useContext(CalendarContext);
  const {
    getMaxTotalOverlapBooking,
    startDay,
    endDay,
    setStartDay,
    setEndDay,
    handleCloseModal,
  } = calendarContext;
  const ref = useRef({ current: { scrollTop: 0 } });
  const [scrollTop, setScrollTop] = useState(0);
  const { cells } = useCellsInCalendar(startDay, endDay);
  const numberOfDay = getNumberOfDay(startDay, endDay);
  const [content, setContent] = useState({
    resource: [],
    bookingWithResource: [],
    startDate: moment(),
    endDate: moment(),
  });
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [selecting, setSelecting] = useState(false);
  const [resourceStart, setResourceStart] = useState(0);
  const [first, setFirst] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [startCellDay, setStartCellDay] = useState(moment());
  const [lastDate, setLastDate] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [firstHover, setFirstHover] = useState(0);
  const [lastHover, setLastHover] = useState(0);
  const [numOfSelecting, setNumOfSelecting] = useState(0);

  const beginSelection = (i, j, startDayInCell) => {
    setSelecting(true);
    setStart(i);
    setFirst(true);
    setEnd(i);
    setLastDate(startDayInCell);
    updateSelection(i);
    setResourceStart(j);
    setStartCellDay(startDayInCell);
    setIsHover(false);
  };

  const endSelection = (i = end, endDayInCell) => {
    setSelecting(false);
    updateSelection(i);
    setLastDate(endDayInCell);
  };

  let updateSelection = (i, j, endDayInCell) => {

    if (selecting) {
      setIsHover(false);
      if(j == resourceStart) {
        setEnd(i);
        setLastDate(endDayInCell);
      }
    }
  };

  const enterSelection = (i, firstHover_, lastHover_) => {
    setIsHover(true);
    setFirstHover(firstHover_);
    setLastHover(lastHover_);
    setNumOfSelecting(i);
  };

  const leaveSelection = i => {
    if (i === numOfSelecting) {
      setIsHover(false);
    }
  };

  function renderBooking(bookingsInCell) {
    const bookingDateWithResourceRender = bookingsInCell.map(
      (booking, index) => (
        <Booking
          key={booking._id}
          color="green"
          isDuration
          isFirst={index === 0}
          booking={booking}
        ></Booking>
      ),
    );
    return bookingDateWithResourceRender;
  }

  const renderCellsInCalendar = (resource, row, indexResource) => {
    const handleOnClick = (bookingsInCell, startDate, endDate) => {
      setContent({ resource, bookingsInCell, startDate, endDate });
    };

    const k = numberOfDay * indexResource;
    const days = row.map((cell, i) => {
      const { dateInCell, isWeekend, bookingsInCell } = cell;
      const bookingDateWithResource = renderBooking(bookingsInCell);

      const cellValue = [dateInCell.toString(), indexResource];
      return (
        <ContentBooking

          onMouseDown={() => {
            beginSelection(k + i, indexResource, moment(moment(dateInCell).toString()));
          }}
          onMouseUp={() => {
            endSelection(k + i, moment(moment(dateInCell).toString()));
            handleOnClick(dateInCell, startCellDay, lastDate);
            handleCloseModal();
          }}
          onMouseMove={() => updateSelection(k + i, indexResource, moment(moment(dateInCell).toString()))}
          value={cellValue}
          inputColor={
            first == true &&
            ((end <= k + i && k + i <= start) ||
              (start <= k + i &&
                k + i <= end &&
                resourceStart == indexResource))
              ? '#D8D8D8'
              : ''
          }
          hoverColor={
            ((isHover===true) && (k+i >= firstHover) && (k+i < lastHover) ? CES_ORANGE_HOVER : "")
          }
          onMouseEnter={()=> {
            enterSelection(k+i,numberOfDay*indexResource, numberOfDay*(indexResource+1))
          }}
          onMouseLeave={()=>{
            leaveSelection(k+i);
          }}
          isWeekend={isWeekend}
          key={`${dateInCell} ${indexResource}`}
        >
          {bookingDateWithResource}
        </ContentBooking>
      );
    });
    return days;
  };
  const renderRowsInCalendar = () => {
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
  const checkOnBoundScroll = () => {
    const { clientWidth, scrollWidth, scrollLeft } = ref.current;
    if (scrollLeft + clientWidth === scrollWidth) {
      setEndDay(moment(endDay.toString()).add(35, 'days'));
    }
    if (scrollLeft === 0) {
      setStartDay(moment(startDay.toString()).add(-35, 'days'));
    }
    setScrollTop(ref.current.scrollTop);
  };

  return (
    <Container height={size.height} width={size.width}>
      <Sidebar
        scrollTop={scrollTop}
        getMaxTotalOverlapBooking={getMaxTotalOverlapBooking}
      ></Sidebar>
      <DateBooking ref={ref} height={size.height} onScroll={checkOnBoundScroll}>
        <HeaderCalendar startDay={startDay} endDay={endDay}></HeaderCalendar>
        <BodyCalendar>
          <ContainerBookingView
            width={size.width}
            numberOfDays={getNumberOfDay(startDay, endDay)}
          >
            {renderRowsInCalendar()}
          </ContainerBookingView>
        </BodyCalendar>
      </DateBooking>
      <AddBookingForm content={content} />
    </Container>
  );
}
export default TableCalendar;
