import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';
import Header from './HeaderBooking';
import {
  BookingTime,
  Percentage,
  PercentageInside,
  Squater,
  TimeRatio,
  TotalTime,
  Utilization,
  InputDetail,
} from './BodyBooking';
import Label from './Style/Label';
import BottomLine from './Style/BottomLine';
import SelectedItem from './SelectedItem';
import ResourceItem from './ResourceItem';
import ProjectItem from './ProjectItem';
import { ContainButton, FooterBooking } from './FooterBooking';
import InputDate from './InputDate';
import Button from './Button';
import iconDetail from '../../images/files-and-folders.svg';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import Modal from '../Dashboard/Modal';
import { CalendarContext } from '../../context/Calendar';
import { compareByDay, getTotalHour } from '../../utils/Date';
import UtilizeInput from './UtilizeInput';
import { MAX_UTILIZE } from '../../containers/App/constant';
import { addBooking, updateBooking } from '../../api/bookingApi';

const AddBookingForm = props => {
  const {
    resource,
    booking = {
      _id: undefined,
      project: { name: '', color: '' },
      utilize: MAX_UTILIZE,
    },
    startDate,
    endDate,
  } = props.content;
  const [startDay, setStartDay] = useState(moment());
  const [endDay, setEndDay] = useState(moment());
  const [details, setDetails] = useState();
  const [person, setPerson] = useState(resource);
  const [utilize, setUtilize] = useState(booking.utilize);
  const [project, setProject] = useState(booking.project);
  const [isModify, setIsModify] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const {
    handleCloseModal,
    onDisabled,
    persons,
    projects,
    fetchBooking,
    isChildVisible,
  } = useContext(CalendarContext);
  useEffect(() => {
    setPerson(resource);
    if (booking._id) {
      setProject(booking.project);
      setDetails(booking.details);
      setUtilize(booking.utilize);
      setStartDay(moment(booking.startDay));
      setEndDay(moment(booking.endDay));
      setIsModify(true);
      setDetails(booking.details);
    } else {
      setStartDay(moment(startDate.toString()));
      setEndDay(moment(endDate.toString()));
      setIsModify(false);
    }
    setOnEdit(false);
  }, [resource, startDate, endDate]);

  const onClickCancle = i => handleCloseModal(i);
  const changeEndDay = newDate => {
    if (compareByDay(newDate, startDay) < 0) setStartDay(moment(newDate));
    setEndDay(newDate);
  };
  const changeStartDay = newDate => {
    if (compareByDay(newDate, endDay) > 0) setEndDay(newDate);
    setStartDay(newDate);
  };

  const handleChangeUtilize = event => {
    setUtilize(event.target.value);
  };
  const handleChangeDetail = event => {
    setDetails(event.target.value);
  };

  const handleChangePerson = event => {
    const _id = event.target.value;
    const selectedPerson = persons.find(e => e._id === _id);
    setPerson(selectedPerson);
    return selectedPerson;
  };

  const handleChangeProject = event => {
    const _id = event.target.value;
    const selectedProject = projects.find(e => e._id === _id);
    setProject(selectedProject);
    return selectedProject;
  };

  const handleSummit = async () => {
    if (!isModify) await addNewBooking();
    else await editBooking();
    fetchBooking();
    onClickCancle();
  };

  const addNewBooking = () => {
    const newBooking = {
      utilize,
      hour: getTotalHour(startDay, endDay, utilize),
      startDay,
      endDay,
      details,
      resourceId: person._id,
      project: project._id,
    };
    addBooking(newBooking);
  };

  const editBooking = () => {
    const newBooking = {
      _id: booking._id,
      utilize,
      hour: getTotalHour(startDay, endDay, utilize),
      startDay,
      endDay,
      details,
      resourceId: person._id,
      project: project,
    };
    updateBooking(newBooking);
  };

  return (
    <Modal isChildVisible={isChildVisible}>
      <Header />
      <TimeRatio>
        <Percentage>
          <Squater alt="" src={require('../../images/quarter.svg')} />
          <PercentageInside>Percentage</PercentageInside>
        </Percentage>
      </TimeRatio>
      <BookingTime>
        <InputDate label="Start" handleChange={changeStartDay} day={startDay} />
        <InputDate label="End" handleChange={changeEndDay} day={endDay} />
      </BookingTime>
      <Utilization>
        <Label>Utilization</Label>
        <TextField
          value={utilize}
          onChange={handleChangeUtilize}
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: UtilizeInput,
          }}
        />
        <BottomLine />
      </Utilization>
      <TotalTime>
        <Label>Total: {getTotalHour(endDay, startDay, utilize)} hours</Label>
      </TotalTime>
      <ProjectItem
        onDisabled={onDisabled}
        src={project.color}
        onChangeItem={handleChangeProject}
      >
        {project.name}
      </ProjectItem>
      <SelectedItem title="Details" src={iconDetail}>
        <InputDetail onChange={handleChangeDetail} value={details} />
      </SelectedItem>
      <ResourceItem
        onDisabled={onDisabled}
        src={person.avatar}
        onChangeItem={handleChangePerson}
      >
        {person.name}
      </ResourceItem>
      <FooterBooking>
        <ContainButton>
          <Button primary onClick={handleSummit}>
            <span>{isModify ? 'Save Booking' : 'Add Booking'}</span>
          </Button>
          <Button onClick={() => onClickCancle(false)}>
            <span>Cancle</span>
          </Button>
        </ContainButton>
      </FooterBooking>
    </Modal>
  );
};

AddBookingForm.propTypes = {
  content: PropTypes.shape({
    resource: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    booking: PropTypes.object,
    startDate: PropTypes.instanceOf(moment),
    endDate: PropTypes.instanceOf(moment),
  }),
};
export default AddBookingForm;
