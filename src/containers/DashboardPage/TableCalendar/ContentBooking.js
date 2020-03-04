import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import {
  WIDTH_CELL_IN_TABLE_CALENDAR,
  BORDER_CELL_IN_TABLE_CALENDAR,
} from '../../App/constant';

const ContentBooking = styled.div`
  padding-bottom: 10px;
  padding-top: 9px;
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

export default ContentBooking;
