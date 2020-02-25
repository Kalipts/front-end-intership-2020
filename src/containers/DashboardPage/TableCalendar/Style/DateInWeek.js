import styled from 'styled-components';
import { WIDTH_CELL_IN_TABLE_CALENDAR, HEIGHT_HEADER_DATE } from '../../../App/constant';
const DateInWeek = styled.tr`
  border-bottom: 1px solid #e9e9e9;
  height: ${HEIGHT_HEADER_DATE};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props=>WIDTH_CELL_IN_TABLE_CALENDAR * props.numberOfDay + 'px'};
`;
export default DateInWeek;
