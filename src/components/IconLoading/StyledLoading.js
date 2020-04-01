import styled, { keyframes } from 'styled-components';

const keyFrame = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  display: inline-block;
  position: absolute;
  align-items: center;
  top: 40%;
  right: 43%;
  width: ${props => (props.size ? `${props.size}px` : `30px`)};
  height: ${props => (props.size ? `${props.size}px` : '30px')};
  z-index: 30;
  background-color: rgba(255, 255, 255, 1);
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${props => (props.size ? `${props.size / 2}px` : '15px')};
    height: ${props => (props.size ? `${props.size / 2}px` : '15px')};
    margin-top: ${props => (props.size ? `${props.size / 3 - 2}px` : '15px')};
    margin-left: ${props => (props.size ? `${props.size / 3}px` : '10px')};
    border: ${props => (props.size ? `${props.size / 30}px` : '1px')} solid blue;
    border-radius: 50%;
    animation: ${keyFrame} 0.9s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #f15927 transparent transparent transparent;
  }
  & :nth-child(1) {
    animation-delay: -0.3s;
  }
  & :nth-child(2) {
    animation-delay: -0.2s;
  }
  & :nth-child(3) {
    animation-delay: -0.1s;
  }
`;

export default StyledLoading;
