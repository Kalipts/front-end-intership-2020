import React, { useState } from "react";
import styled from "styled-components";
import DayPickerInput from "react-datepicker";

import Label from "./Style/Label";
import BottomLine from "./Style/BottomLine";
import iconDate from "../../images/calendar.svg";
import {
  CES_GREY_BORDER,
  CES_GREY_TITLE,
  CES_ORANGE
} from "../../constants/colorTypes";

const Wrapper = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  margin-right: 25px;
`;

const Date = styled.div`
  display: flex;
  img {
    margin-left: 22px;
  }
`;

export const StartDatePicker = styled.input.attrs({ type: "text" })`
  height: 18px;
  width: 80px;
  color: black;
  font-family: Muli;
  font-size: 17px;
  line-height: 18px;
  border: none;
`;

const InputDate = props => {
  const [startDate, setStartDate] = useState(props.startDate);
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <Date>
        <DayPickerInput
          name="startDate"
          className="ces-day-pick"
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="d MMM, yyyy"
        />
        <img alt="" src={iconDate} />
      </Date>
      <BottomLine />
    </Wrapper>
  );
};

export default InputDate;
