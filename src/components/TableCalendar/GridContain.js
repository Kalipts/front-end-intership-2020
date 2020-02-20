import styled from 'styled-components';
const GridContain = styled.div`
  display: grid;
  height: 450px;
  grid-template-columns: repeat(100, auto);
  /* height:${props =>(props.numberOfResource*42) +"px"}; */
`;
export default GridContain;
