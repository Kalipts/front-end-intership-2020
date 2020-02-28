import React, { useState, useEffect, createContext } from 'react';
import moment from 'moment';

import { getResource } from '../api/resourceApi';
import { getBooking } from '../api/bookingApi';

const CalendarContext = createContext();

const CalendarProvider = props => {
  const [isLoading, setIsLoading] = useState(false);
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
        name: `${resource.name.first  } ${  resource.name.last}`,
        avatar: resource.avatar
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
    console.log(result);
    const bookingsConvert = result.map(booking => {
      const schedule = {
        ...booking,
        startDay: moment(booking.startDay),
        endDay: moment(booking.endDay)
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

    const bookingsNotSameScheduleStart = bookings.filter((booking, index) => {
      const isNotSameStart =
        booking.startDay.diff(schedule.startDay, 'days') !== 0 &&
        booking.resourceId === schedule.resourceId;
      return isNotSameStart;
    });
    bookingsNotSameScheduleStart.forEach(booking => {
      const isOverlapBookingStart =
        schedule.startDay.diff(booking.startDay, 'days') >= 0 &&
        schedule.startDay.diff(booking.endDay, 'days') <= 0;
      const isOverlapBookingEnd =
        schedule.endDay.diff(booking.startDay, 'days') <= 0 &&
        schedule.endDay.diff(booking.endDay, 'days') >= 0;
      if (isOverlapBookingStart) {
        numberBookingOverlap += 1;
      } else if (isOverlapBookingEnd) {
        numberBookingOverlap -= 1;
      }
    });
    return numberBookingOverlap;
  };
  const getMaxTotalOverlapBooking = indexResource => {
    let maxNumberOfBookingOverlap = 0;

    bookings.forEach(val => {
      if (searchResult[indexResource]._id !== val.resourceId) {
        return;
      }
      const bookingOverlap = bookings.filter(booking => {
        const isOverlapBooking =
          ((booking.startDay.diff(val.startDay, 'days') <= 0 &&
            booking.endDay.diff(val.startDay, 'days') >= 0) ||
            (booking.startDay.diff(val.endDay, 'days') >= 0 &&
              booking.endDay.diff(val.endDay, 'days') <= 0)) &&
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
    const bookingsWithResource = bookings.filter((booking, index) => {
      const isBookingBelongResource =
        booking.startDay.isSame(date, 'day') &&
        booking.resourceId === searchResult[indexResource]._id;
      return isBookingBelongResource;
    });
    return bookingsWithResource;
  }

  useEffect(() => {
    fetchResource();
    fetchBooking();
    return () => {};
  }, []);
  useEffect(() => {
    const filteredResults = persons.filter(item => {
      return item.name.toLowerCase().indexOf(search) !== -1;
    });
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
        getMarginTopBooking
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};
export { CalendarProvider, CalendarContext };
