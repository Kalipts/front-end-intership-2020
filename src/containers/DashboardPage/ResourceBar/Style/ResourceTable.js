import styled from 'styled-components';
import { HEIGHT_CELL_IN_TABLE_CALENDAR } from '../../../App/constant';

const ResourceTable = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  border-spacing: 0;
  text-align: center;
  position: relative;
  z-index: 2;
  max-height: fit-content;
  overflow: hidden;
  padding-bottom: 21px;
  display: grid;
  grid-template-rows: repeat(
    ${props => props.numberOfResource},
    ${() => `${HEIGHT_CELL_IN_TABLE_CALENDAR}px`}
  );
`;
export default ResourceTable;
