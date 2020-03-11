import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

const StyledInputButton = styled(IconButton)`
  box-sizing: border-box;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10;
  width: 5px;
  z-index: 9000;
`;
export default StyledInputButton;
