import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-datepicker';
import * as moment from 'moment';
import PropTypes from 'prop-types';

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
  const { day, label } = props;
  const [selectedDay, setSelectedDay] = useState(moment(day.toString()));
  const { handleChange } = props;
  useEffect(() => {
    setSelectedDay(moment(day).format('DD MMM, YYYY'));
  }, [day]);

  const handleChangeDay = date => {
    const newDateFormat = moment(date.toString());
    handleChange(newDateFormat);
    setSelectedDay(newDateFormat.format('DD MMM, YYYY'));
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Date>
        <DayPickerInput
          value={selectedDay}
          selected={moment(selectedDay.toString()).toDate()}
          className="ces-day-pick"
          onChange={handleChangeDay}
          onSelect={handleChangeDay}
          dateFormat="dd MMM, yyyy"
        />
        <img alt="" src={iconDate} />
      </Date>
      <BottomLine />
    </Wrapper>
  );
};
InputDate.propTypes = {
  handleChange: PropTypes.func,
  day: PropTypes.instanceOf(moment),
  label: PropTypes.string,
};

export default InputDate;
