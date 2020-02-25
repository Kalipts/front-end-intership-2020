import styled from 'styled-components';
import {
  HEIGHT_HEADER_DATE,
  WIDTH_CELL_IN_TABLE_CALENDAR,
  NUMBER_OF_DAYS_IN_WEEK
} from '../../../App/constant';
const WeekName = styled.th`
  font-size: 12px;
  font-weight: 500;
  border-right: 1px solid #e9e9e9;
  text-align: inherit;
  width: ${props =>
    WIDTH_CELL_IN_TABLE_CALENDAR * NUMBER_OF_DAYS_IN_WEEK + 'px'};
  height: ${HEIGHT_HEADER_DATE+'px'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default WeekName;
