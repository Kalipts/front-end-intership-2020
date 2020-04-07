import React, { useContext, useRef, useState } from 'react';
import moment from 'moment';

import { getNumberOfDay } from '../../utils/Date';
import { useWindowSize } from '../../utils/Window';
import ContainerBookingView from './TableCalendar/Style/ContainerBookingView';
import DateBooking from './TableCalendar/Style/DateBooking';
import HeaderCalendar from './TableCalendar/HeaderCalendar';
import Sidebar from './ResourceBar/Sidebar';
import { CalendarContext } from '../../context/Calendar';
import Container from './TableCalendar/Style/Container';
import './TableCalendar/Style/Hover.css';
import BodyCalendar from './TableCalendar/Style/BodyCalendar';
import AddBookingForm from '../../components/AddBookingForm';
import RenderRowsInCalendar from './RowCalendar';
import AlertDialog from '../../components/Diaglog/AlertDiaglog';

function TableCalendar() {
  const [size] = useWindowSize();
  const calendarContext = useContext(CalendarContext);
  const {
    getMaxTotalOverlapBooking,
    startDay,
    endDay,
    setStartDay,
    setEndDay,
    contentGlobal,
  } = calendarContext;
  const ref = useRef({ current: { scrollTop: 0 } });
  const [scrollTop, setScrollTop] = useState(0);
  const renderRowsInCalendar = () => <RenderRowsInCalendar />;
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
  const handleOnAgreeOvertime = async () => {
    await updateOnOvertime(overTime.newBooking);
    handleOnCloseAlert();
  };
  return (
    <Container height={size.height} width={size.width}>
      <Sidebar
        scrollTop={scrollTop}
        getMaxTotalOverlapBooking={getMaxTotalOverlapBooking}
      />
      <DateBooking ref={ref} height={size.height} onScroll={checkOnBoundScroll}>
        <HeaderCalendar startDay={startDay} endDay={endDay} />
        <BodyCalendar>
          <ContainerBookingView
            width={size.width}
            numberOfDays={getNumberOfDay(startDay, endDay)}
          >
            {renderRowsInCalendar()}
          </ContainerBookingView>
        </BodyCalendar>
      </DateBooking>
      <AddBookingForm content={contentGlobal()} />
      <AlertDialog
        title="Overtime"
        diaglog="Do you want to create overtime?"
        open={overTime.isOver}
        handleOnAccept={handleOnAgreeOvertime}
        handleOnDisagree={handleOnCloseAlert}
      />
    </Container>
  );
}
export default TableCalendar;
