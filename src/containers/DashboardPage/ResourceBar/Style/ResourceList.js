import styled from 'styled-components';
import { HEIGHT_CELL_IN_TABLE_CALENDAR } from '../../../App/constant';
const ResourceList = styled.div`
    overflow: hidden;
    width: ${props=>props.numberResource  * HEIGHT_CELL_IN_TABLE_CALENDAR + 'px'};
    padding-bottom:0px;
`;
export default ResourceList;
