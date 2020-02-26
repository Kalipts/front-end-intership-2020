import styled from 'styled-components';
import { WIDTH_CELL_IN_TABLE_CALENDAR, BORDER_CELL_IN_TABLE_CALENDAR } from '../../../App/constant';
const Day = styled.th`
  width: ${WIDTH_CELL_IN_TABLE_CALENDAR- BORDER_CELL_IN_TABLE_CALENDAR +'px'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size:12px;
  font-weight:500;
  text-align:inherit;
  border-right:1px solid #e9e9e9;
  color: ${props =>
    props.isWeekend
      ? props.theme.color.primary
      : props.theme.color.fontDefault};
  
`;
export default Day;
