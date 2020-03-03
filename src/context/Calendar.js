/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, createContext } from 'react';
import moment from 'moment';

import { getResource } from '../api/resourceApi';
import { getBooking } from '../api/bookingApi';
import { HEIGHT_BOOKING } from '../containers/App/constant';
import { compareByDay } from '../utils/Date';

const CalendarContext = createContext();

const CalendarProvider = props => {
  const [, setIsLoading] = useState(false);
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [bookings, setBookings] = useState([]);
  const fetchResource = async () => {
    setIsLoading(true);
    const res = await getResource();
    const result = res.data.resources;
    const personsFilter = result.map(resource => {
      const person = {
        _id: resource._id,
        name: `${resource.name.first} ${resource.name.last}`,
        avatar: resource.avatar,
      };
      return person;
    });
    setPersons(personsFilter);
    setSearchResult(personsFilter);
    setIsLoading(false);
  };
  const fetchBooking = async () => {
    setIsLoading(true);
    const res = await getBooking();
    const result = res.data.bookings;
    const bookingsConvert = result.map(booking => {
      const schedule = {
        ...booking,
        startDay: moment(booking.startDay),
        endDay: moment(booking.endDay),
      };
      return schedule;
    });
    setBookings(bookingsConvert);
    setIsLoading(false);
  };
  const updateSearch = event => {
    setSearch(event.target.value.toLowerCase());
  };
  const getMarginTopBooking = schedule => {
    let numberBookingOverlap = 0;
    bookings.forEach(booking => {
      const isOverlapBookingStart =
        compareByDay(schedule.startDay, booking.startDay) > 0 &&
        compareByDay(schedule.startDay, booking.endDay) <= 0;
      if (isOverlapBookingStart) {
        numberBookingOverlap += 1;
      }
    });
    const marginTop = `${numberBookingOverlap * HEIGHT_BOOKING}px`;
    return marginTop;
  };
  const getMaxTotalOverlapBooking = indexResource => {
    let maxNumberOfBookingOverlap = 0;
    bookings.forEach(val => {
      if (searchResult[indexResource]._id !== val.resourceId) {
        return;
      }
      const bookingOverlap = bookings.filter(booking => {
        const isOverlapBooking =
          ((compareByDay(booking.startDay, val.startDay) <= 0 &&
            compareByDay(booking.endDay, val.startDay) >= 0) ||
            (compareByDay(booking.startDay, val.endDay) >= 0 &&
              compareByDay(booking.endDay, val.endDay) <= 0)) &&
          searchResult[indexResource]._id === booking.resourceId;
        return isOverlapBooking;
      });
      const numberBookingOverlap = bookingOverlap.length - 1;
      maxNumberOfBookingOverlap =
        numberBookingOverlap > maxNumberOfBookingOverlap
          ? numberBookingOverlap
          : maxNumberOfBookingOverlap;
    });
    return maxNumberOfBookingOverlap;
  };
  function getBookingWithResource(date, indexResource) {
    const bookingsWithResource = bookings
      .filter(booking => {
        const isBookingBelongResource =
          booking.startDay.isSame(date, 'day') &&
          booking.resourceId === searchResult[indexResource]._id;
        return isBookingBelongResource;
      })
      .sort(
        (first, second) =>
          compareByDay(first.startDay, first.endDay) -
          compareByDay(second.startDay, second.endDay),
      );
    return bookingsWithResource;
  }
  useEffect(() => {
    fetchResource();
    fetchBooking();
    return () => {};
  }, []);
  useEffect(() => {
    const filteredResults = persons.filter(
      item => item.name.toLowerCase().indexOf(search) !== -1,
    );
    setSearchResult(filteredResults);
  }, [search]);
  return (
    <CalendarContext.Provider
      value={{
        persons,
        search,
        searchResult,
        updateSearch,
        bookings,
        setBookings,
        getMaxTotalOverlapBooking,
        getBookingWithResource,
        getMarginTopBooking,
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};
export { CalendarProvider, CalendarContext };
