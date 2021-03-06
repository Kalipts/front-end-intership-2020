import styled from 'styled-components';
const Week = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.borderCellCalendar};
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  grid-template-columns: repeat(${props => props.numberOfWeeks}, 602px);
`;
export default Week;
