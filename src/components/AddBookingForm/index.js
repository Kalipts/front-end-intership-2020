import React, {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
  useCallback,
} from 'react';
import moment from 'moment';

import { TextField } from '@material-ui/core';
import Header from './HeaderBooking';
import {
  BookingTime,
  Duration,
  DurationInside,
  Lock,
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
import Item from './Item';
import SelectedItem from './SelectedItem';
import { ContainButton, FooterBooking } from './FooterBooking';
import InputDate from './InputDate';
import Button from './Button';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import Modal from '../Dashboard/Modal';
import { CalendarContext } from '../../context/Calendar';
import { compareByDay } from '../../utils/Date';
import UtilizeInput from './UtilizeInput';
import { HOURS_IN_DAY, MAX_UTILIZE } from '../../containers/App/constant';
import { addBooking, updateBooking } from '../../api/bookingApi';

const AddBookingForm = props => {
  const [startDay, setStartDay] = useState(moment());
  const [endDay, setEndDay] = useState(moment());
  const { resource, booking, startDate, endDate } = props.content;
  const [details, setDetails] = useState('');
  const [person, setPerson] = useState(null);
  const [utilize, setUtilize] = useState(MAX_UTILIZE);
  const [project, setProject] = useState(null);
  const [isModify, setIsModify] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const {
    handleCloseModal,
    disabled,
    onDisabled,
    persons,
    projects,
    fetchBooking,
    addBookingStatus,
    isChildVisible,
    setIsChildVisible,
    setAddBookingStatus,
  } = useContext(CalendarContext);
  useEffect(() => {
    if (booking) {
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
      setUtilize(MAX_UTILIZE);
    }
    setOnEdit(false);
  }, [resource, booking, startDate, endDate]);

  const onClickCancle = i => handleCloseModal(i);
  const changeEndDay = newDate => {
    if (compareByDay(newDate, startDay) < 0) {
      setStartDay(moment(newDate));
    }
    setEndDay(newDate);
  };
  const changeStartDay = newDate => {
    if (compareByDay(newDate, endDay) > 0) {
      setEndDay(newDate);
    }
    setStartDay(newDate);
  };

  const hours = (start, end) =>
    (utilize / MAX_UTILIZE) * (compareByDay(start, end) + 1) * HOURS_IN_DAY;

  const handleChangeDetail = e => {
    setDetails(e.target.value);
  };

  const handleChangePerson = e => {
    const _id = e.target.value;
    const selectedPerson = persons.find(e => e._id === _id);
    setPerson(selectedPerson);
  };

  const handleChangeProject = e => {
    const _id = e.target.value;
    const selectedProject = projects.find(e => e._id === _id);
    setProject(selectedProject);
  };

  const handleSummit = async () => {
    if (!isModify) await addNewBooking();
    else await editBooking();
    fetchBooking();
    onClickCancle();
  };

  const addNewBooking = () => {
    const selectedPerson = person || resource;
    const newBooking = {
      utilize,
      hour: hours(startDay, endDay),
      startDay,
      endDay,
      details,
      resourceId: selectedPerson._id,
      project: project._id,
    };
    addBooking(newBooking);
  };

  const editBooking = () => {
    const selectedPerson = person || resource;
    const selectedProject = project || booking.project;

    const newBooking = {
      // eslint-disable-next-line react/prop-types
      _id: booking._id,
      utilize,
      hour: hours(startDay, endDay),
      startDay,
      endDay,
      details,
      resourceId: selectedPerson._id,
      project: selectedProject._id,
    };
    updateBooking(newBooking);
  };
  function isEmpty(val) {
    return !!(val === undefined || val == null || val.length <= 0);
  }
  function getProject() {
    if (isModify && isEmpty(project)) {
      return isEmpty(booking) ? null : booking.project;
    }
    return isEmpty(project) ? null : project;
  }

  return (
    <Modal isChildVisible={isChildVisible} disabled={disabled}>
      <Header />
      <TimeRatio>
        <Percentage>
          <Squater alt="" src={require('../../images/quarter.svg')} />
          <PercentageInside>Percentage</PercentageInside>
        </Percentage>
        <Duration>
          <Lock alt="" src={require('../../images/clock .svg')} />
          <DurationInside>Duration</DurationInside>
        </Duration>
      </TimeRatio>
      <BookingTime>
        <InputDate label="Start" handleChange={changeStartDay} day={startDay} />
        <InputDate label="End" handleChange={changeEndDay} day={endDay} />
      </BookingTime>
      <Utilization>
        <Label>Utilization</Label>
        <TextField
          value={utilize}
          onChange={e => setUtilize(e.target.value)}
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: UtilizeInput,
          }}
        />
        <BottomLine />
      </Utilization>
      <TotalTime>
        <Label>Total: {hours(endDay, startDay)} hours</Label>
      </TotalTime>
      <SelectedItem title="Projects" src={require('../../images/bag.svg')}>
        <Item
          handleChildVisible={setIsChildVisible}
          onDisabled={onDisabled}
          type="Project"
          makeIcon
          src={getProject() !== null ? getProject().color : ''}
          onChangeItem={handleChangeProject}
        >
          {getProject() !== null ? getProject().name : ''}
        </Item>
      </SelectedItem>
      <SelectedItem
        title="Details"
        src={require('../../images/files-and-folders.svg')}
      >
        <InputDetail onChange={handleChangeDetail} value={details} />
      </SelectedItem>
      <SelectedItem
        onDisabled={onDisabled}
        title="Resource"
        src={require('../../images/resource.svg')}
      >
        <Item
          handleChildVisible={setIsChildVisible}
          onDisabled={onDisabled}
          type="Resource"
          src={person == null ? resource.image : person.image}
          onChangeItem={handleChangePerson}
        >
          {person == null ? resource.name : person.name}
        </Item>
      </SelectedItem>

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

export default AddBookingForm;
