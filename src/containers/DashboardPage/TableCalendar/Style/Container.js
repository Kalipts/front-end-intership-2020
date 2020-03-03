import styled from 'styled-components';
const Container = styled.div`
  display: grid;
  grid-template-columns: 183px 1fr;
  width: ${props => props.width};
  height: ${props => `${props.height - 100}px`};
`;
export default Container;
