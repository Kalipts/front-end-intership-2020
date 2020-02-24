import styled from 'styled-components';
const RowBookingView = styled.tr`
    height:${props=>props.overlapBooking*26 +46 + 'px'};
    width: ${props=>props.numberOfDay*86 + 'px'};
    position: relative;
    display: flex;
    flex-direction: row;
`;
export default RowBookingView;
