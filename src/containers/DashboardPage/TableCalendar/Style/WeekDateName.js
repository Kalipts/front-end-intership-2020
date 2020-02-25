import styled from 'styled-components';
const WeekDayName = styled.div`
  height: 15px;
  width: 20px;
  opacity: 0.5;
  color:${props=>props.isWeekend ? '#F15927' :'#000000'}  ;
  font-family: Muli;
  font-size: 12px;
  line-height: 15px;
`;
export default WeekDayName;
