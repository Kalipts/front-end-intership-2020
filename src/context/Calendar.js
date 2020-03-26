/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, createContext, useCallback } from 'react';
import moment from 'moment';

import { getResource } from '../api/resourceApi';
import { getProject } from '../api/projectApi';
import { getBooking, deleteBooking, updateBooking } from '../api/bookingApi';
import { HEIGHT_BOOKING } from '../containers/App/constant';
import { compareByDay, getNumberOfDay, isWeekend } from '../utils/Date';

const CalendarContext = createContext();

const CalendarProvider = props => {
  const [, setIsLoading] = useState(false);
  const [persons, setPersons] = useState([]);
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDay, setStartDay] = useState(moment('2019-12-30', 'YYYY-MM-DD'));
  const [endDay, setEndDay] = useState(moment('2020-02-03', 'YYYY-MM-DD'));
  const [disabled, setDisabled] = useState(false);
  const [isHoverWorking, setIsHoverWorking] = useState(true);
  const [isChildVisible, setIsChildVisible] = useState(false);
  const [addBookingStatus, setAddBookingStatus] = useState(true);
  const [content, setContent] = useState({
    resource: [],
    booking: undefined,
    startDate: moment(),
    endDate: moment(),
  });
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [selecting, setSelecting] = useState(false);
  const [resourceStart, setResourceStart] = useState(0);
  const [first, setFirst] = useState(false);
  const [startCellDay, setStartCellDay] = useState(moment());
  const [lastDate, setLastDate] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [formIsOpening, setFormIsOpening] = useState(false);
  const contentGlobal = () => content;
  const setContentGlobal = newContent => {
    setContent(newContent);
  };

  const hoverObject = {
    start,
    end,
    selecting,
    resourceStart,
    first,
    startCellDay,
    lastDate,
    isHover,
    formIsOpening,
    isHoverWorking,
    addBookingStatus,
  };
  const hoverSetObject = {
    setStart,
    setEnd,
    setSelecting,
    setResourceStart,
    setFirst,
    setStartCellDay,
    setLastDate,
    setIsHover,
    setFormIsOpening,
    setIsHoverWorking,
    setAddBookingStatus,
  };

  const setBegin = () => {
    setIsHoverWorking(true);
  };
  const handleCloseModal = key => {
    if (isModalOpen) {
      setIsModalOpen(true);
    }

    if (isChildVisible) {
      return;
    }
    setFormIsOpening(!isModalOpen);
    setIsModalOpen(!isModalOpen);
    if (key === false) setIsHoverWorking(false);
    else setIsHoverWorking(true);
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
    const newBookings = bookings.filter(booking => booking._id !== id);
    await deleteBooking(id);
    setBookings([...newBookings]);
  };

  const updateSearch = event => {
    setSearch(event.target.value.toLowerCase());
  };
  const updateOnDidDragBooking = async (booking, resourceId, newStartDay) => {
    const checkWeekend = isWeekend(booking.startDay, booking.endDay);
    const length = compareByDay(booking.endDay, booking.startDay) + 1;
    const startDayFormat = moment(newStartDay)
      .format('ddd')
      .toString();
    const newEndDay = moment(newStartDay).add(length - 1, 'days');
    const endDayFormat = moment(newEndDay)
      .format('ddd')
      .toString();
    let newBooking;
    const compareWeekend = startDayFormat === 'Sat' || startDayFormat === 'Sun';
    const compareEndDayWeekend = endDayFormat === 'Sat' || endDayFormat === 'Sun';
    const objectBooking = (startDay_, endDay_) => {
      newBooking = {
        ...booking,
        resourceId,
        startDay: startDay_,
        endDay: endDay_,
      };
      return newBooking;
    };
    if (length === 1 && compareWeekend) return;
    if (checkWeekend && (compareWeekend || compareEndDayWeekend)) {
      return;
    }
    else if (checkWeekend) {

      if (isWeekend(newStartDay, newEndDay)) {
        newBooking = objectBooking(newStartDay, newEndDay);
      } else {
        newBooking = objectBooking(
          newStartDay,
          newEndDay.clone().add(-2, 'days'),
        );
      }
    } else if (startDayFormat === 'Sun') {

      if (length === 2) {


          newBooking = objectBooking(
          newStartDay.clone().add(-2, 'days'),
          newEndDay.clone().add(0, 'days'),
        );
      } else {
        newBooking = objectBooking(
          newStartDay.clone().add(-2, 'days'),
          newEndDay.clone().add(0, 'days'),
        );
      }
    } else if (startDayFormat === 'Sat') {

      if (length === 2) {
        newBooking = objectBooking(newStartDay.clone().add(-1, 'days'), newEndDay.clone().add(1, 'days'))
      }  else {
          newBooking = objectBooking(newStartDay.clone().add(2, 'days'), newEndDay.clone().add(0, 'days'))

      }
    } else if (endDayFormat === 'Sat' || endDayFormat === 'Sun') {

      if (endDayFormat === 'Sat') {
          newBooking = objectBooking(
              newStartDay.clone().add(-1, 'days'),
          newEndDay.clone().add(-1, 'days')
        );
      } else {
        newBooking = objectBooking(
          newStartDay.clone().add(-2, 'days'),
          newEndDay.clone().add(-2, 'days'),
        );
      }

    } else {
      const distanceStartDay = getNumberOfDay(booking.startDay, newStartDay);
      newBooking = {
        ...booking,
        resourceId,
        startDay: booking.startDay.add(distanceStartDay, 'days'),
        endDay: booking.endDay.add(distanceStartDay, 'days'),
      };
    }

    const newBookings = bookings.map(schedule => {
      if (schedule._id === booking._id) {
        return newBooking;
      }
      return schedule;
    });
    await updateBooking(newBooking);
    setBookings([...newBookings]);
    return newBookings;
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
        // eslint-disable-next-line no-shadow
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
        fetchBooking,
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
        setBegin,
        updateOnDidDragBooking,
        contentGlobal,
        setContentGlobal,
        start,
        setStart,
        end,
        setEnd,
        selecting,
        setSelecting,
        resourceStart,
        setResourceStart,
        first,
        setFirst,
        startCellDay,
        setStartCellDay,
        lastDate,
        setLastDate,
        isHover,
        setIsHover,
        addBookingStatus,
        setAddBookingStatus,
        isChildVisible,
        setIsChildVisible,
        formIsOpening,
        setFormIsOpening,
        hoverObject,
        hoverSetObject,
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};
export { CalendarProvider, CalendarContext };
