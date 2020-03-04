import React, { useState } from "react";
import Header from "./HeaderBooking";
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
} from './BodyBooking.js';

import Label from "./Style/Label";
import BottomLine from "./Style/BottomLine";
import Item from "./Item";
import SelectedItem from "./SelectedItem";

import {
  AddBookingButton,
  AddBookingSpan,
  CancelButton,
  ContainButton,
  FooterBooking
} from "./FooterBooking";
import InputDate from "./InputDate";
import Button from "./Button";

import "react-datepicker/dist/react-datepicker.css";
import useBookingForm from "./CustomHooks";
import "./styles.css";
import useModal from "./details/useModalDetails";
import Modal from "../Dashboard/Modal";

const AddBookingForm = props => {
  const { inputs, handleInputChange, handleSubmit } = useBookingForm();
  const [endDate, setEndDate] = useState(props.endDate);
  const [onClose, setOnClose] = useState(false);

  const onClickCancle = e => setOnClose(true);

  if (onClose) return null;

  return (
    <Modal cancle="true">
      <Header />
      <TimeRatio>
        <Percentage>
          <Squater alt="" src={require("../../images/quarter.svg")} />
          <PercentageInside>Percentage</PercentageInside>
        </Percentage>
        <Duration>
          <Lock alt="" src={require("../../images/clock .svg")} />
          <DurationInside>Duration</DurationInside>
        </Duration>
      </TimeRatio>
      <BookingTime>
        <InputDate label="Start" />
        <InputDate label="End" />
      </BookingTime>
      <Utilization>
        <Label>Utilization</Label>
        <input />
        <BottomLine />
      </Utilization>
      <TotalTime>
        <Label>Total: 24 hours</Label>
      </TotalTime>
      <SelectedItem title="Projects" src={require("../../images/bag.svg")}>
        <Item makeIcon>CES Internal Projects</Item>
      </SelectedItem>
      <SelectedItem
        title="Details"
        src={require("../../images/files-and-folders.svg")}
      ></SelectedItem>
      <SelectedItem title="Resource" src={require("../../images/resource.svg")}>
        <Item src={require("../../images/Oval.png")}>Hoang Nguyen</Item>
      </SelectedItem>

      <FooterBooking>
        <ContainButton>
          <Button primary>
            <span>Add Booking</span>
          </Button>
          <Button>
            <span>Cancle</span>
          </Button>
        </ContainButton>
      </FooterBooking>
    </Modal>
  );
};

export default AddBookingForm;
