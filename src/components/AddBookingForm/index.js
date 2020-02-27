import React, {useState} from "react";
import styled from "styled-components";
import {CES_ORANGE} from "../../constants/colorTypes"
import {GridHeader, Header, HeaderBooking, Line, NewBooking, NewTimeOff} from "./HeaderBooking";
import {
    BodyAddBooking, BookingTime,
    BottomLineDate,
    ContainDetails,
    DateImage,
    DetailsIcon,
    DetailsSpan,
    Duratio,
    DurationInside,
    End, EndDate, EndDatePicker,
    EndSpan,
    Lock,
    Percentage,
    PercentageInside,
    Project,
    ProjectBody,
    ProjectColor,
    ProjectContain,
    ProjectDetails,
    ProjectIcon, ProjectName,
    ProjectSpan,
    ProjectTopTitle,
    Resource,
    ResourceAvatar,
    ResourceBody,
    ResourceContain,
    ResourceIcon, ResourceName,
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

import {AddBookingButton, AddBookingSpan, CancelButton, ContainButton, FooterBooking} from "./FooterBooking";
import DayPickerInput from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useBookingForm from "./CustomHooks";
import "./styles.css";


const  BookingForm = styled.form`
  height: 473px;
  width: 400px;
  border-radius: 2px;
  box-shadow: 0 5px 50px 0 rgba(0,0,0,0,3);
  border: 1px solid #F95B27;
`;




export default function AddBookingForm () {

    const {inputs,handleInputChange, handleSubmit} = useBookingForm();

    const booking = () => {

    };

    const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());

    return (
        <div>
            <BookingForm onSubmit={handleSubmit}>
                <Header>
                    <HeaderBooking>
                        <GridHeader>
                            <NewBooking color={CES_ORANGE}>
                                New Booking
                            </NewBooking>
                            <NewTimeOff>
                                New Time Off
                            </NewTimeOff>

                        </GridHeader>
                        <Line/>
                    </HeaderBooking>
                </Header>
                <BodyAddBooking>
                    <TimeRatio>
                        <Percentage>
                            <Squater alt="" src={require("../../images/quarter.svg")} />
                            <PercentageInside>
                                Percentage
                            </PercentageInside>
                        </Percentage>
                        <Duratio>
                            <Lock alt="" src={require("../../images/clock .svg")} />
                            <DurationInside>
                                Duration
                            </DurationInside>
                        </Duratio>
                    </TimeRatio>
                    <BookingTime>
                        <Start>
                            <StartSpan>
                                Start
                            </StartSpan>
                            <StartDate>
                                <DayPickerInput
                                    name="startDate"
                                    className="ces-day-pick"
                                    selected={ startDate}
                                    onChange={(date)=>setStartDate(date)}
                                    dateFormat="d MMM, yyyy"
                                />

                                <DateImage alt="" src={require("../../images/calendar.svg")} />
                            </StartDate>
                            <BottomLineDate/>
                        </Start>
                        <End>
                            <EndSpan>
                                End
                            </EndSpan>
                            <EndDate>
                                <DayPickerInput
                                    name="endDate"
                                    className="ces-day-pick"
                                    selected={endDate}
                                    onChange={(date)=>setEndDate(date)}
                                    dateFormat="d MMM, yyyy"
                                />


                                <DateImage alt="" src={require("../../images/calendar.svg")} />
                            </EndDate>
                            <BottomLineDate/>
                        </End>
                    </BookingTime>
                    <Utilization>
                        <UtilizationSpan>
                            Utilization
                        </UtilizationSpan>
                        <UtilizationPercent>
                            100%
                        </UtilizationPercent>
                        <BottomLineDate/>
                    </Utilization>
                    <TotalTime>
                        <TotalTimeSpan>
                            Total: 24 hours
                        </TotalTimeSpan>
                    </TotalTime>
                    <Project>
                        <ProjectContain>
                            <ProjectTopTitle>
                                <ProjectIcon alt="" src={require('../../images/bag.svg')}/>
                                <ProjectSpan>
                                    Projects
                                </ProjectSpan>
                            </ProjectTopTitle>
                            <ProjectBody>
                                <ProjectColor/>
                                <ProjectName>
                                    CES Internal Projects
                                </ProjectName>
                            </ProjectBody>
                        </ProjectContain>
                    </Project>

                    <ProjectDetails>
                        <ContainDetails>
                            <DetailsIcon alt="" src={require('../../images/files-and-folders.svg')}/>
                            <DetailsSpan>
                                Details
                            </DetailsSpan>
                        </ContainDetails>
                    </ProjectDetails>

                    <Resource>
                        <ResourceContain>
                            <ResourceTopTitle>
                                <ResourceIcon src={require('../../images/resource.svg')}>
                                </ResourceIcon>
                                <ResourceSpan>
                                    Resource
                                </ResourceSpan>
                            </ResourceTopTitle>
                            <ResourceBody>
                                <ResourceAvatar src={require("../../images/Oval.png")}>
                                </ResourceAvatar>
                                <ResourceName>
                                    Hoang Nguyen
                                </ResourceName>
                            </ResourceBody>

                        </ResourceContain>

                    </Resource>
                </BodyAddBooking>
                <FooterBooking>
                    <ContainButton>
                        <AddBookingButton type="submit">
                            <AddBookingSpan>
                                Add Booking
                            </AddBookingSpan>
                        </AddBookingButton>
                        <CancelButton>
                            Cancel
                        </CancelButton>
                    </ContainButton>
                </FooterBooking>
            </BookingForm>

        </div>

    );
}
