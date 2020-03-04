import styled from 'styled-components';
import { WIDTH_CELL_IN_TABLE_CALENDAR } from '../../../App/constant';
const ContainerBookingView = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0px;
  position: relative;
  padding-bottom: 0px;
  width: ${props =>
    `${props.numberOfDays * WIDTH_CELL_IN_TABLE_CALENDAR + 10}px`};
  grid-template-columns: repeat(
    ${props => props.numberOfDays},
    ${() => `${WIDTH_CELL_IN_TABLE_CALENDAR}px`}
  );
  position: relative;
  z-index: 2;
  max-height: fit-content;
`;
export default ContainerBookingView;
