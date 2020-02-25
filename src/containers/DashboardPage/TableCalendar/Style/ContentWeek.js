import styled from 'styled-components';
import { WIDTH_CELL_IN_TABLE_CALENDAR, HEIGHT_HEADER_DATE } from '../../../App/constant';
const ContentWeek = styled.div`
  width: ${WIDTH_CELL_IN_TABLE_CALENDAR+'px'};
  height: ${HEIGHT_HEADER_DATE +'px'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default ContentWeek;
