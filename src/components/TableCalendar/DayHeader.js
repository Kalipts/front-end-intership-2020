import styled from 'styled-components';
const DayHeader = styled.div`
    padding: 1px;
    height: 42px;
    line-height: 15px;
    font-size: 12px;
    border: 1px solid #E1E5E8;
    text-align: center;
    color:${props => props.isWeekend ? "#F15927" :"#000000"};
    display:flexbox;
    justify-content:center;
    align-items:center;
`;
export default DayHeader