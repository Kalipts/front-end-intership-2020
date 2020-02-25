import styled from 'styled-components';

import { WIDTH_RESOURCE_BAR } from '../../../App/constant';

const DateBooking = styled.td`
  overflow-x: scroll;
  white-space: nowrap;
  max-width: ${props => props.width - WIDTH_RESOURCE_BAR + 'px'};
`;
export default DateBooking;
