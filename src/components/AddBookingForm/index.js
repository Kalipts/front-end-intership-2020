import React, { useState, useEffect, useContext, useRef } from 'react';
import moment from 'moment';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';
import AlertInput from './AlertInput';
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
import { compareByDay } from '../../utils/Date';
import UtilizeInput from './UtilizeInput';
import { MAX_UTILIZE } from '../../containers/App/constant';
import { validate } from './validate';
import { addBooking, updateBooking } from '../../api/bookingApi';
import { getHoursFromUtilize } from '../../utils/Utilize';

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
  const [details, setDetails] = useState('');
  const [person, setPerson] = useState(resource);
  const [utilize, setUtilize] = useState(booking.utilize);
  const [project, setProject] = useState(booking.project);
  const [isModify, setIsModify] = useState(false);
  const [errors, setErrors] = useState({});
  const [onEdit, setOnEdit] = useState(false);
  const { handleCloseModal, persons, projects, fetchBooking } = useContext(
    CalendarContext,
  );
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
      setDetails('');
      setProject(booking.project);
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
    setErrors({});
    return selectedProject;
  };

  const handleSummit = async () => {
    const newBooking = {
      utilize,
      hour: getHoursFromUtilize(startDay, endDay, utilize),
      startDay,
      endDay,
      details,
      isDuration: true,
      resourceId: person._id,
      project,
    };
    const err = validate(startDay, endDay, project);
    if (!_.isEmpty(err)) {
      setErrors(err);
      return;
    }
    if (!isModify) await addBooking(newBooking);
    else {
      newBooking._id = booking._id;
      await updateBooking(newBooking);
    }
    fetchBooking();
    onClickCancle();
  };

  return (
    <Modal>
      <Header />
      <TimeRatio>
        <Percentage>
          <Squater alt="" src={require('../../images/quarter.svg')} />
          <PercentageInside>Percentage</PercentageInside>
        </Percentage>
      </TimeRatio>
      <BookingTime>
        <InputDate
          label="Start"
          handleChange={changeStartDay}
          day={startDay}
          errors={errors.startDay}
        ></InputDate>
        <InputDate
          label="End"
          handleChange={changeEndDay}
          day={endDay}
          errors={errors.endDay}
        ></InputDate>
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
        <Label>
          Total: {getHoursFromUtilize(startDate, endDate, utilize)} hours
        </Label>
      </TotalTime>
      <ProjectItem
        src={project.color}
        onChangeItem={handleChangeProject}
        errors={errors.project}
      >
        {project.name}
      </ProjectItem>
      <SelectedItem title="Details" src={iconDetail}>
        <InputDetail onChange={handleChangeDetail} value={details} />
      </SelectedItem>
      <ResourceItem src={person.avatar} onChangeItem={handleChangePerson}>
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
