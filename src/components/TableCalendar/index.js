import React from 'react';
import './index.css';
import moment from 'moment';
import BookingCard from './BookingCard';
import BookingText from './BookingContent';
import BookingTime from './BookingTime';
import { FaFileExcel } from 'react-icons/fa';

const Booking = {
  startDay: moment('2020-01-01'),
  details: 'ABC',
  endDay: moment('2020-03-01')
};
class TableCalendar extends React.Component {
  state = {
    dateContext: moment(),
    today: moment(),
    testDates: new Array(53)
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
    let simple = new Date(y, 0, 1 + (w - 1) * 7);
    let dow = simple.getDay();
    let ISOWeekStart = simple;
    if (dow <= 4) ISOWeekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else ISOWeekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOWeekStart;
  }
  debugger;
  render() {
    let grid_contain = [];
    let numberOfWeek = new Array(53).fill(1);
    let weekDates = numberOfWeek.map((testDate, i) => {
      console.log('Da chay');
      let week;
      let days;
      days = new Array(7).fill(1).map((day, index) => {
        day = moment(this.getDateOfISOWeek(i, 2020))
          .add(index, 'days')
          .format('D');
        let date = moment(this.getDateOfISOWeek(i, 2020))
          .add(index, 'days')
          .format('MM/DD/YYYY');
        let month = moment(date).format('M');
        let d = this.weekdaysShort[(index + 1) % 7];
        let classOfDay = 'day0 day ' + d.toLowerCase();
        return (
          <div key={day + '' + i} className={classOfDay}>
            <span className="day1"> {d} </span>
            <br />
            <span> {day} </span>
          </div>
        );
      });
      week = (
        <div className="y-2019">
          <span className="top-week"> Week {i} </span>
        </div>
      );
      const cellInCalendar = new Array(7 * 7).fill(1).map((item, index) => {
        return (
          <div
            key={index}
            style={{
              verticalAlign: 'sub',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}
          ></div>
        );
      });
      grid_contain.push(<div className="item contain">{cellInCalendar}</div>);
      return (
        <div className="item top">
          <div className="month">
            {week}
            <div className="week">{days}</div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="item aside1 left"></div>
        <div className="item aside2 left"></div>

        <div className="right">
          <div className="grid-top  ">{weekDates}</div>
          <div className="gird-contain ">{grid_contain}</div>
        </div>
      </div>
    );
  }
}

export default TableCalendar;
