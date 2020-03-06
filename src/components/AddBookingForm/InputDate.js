import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-datepicker';
import * as moment from 'moment';

import Label from './Style/Label';
import BottomLine from './Style/BottomLine';
import iconDate from '../../images/calendar.svg';

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

const InputDate = props => {
  const [selectedDay, setSelectedDay] = useState(
    moment().format('DD MMM, YYYY'),
  );

  useEffect(() => {
    setSelectedDay(props.default.format('DD MMM, YYYY'));
  }, []);

  const handleChangeDay = date => {
    date = moment(date).format('DD MMM, YYYY');
    setSelectedDay(date);
  };
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <Date>
        <DayPickerInput
          value={selectedDay}
          name="startDate"
          className="ces-day-pick"
          onChange={handleChangeDay}
          dateFormat="DD MMM, YYYY"
        />
        <img alt="" src={iconDate} />
      </Date>
      <BottomLine />
    </Wrapper>
  );
};

export default InputDate;
