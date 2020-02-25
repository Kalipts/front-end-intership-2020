import React from 'react';
import { useState } from 'react';
import moment from 'moment';

import { getNumberOfDay } from '../../utils/Date';
import { useWindowSize } from '../../utils/WIndow';

import Booking from './Booking';
import ContainerBookingView from './TableCalendar/Style/ContainerBookingView';
import BookingView from './TableCalendar/Style/BookingView';
import RowBookingView from './TableCalendar/Style/RowBookingView';
import ContentBooking from './TableCalendar/Style/ContentBooking';
import DateBooking from './TableCalendar/Style/DateBooking';
import HeaderCalendar from './TableCalendar/HeaderCalendar';


export default function TableCalendar(props) {
  const [bookings] = useState([
    {
      startDay: moment('2019-12-30', 'YYYY-MM-DD'),
      details: 'ABC',
      endDay: moment('2020-01-02', 'YYYY-MM-DD'),
      resourceId: 0
    },
    {
      startDay: moment('2019-12-30', 'YYYY-MM-DD'),
      details: 'ABCD',
      endDay: moment('2020-01-01', 'YYYY-MM-DD'),
      resourceId: 0
    },
    {
      startDay: moment('2019-12-30', 'YYYY-MM-DD'),
      details: 'ABCD',
      endDay: moment('2020-01-01', 'YYYY-MM-DD'),
      resourceId: 0
    }
  ]);
  const [startDay] = useState(props.startDay);
  const [endDay] = useState(props.endDay);
  const [size] = useWindowSize();

  const numberOfDay = getNumberOfDay(startDay,endDay);

  function getMaxTotalOvepBooking(resourceId) {
    const maxNumberOfBookingOverlap = bookings.reduce(
      (accum, val) => {
        if (resourceId !== val.resourceId) {
          return 0;
        }
        const numberBookingOverlap = bookings.filter( booking => {
          const isOverlapBooking =
            (booking.startDay.diff(val.startDay, 'days') <= 0 &&
              booking.endDay.diff(val.startDay, 'days') >= 0) ||
            (booking.startDay.diff(val.endDay, 'days') >= 0 &&
              booking.endDay.diff(val.endDay, 'days') <= 0);
          return isOverlapBooking;
        });
        return numberBookingOverlap.length - 1;
      },
      0
    );
    return maxNumberOfBookingOverlap;
  }
  function getBookingWithResource(date, resourceId) {
    const bookingWithResource = bookings.filter(
      (booking, index) =>
        booking.startDay.isSame(date) && booking.resourceId === resourceId
    );
    const bookingDateWithResourceRender = bookingWithResource.map(
      (booking, index) => {
        return (
          <Booking
            key={index}
            startDay={booking.startDay}
            endDay={booking.endDay}
            color={'green'}
            isDuration={true}
            top={0}
            detail={booking.details}
          ></Booking>
        );
      }
    );

    return bookingDateWithResourceRender;
  }
  function createRenderCellsInCalendar(numberOfResource, numberOfDay) {
    let renderCells = new Array(numberOfResource).fill(1).map((cell, index) => {
      let date = moment(startDay);
      let overlapBooking = getMaxTotalOvepBooking(index);

      const days = new Array(numberOfDay).fill(1).map((item, i) => {
        const bookingDateWithResource = getBookingWithResource(date, index);
        date.add(i + 1, 'days');

        return (
          <ContentBooking isWeekend={false} key={date + ' ' + i}>
            {bookingDateWithResource}
          </ContentBooking>
        );
      });
      return (
        <RowBookingView
          key={index}
          overlapBooking={overlapBooking}
          numberOfDay={numberOfDay}
        >
          {days}
        </RowBookingView>
      );
    });
    return renderCells
  };
  const cellInCalendar = createRenderCellsInCalendar(4,numberOfDay);


  return (
    <table cellPadding={0} cellSpacing={0}>
      <tbody>
        <tr>
          <td
            style={{
              width: '185px',
              verticalAlign: 'top'
            }}
          >
            <div
              style={{
                border: '1px solid #e9e9e9',
                overflow: 'hidden',
                display: 'block'
              }}
            >
              <div
                style={{
                  overflow: 'hidden',
                  borderBottom: '	border: 1px solid #E1E7ED',
                  height: '70px'
                }}
              ></div>
              <div
                style={{
                  overflow: 'auto',
                  width: '186px'
                }}
              >
                <div style={{ paddingBottom: '0px' }}>
                  <table
                    cellPadding={0}
                    cellSpacing={0}
                    style={{
                      width: '100%',
                      margin: '0',
                      padding: '0',
                      borderSpacing: '0',
                      textAlign: 'center'
                    }}
                  >
                    <tbody
                      style={{
                        display: 'table-row-group',
                        verticalAlign: 'middle',
                        borderColor: 'inherit'
                      }}
                    >
                      <tr
                        style={{
                          borderBottom: '1px solid #e9e9e9',
                          height: 46 + getMaxTotalOvepBooking(0) * 22 + 'px'
                        }}
                      >
                        <td style={{ height: '46px' }}>
                          <div
                            style={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              paddingRight: '5px !important',
                              fontSize: '14px',
                              fontWeight: '500'
                            }}
                          >
                            <span>ABC</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #e9e9e9' }}>
                        <td style={{ height: '46px' }}>
                          <div
                            style={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              paddingRight: '5px !important',
                              fontSize: '14px',
                              fontWeight: '500'
                            }}
                          >
                            <span>ABC</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #e9e9e9' }}>
                        <td style={{ height: '46px' }}>
                          <div
                            style={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              paddingRight: '5px !important',
                              fontSize: '14px',
                              fontWeight: '500'
                            }}
                          >
                            <span>ABC</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #e9e9e9' }}>
                        <td style={{ height: '46px' }}>
                          <div
                            style={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              paddingRight: '5px !important',
                              fontSize: '14px',
                              fontWeight: '500'
                            }}
                          >
                            <span>ABC</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </td>
          <DateBooking width={size.width}>
            <HeaderCalendar startDay={startDay} endDay={endDay}></HeaderCalendar>
            <ContainerBookingView numberOfDay={getNumberOfDay(startDay,endDay)}>
              <BookingView cellPadding={0} cellSpacing={0}>
                <tbody>{cellInCalendar}</tbody>
              </BookingView>
            </ContainerBookingView>
          </DateBooking>
        </tr>
      </tbody>
    </table>
  );
}
