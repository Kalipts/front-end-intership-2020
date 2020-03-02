import styled from 'styled-components';
import { WIDTH_CELL_IN_TABLE_CALENDAR } from '../../../App/constant';
const DateInWeek = styled.div`
  border-bottom: 1px solid #e9e9e9;
  display: grid;
  grid-template-columns: repeat(
    ${props => props.numberOfDays},
    ${() => `${WIDTH_CELL_IN_TABLE_CALENDAR}px`}
  );
`;
export default DateInWeek;
