import styled from 'styled-components';
import { HEIGHT_CELL_IN_TABLE_CALENDAR } from '../../../App/constant';
import {CES_ORANGE_HOVER} from "../../../../constants/colorTypes";
const RowBookingView = styled.div`
  min-height: ${() => `${HEIGHT_CELL_IN_TABLE_CALENDAR}px`};
  position: relative;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: ${CES_ORANGE_HOVER};
  }
`;
export default RowBookingView;
