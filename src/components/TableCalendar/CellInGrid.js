import styled from 'styled-components';
const CellInGrid = styled.div`
  vertical-align: sub;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color:${props=> props.isWeekend ? "#FEFAF8" : "#FFFFFF"};
`;  
export default CellInGrid;