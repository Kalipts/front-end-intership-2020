import styled from 'styled-components';
const Container = styled.div`
  display: grid;
  grid-template-columns: 183px 1fr;
  width: ${props => props.width};
  height: ${props => `${props.height - 200}px`};
`;
export default Container;
