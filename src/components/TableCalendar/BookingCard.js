import styled from 'styled-components';
import {
  HEIGHT_BOOKING,
  HEIGHT_CELL_IN_TABLE_CALENDAR
} from '../../containers/App/constant';
const BookingCard = styled.div`
  height: 26px;
  width: ${props => Number(props.length) * 86 + 'px'};
  border-radius: 1px;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  position: relative;
  margin-top: ${props =>
    props.top < 0
      ? props.top * HEIGHT_BOOKING - HEIGHT_CELL_IN_TABLE_CALENDAR / 2 + 'px'
      : props.top * HEIGHT_BOOKING + 'px'};
  border-radius: 1px;
`;
export default BookingCard;
