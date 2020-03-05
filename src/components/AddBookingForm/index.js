import React, { useState, useEffect, useContext } from 'react';
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

const AddBookingForm = props => {
  const { inputs, handleInputChange, handleSubmit } = useBookingForm();
  const { resource, bookingWithResource, date } = props.content;
  const [person, setPerson] = useState();
  const { handleCloseModal, disabled, onDisabled } = useContext(
    CalendarContext,
  );
  useEffect(() => {
    setPerson(resource);
  }, [{}]);
  const onClickCancle = () => handleCloseModal();

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
        <InputDate label="Start" default={date} />
        <InputDate label="End" default={date} />
      </BookingTime>
      <Utilization>
        <Label>Utilization</Label>
        <input />
        <BottomLine />
      </Utilization>
      <TotalTime>
        <Label>Total: 24 hours</Label>
      </TotalTime>
      <SelectedItem title="Projects" src={require('../../images/bag.svg')}>
        <Item onDisabled={onDisabled} type="Project" makeIcon></Item>
      </SelectedItem>
      <SelectedItem
        title="Details"
        src={require('../../images/files-and-folders.svg')}
      ></SelectedItem>
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
          <Button onClick={onClickCancle}>
            <span>Cancle</span>
          </Button>
        </ContainButton>
      </FooterBooking>
    </Modal>
  );
};

export default AddBookingForm;
