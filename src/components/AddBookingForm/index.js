import React, { useState } from "react";
import styled from "styled-components";
import { CES_ORANGE } from "../../constants/colorTypes";
import {
  GridHeader,
  Header,
  HeaderBooking,
  Line,
  NewBooking,
  NewTimeOff
} from "./HeaderBooking";
import {
  BodyAddBooking,
  BookingTime,
  BottomLineDate,
  ContainDetails,
  DateImage,
  DetailsBottom,
  DetailsIcon,
  DetailsSpan,
  DetailsTop,
  Duratio,
  DurationInside,
  End,
  EndDate,
  EndDatePicker,
  EndSpan,
  Lock,
  Percentage,
  PercentageInside,
  Project,
  ProjectBody,
  ProjectColor,
  ProjectContain,
  ProjectDetails,
  ProjectIcon,
  ProjectName,
  ProjectSpan,
  ProjectTopTitle,
  Resource,
  ResourceAvatar,
  ResourceBody,
  ResourceContain,
  ResourceIcon,
  ResourceName,
  ResourceSpan,
  ResourceTopTitle,
  Squater,
  Start,
  StartDate,
  StartDatePicker,
  StartSpan,
  TimeRatio,
  TotalTime,
  TotalTimeSpan,
  Utilization,
  UtilizationPercent,
  UtilizationSpan
} from "./BodyBooking";

import {
  AddBookingButton,
  AddBookingSpan,
  CancelButton,
  ContainButton,
  FooterBooking
} from "./FooterBooking";
import DayPickerInput from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useBookingForm from "./CustomHooks";
import "./styles.css";
import useModal from "./details/useModalDetails";
import Modal from "./details";

export default function AddBookingForm(props) {
  const { inputs, handleInputChange, handleSubmit } = useBookingForm();

  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);
  const { isShowing, toggle } = useModal();

  return (
    <div>
      <Header>
        <HeaderBooking>
          <GridHeader>
            <NewBooking color={CES_ORANGE}>New Booking</NewBooking>
            <NewTimeOff>New Time Off</NewTimeOff>
          </GridHeader>
          <Line />
        </HeaderBooking>
      </Header>
      <BodyAddBooking>
        <TimeRatio>
          <Percentage>
            <Squater alt="" src={require("../../images/quarter.svg")} />
            <PercentageInside>Percentage</PercentageInside>
          </Percentage>
          <Duratio>
            <Lock alt="" src={require("../../images/clock .svg")} />
            <DurationInside>Duration</DurationInside>
          </Duratio>
        </TimeRatio>
        <BookingTime>
          <Start>
            <StartSpan>Start</StartSpan>
            <StartDate>
              <DayPickerInput
                name="startDate"
                className="ces-day-pick"
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="d MMM, yyyy"
              />

              <DateImage alt="" src={require("../../images/calendar.svg")} />
            </StartDate>
            <BottomLineDate />
          </Start>
          <End>
            <EndSpan>End</EndSpan>
            <EndDate>
              <DayPickerInput
                name="endDate"
                className="ces-day-pick"
                selected={endDate}
                onChange={date => setEndDate(date)}
                dateFormat="d MMM, yyyy"
              />

              <DateImage alt="" src={require("../../images/calendar.svg")} />
            </EndDate>
            <BottomLineDate />
          </End>
        </BookingTime>
        <Utilization>
          <UtilizationSpan>Utilization</UtilizationSpan>
          <UtilizationPercent>100%</UtilizationPercent>
          <BottomLineDate />
        </Utilization>
        <TotalTime>
          <TotalTimeSpan>Total: 24 hours</TotalTimeSpan>
        </TotalTime>
        <Project>
          <ProjectContain>
            <ProjectTopTitle>
              <ProjectIcon alt="" src={require("../../images/bag.svg")} />
              <ProjectSpan>Projects</ProjectSpan>
            </ProjectTopTitle>
            <ProjectBody>
              <ProjectColor />
              <ProjectName>CES Internal Projects</ProjectName>
            </ProjectBody>
          </ProjectContain>
        </Project>

        <ProjectDetails onClick={toggle}>
          <ContainDetails>
            <DetailsTop>
              <DetailsIcon
                alt=""
                src={require("../../images/files-and-folders.svg")}
              />
              <DetailsSpan>Details</DetailsSpan>
            </DetailsTop>

            <DetailsBottom id="details"></DetailsBottom>
          </ContainDetails>
          <Modal isShowing={isShowing} hide={toggle} />
        </ProjectDetails>

        <Resource>
          <ResourceContain>
            <ResourceTopTitle>
              <ResourceIcon
                src={require("../../images/resource.svg")}
              ></ResourceIcon>
              <ResourceSpan>Resource</ResourceSpan>
            </ResourceTopTitle>
            <ResourceBody>
              <ResourceAvatar
                src={require("../../images/Oval.png")}
              ></ResourceAvatar>
              <ResourceName>Hoang Nguyen</ResourceName>
            </ResourceBody>
          </ResourceContain>
        </Resource>

        <FooterBooking>
          <ContainButton>
            <AddBookingButton type="submit">
              <AddBookingSpan>Add Booking</AddBookingSpan>
            </AddBookingButton>
            {/* <CancelButton>Cancel</CancelButton> */}
          </ContainButton>
        </FooterBooking>
      </BodyAddBooking>
    </div>
  );
}
