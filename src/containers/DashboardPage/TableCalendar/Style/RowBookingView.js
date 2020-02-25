import styled from 'styled-components';
import {
  HEIGHT_BOOKING,
  WIDTH_CELL_IN_TABLE_CALENDAR,
  HEIGHT_CELL_IN_TABLE_CALENDAR
} from '../../../App/constant';
const RowBookingView = styled.tr`
  height: ${props =>
    props.overlapBooking * HEIGHT_BOOKING +
    HEIGHT_CELL_IN_TABLE_CALENDAR +
    'px'};
  width: ${props => props.numberOfDay * WIDTH_CELL_IN_TABLE_CALENDAR + 'px'};
  position: relative;
  display: flex;
  flex-direction: row;
`;
export default RowBookingView;
