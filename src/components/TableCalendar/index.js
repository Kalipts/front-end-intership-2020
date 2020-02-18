import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import BookingCard from './BookingCard';
import BookingContent from './BookingContent';
import BookingTime from './BookingTime';

class TableCalendar extends React.Component {
  state = {
    dateContext: moment(),
    today: moment()
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

  render() {
    // define

    console.log(this.weekdaysShort[1 % 7]);

    let week_dates = [];
    let grid_contain = [];
    for (let i = 1; i <= 53; i++) {
      let week;
      let days = [];
      for (let j = 0; j <= 6; j++) {
        let day = moment(this.getDateOfISOWeek(i, 2020))
          .add(j, 'days')
          .format('D');
        let date = moment(this.getDateOfISOWeek(i, 2020))
          .add(j, 'days')
          .format('MM/DD/YYYY');

        let month = moment(date).format('M');
        console.log(' hello : ', month);

        let completeDay = month + '-' + day + '-' + this.year();

        let d = this.weekdaysShort[(j + 1) % 7];
        let classOfDay = 'day0 day ' + d.toLowerCase();
        days.push(
          <div className={classOfDay}>
            <span className="day1">{d}</span>
            <br />
            <span>{day}</span>
          </div>
        );
      }
      week = (
        <div className="y-2019">
          <span className="top-week"> Week {i}</span>
        </div>
      );
      week_dates.push(
        <div className="item top">
          <div className="month">
            {week}
            <div className="week">{days}</div>
          </div>
        </div>
      );

      grid_contain.push(
        <div className="item contain">
          <div>
            {' '}
            <BookingCard color={'green'} length ={5}>
              {' '}
              <BookingContent>asd</BookingContent>
              <BookingTime>4h</BookingTime>
            </BookingCard>
            {' '}
            <BookingCard color={'red'}length ={4}>
              {' '}
              <BookingContent>asd</BookingContent>
              <BookingTime>4h</BookingTime>
            </BookingCard>
            {' '}
            <BookingCard color={'blue'} length ={3}>
              {' '}
              <BookingContent>asd</BookingContent>
              <BookingTime>4h</BookingTime>
            </BookingCard>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="item aside1 left"></div>
        <div className="item aside2 left"></div>

        <div className="right">
          <div className="grid-top  ">{week_dates}</div>

          <div className="gird-contain ">{grid_contain}</div>
        </div>
      </div>
    );
  }
}

export default TableCalendar;
