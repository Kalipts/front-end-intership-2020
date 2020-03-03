import styled from 'styled-components';
const ContainerResource = styled.div`
  border: 0px solid ${props => props.theme.color.borderCellCalendar};
  display: grid;
  grid-template-rows: 72px 1fr;
`;
export default ContainerResource;
