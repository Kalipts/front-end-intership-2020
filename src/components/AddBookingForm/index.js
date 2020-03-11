import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';

import { Input, TextField } from '@material-ui/core';
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
import useBookingForm from './CustomHooks';
import './styles.css';
import Modal from '../Dashboard/Modal';
import { CalendarContext } from '../../context/Calendar';
import { compareByDay } from '../../utils/Date';
import UtilizeInput from './UtilizeInput';
import { HOURS_IN_DAY } from '../../containers/App/constant';

const AddBookingForm = props => {
  const [startDay, setStartDay] = useState(moment());
  const [endDay, setEndDay] = useState(moment());
  const { inputs, handleInputChange, handleSubmit } = useBookingForm();
  const { resource, bookingWithResource, startDate, endDate } = props.content;
  const [person, setPerson] = useState([]);
  const [utilize, setUtilize] = useState(100);
  const { handleCloseModal, disabled, onDisabled } = useContext(
    CalendarContext,
  );
  useEffect(() => {
    setPerson(resource);
    setStartDay(moment(startDate.toString()));
    setEndDay(moment(endDate.toString()));
  }, [props]);
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

  return (
    <Modal disabled={disabled}>
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
        <Label>
          Total:{' '}
          {(utilize / 100) *
            (compareByDay(endDay, startDay) + 1) *
            HOURS_IN_DAY}{' '}
          hours
        </Label>
      </TotalTime>
      <SelectedItem title="Projects" src={require('../../images/bag.svg')}>
        <Item onDisabled={onDisabled} type="Project" makeIcon></Item>
      </SelectedItem>
      <SelectedItem
        title="Details"
        src={require('../../images/files-and-folders.svg')}
      >
        <InputDetail />
      </SelectedItem>
      <SelectedItem
        onDisabled={onDisabled}
        title="Resource"
        src={require('../../images/resource.svg')}
      >
        <Item
          onDisabled={onDisabled}
          type="Resource"
          src={person ? person.avatar : ''}
        >
          {person ? person.name : ''}
        </Item>
      </SelectedItem>

      <FooterBooking>
        <ContainButton>
          <Button primary>
            <span>Add Booking</span>
          </Button>
          <Button onClick={()=>onClickCancle(false)}>
            <span>Cancle</span>
          </Button>
        </ContainButton>
      </FooterBooking>
    </Modal>
  );
};

export default AddBookingForm;
