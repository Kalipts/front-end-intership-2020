import styled from 'styled-components';
import { HEIGHT_CELL_IN_TABLE_CALENDAR } from '../../../App/constant';
const RowBookingView = styled.div`
  min-height: ${() => `${HEIGHT_CELL_IN_TABLE_CALENDAR}px`};
  position: relative;
  display: flex;
  flex-direction: row;
`;
export default RowBookingView;
