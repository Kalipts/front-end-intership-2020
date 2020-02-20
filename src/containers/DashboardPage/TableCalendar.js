import React from 'react';
import moment from 'moment';
import * as _ from 'lodash';
import Calendar from '../../components/TableCalendar/Calendar';
import '../../components/TableCalendar/index.css';

import Booking from './Booking';
import BodyCalendar from '../../components/TableCalendar/BodyCalendar';
import HeaderCalendar from '../../components/TableCalendar/HeaderCalendar';
import GridContain from '../../components/TableCalendar/GridContain';
import CellInGrid from '../../components/TableCalendar/CellInGrid';
import DayHeader from '../../components/TableCalendar/DayHeader';
import Week from '../../components/TableCalendar/Week';
import BottomWeek from '../../components/TableCalendar/BottomWeek';
import { TopWeek, BodyTopWeek } from '../../components/TableCalendar/TopWeek';

const BookingA = {
  startDay: moment('2020-01-01'),
  details: 'ABC',
  endDay: moment('2020-01-02'),
  resourceId: 1
};

class TableCalendar extends React.Component {
  state = {
    dateContext: moment(),
    today: moment(),
    schedulerData: [
      BookingA,
      {
        startDay: moment('2020-01-01'),
        details: 'ABCD',
        endDay: moment('2020-01-03'),
        resourceId: 0
      },
      {
        startDay: moment('2020-01-06'),
        details: 'ABCD',
        endDay: moment('2020-01-06'),
        resourceId: 0
      }
    ],
    resource: []
  };
  getBooking = (startDay, resourceId) => {
    const { schedulerData } = this.state;
    const listBookings = _.filter(schedulerData, booking => {
      return (
        booking.startDay.isSame(moment(startDay)) &&
        booking.resourceId === resourceId
      );
    });
    const listBookingView = listBookings.map((booking, index) => (
      <Booking
        key={index}
        startDay={booking.startDay}
        endDay={booking.endDay}
        color={'green'}
        isDuration={false}
        top={0}
        detail={booking.details}
      ></Booking>
    ));
    if (listBookings.length !== 0) {
      console.log('Hello');
    }
    return listBookingView;
  };
  weekdaysShort = moment.weekdaysShort();
  year = () => {
    return this.state.dateContext.format('Y');
  };

  month = () => {
    return this.state.dateContext.format('MMMM');
  };

  monthNumber = () => {
    return this.state.dateContext.format('M');
  };

  getDateOfISOWeek(w, y) {
    const simple = new Date(y, 0, 1 + (w - 1) * 7);
    const dow = simple.getDay();
    let ISOWeekStart = simple;
    if (dow <= 4) ISOWeekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else ISOWeekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOWeekStart;
  }
  render() {
    const gridContain = [];
    const numberOfWeek = new Array(53).fill(1);
    const weekDates = numberOfWeek.map((day, i) => {
      let week;
      let days;
      let cellInCalendar = new Array(7 * 7).fill(1);

      days = new Array(7).fill(1).map((day, index) => {
        day = moment(this.getDateOfISOWeek(i + 1, 2020))
          .add(index, 'days')
          .format('D');
        let date = moment(this.getDateOfISOWeek(i + 1, 2020))
          .add(index, 'days')
          .format('YYYY-MM-DD');
        let month = moment(date).format('M');
        let d = this.weekdaysShort[(index + 1) % 7];
        let isWeekend = d === 'Sat' || d === 'Sun';

        cellInCalendar = cellInCalendar.map((cell, cellIndex) => {
          let bookings = [];
          let cellView;
          if((cellIndex - index) % 7 === 0){
            bookings = this.getBooking(date, (cellIndex - index) / 7);
          }
          if(bookings.length ===0){
          }
          
          return (cellIndex - index) % 7 === 0 ? (
            <CellInGrid
              key={date + ' ' + (cellIndex - index) / 7}
              isWeekend={isWeekend}
            >
              {this.getBooking(date, (cellIndex - index) / 7)}{' '}
            </CellInGrid>
          ) : (
            cell
          );
        });
        return (
          <DayHeader key={day + ' ' + i} isWeekend={isWeekend}>
            <span className="day1"> {d} </span>
            <br />
            <span> {day} </span>
          </DayHeader>
        );
      });
      week = (
        <TopWeek>
          <BodyTopWeek> Week {i + 1} </BodyTopWeek>
        </TopWeek>
      );

      gridContain.push(
        <div key={i} className="item contain">
          {cellInCalendar}
        </div>
      );
      return (
        <Week>
          {week}
          <BottomWeek>{days}</BottomWeek>
        </Week>
      );
    });
    return (
      <Calendar>
        <div className="item aside1 left"></div>
        <div className="item aside2 left"></div>
        <BodyCalendar>
          <HeaderCalendar>{weekDates}</HeaderCalendar>
          <GridContain numberOfResource={7}>{gridContain}</GridContain>
        </BodyCalendar>
      </Calendar>
    );
  }
}

export default TableCalendar;
