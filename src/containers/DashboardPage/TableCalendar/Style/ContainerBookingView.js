import styled from 'styled-components';
const ContainerBookingView = styled.div`
  overflow-x: hidden;
  margin: 0px;
  position: relative;
  padding-bottom: 0px;
  max-height: 360px;
  width: ${props=>props.numberOfDay*86 +'px'};
  height: 184;
  position: relative;
  z-index: 2;
`;
export default ContainerBookingView;
