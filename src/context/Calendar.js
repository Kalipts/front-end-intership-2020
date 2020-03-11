/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, createContext, useCallback } from 'react';
import moment from 'moment';

import { getResource } from '../api/resourceApi';
import { getProject } from '../api/projectApi';
import { getBooking, deleteBooking } from '../api/bookingApi';
import { HEIGHT_BOOKING } from '../containers/App/constant';
import { compareByDay } from '../utils/Date';

const CalendarContext = createContext();

const CalendarProvider = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [persons, setPersons] = useState([]);
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDay, setStartDay] = useState(moment('2019-12-30', 'YYYY-MM-DD'));
  const [endDay, setEndDay] = useState(moment('2020-02-03', 'YYYY-MM-DD'));
  const [disabled, setDisabled] = useState(false);

  const handleCloseModal = key => {
    setIsModalOpen(!isModalOpen);
  };
  const onDisabled = () => {
    setDisabled(true);
  };
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
  const fetchProject = async () => {
    setIsLoading(true);
    const res = await getProject();
    const result = res.data.projects;
    setProjects(result);
    setIsLoading(false);
  };
  const fetchBooking = useCallback(async () => {
    setIsLoading(true);
    const res = await getBooking(startDay, endDay);
    const result = res.data.bookings;
    const bookingsConvert = result.map(booking => {
      const schedule = {
        ...booking,
        project: booking.project,
        startDay: moment(booking.startDay),
        endDay: moment(booking.endDay),
      };
      return schedule;
    });
    setBookings([...bookingsConvert]);
    setIsLoading(false);
  }, [startDay, endDay]);
  const removeBooking = async id => {
    const updateBooking = bookings.filter(booking => booking._id !== id);
    await deleteBooking(id);
    setBookings([...updateBooking]);
  };

  const updateSearch = event => {
    setSearch(event.target.value.toLowerCase());
  };
  const getMarginTopBooking = schedule => {
    let numberBookingOverlap = 0;
    bookings.forEach(booking => {
      const isOverlapBookingStart =
        compareByDay(schedule.startDay, booking.startDay) > 0 &&
        compareByDay(schedule.startDay, booking.endDay) <= 0 &&
        schedule.resourceId === booking.resourceId;
      if (isOverlapBookingStart) {
        numberBookingOverlap += 1;
      }
    });
    const marginTop = `${numberBookingOverlap * HEIGHT_BOOKING}px`;
    return marginTop;
  };
  const getMaxTotalOverlapBooking = resourceId => {
    let maxNumberOfBookingOverlap = 0;
    bookings.forEach(val => {
      if (resourceId !== val.resourceId) {
        return;
      }
      const bookingOverlap = bookings.filter(booking => {
        const isOverlapBooking =
          compareByDay(booking.startDay, val.startDay) <= 0 &&
          compareByDay(booking.endDay, val.startDay) >= 0 &&
          resourceId === booking.resourceId &&
          resourceId === val.resourceId;
        return isOverlapBooking;
      });
      const numberBookingOverlap = bookingOverlap.length - 1;
      maxNumberOfBookingOverlap =
        numberBookingOverlap >= maxNumberOfBookingOverlap
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
    return () => {};
  }, []);
  useEffect(() => {
    fetchBooking();
    return () => {};
  }, [fetchBooking]);
  useEffect(() => {
    fetchProject();
    return () => {};
  }, []);
  useEffect(() => {
    const filteredResults = persons.filter(
      item => item.name.toLowerCase().indexOf(search) !== -1,
    );
    setSearchResult(filteredResults);
  }, [search, persons]);
  return (
    <CalendarContext.Provider
      value={{
        persons,
        projects,
        search,
        searchResult,
        updateSearch,
        bookings,
        setBookings,
        getMaxTotalOverlapBooking,
        getBookingWithResource,
        getMarginTopBooking,
        isModalOpen,
        handleCloseModal,
        setStartDay,
        setEndDay,
        startDay,
        endDay,
        disabled,
        onDisabled,
        removeBooking,
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};
export { CalendarProvider, CalendarContext };
