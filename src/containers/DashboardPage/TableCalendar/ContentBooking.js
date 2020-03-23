import styled from 'styled-components';
import RowBookingView from './Style/RowBookingView';
import {
  WIDTH_CELL_IN_TABLE_CALENDAR,
  BORDER_CELL_IN_TABLE_CALENDAR,
} from '../../App/constant';
import {CES_ORANGE_HOVER, CES_WHITE} from "../../../constants/colorTypes";

const ContentBooking = styled.div`
  padding-bottom: 9px;
  padding-top: 10px;
  width: ${`${WIDTH_CELL_IN_TABLE_CALENDAR - BORDER_CELL_IN_TABLE_CALENDAR}px`};
  border-right: 1px solid ${props => props.theme.color.borderCellCalendar};
  border-bottom: 1px solid ${props => props.theme.color.borderCellCalendar};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${props =>
    props.isWeekend ? props.theme.color.weekendBackground : CES_WHITE};
  background-color: ${props => props.inputColor}!important;

  ${RowBookingView}:hover & {
    background-color: ${CES_ORANGE_HOVER};
  }
  ${RowBookingView}:active & {
    background-color: ${CES_WHITE};
  }
`;
export default ContentBooking;
