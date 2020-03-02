import React, { useState } from 'react';
import styled from 'styled-components';

import BookingModal from '../../../components/Dashboard/BookingModal';
import {
  WIDTH_CELL_IN_TABLE_CALENDAR,
  BORDER_CELL_IN_TABLE_CALENDAR,
} from '../../App/constant';

const Wrapper = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
  width: ${`${WIDTH_CELL_IN_TABLE_CALENDAR - BORDER_CELL_IN_TABLE_CALENDAR}px`};
  border-right: 1px solid ${props => props.theme.color.borderCellCalendar};
  border-bottom: 1px solid ${props => props.theme.color.borderCellCalendar};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${props =>
    props.isWeekend
      ? props.theme.color.weekendBackground
      : props.theme.color.background};
`;

const ContentBooking = props => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = e => setIsActive(!isActive);

  return (
    <Wrapper onClick={handleClick}>
      {isActive && <BookingModal height="200px" />}
      {props.children}
    </Wrapper>
  );
};

export default ContentBooking;
