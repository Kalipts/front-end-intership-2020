import styled from 'styled-components';
import { WIDTH_CELL_IN_TABLE_CALENDAR } from '../../../App/constant';
const ContainerDate = styled.div`
    overflow-x: hidden;
    margin: 0px;
    position: relative;
    padding-bottom: 0px;
    max-height: 360px;
    width: ${props=> props.numberOfDay * WIDTH_CELL_IN_TABLE_CALENDAR +'px'};
    position: relative;
    z-index: 2;
`;
export default ContainerDate;
