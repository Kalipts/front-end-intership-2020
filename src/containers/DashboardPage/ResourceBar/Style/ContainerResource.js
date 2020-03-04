import styled from 'styled-components';
const ContainerResource = styled.div`
  display: grid;
  grid-template-rows: 72px 40px;
  overflow-y: scroll;
  overflow-x: scroll;
  direction: inherit;
  ::-webkit-scrollbar {
    border-right: 1px solid ${props => props.theme.color.borderCellCalendar};
    width: 1px;
    background-color: transparent;
  }
  z-index: 3;
  border-bottom: 1px solid ${props => props.theme.color.borderCellCalendar};
  height: 600px;
`;
export default ContainerResource;
