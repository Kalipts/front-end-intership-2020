import styled from 'styled-components';
import { HEIGHT_HEADER_DATE, WIDTH_CELL_IN_TABLE_CALENDAR } from '../../../App/constant';
const Week = styled.tr`
  border-bottom: 1px solid #e9e9e9;
  height: ${HEIGHT_HEADER_DATE + 'px'};
  display: flex;
  justify-content: center;
  align-items: center;
  width:  ${props =>WIDTH_CELL_IN_TABLE_CALENDAR *props.numberOfDay+ 'px'} ;
`;
export default Week;
