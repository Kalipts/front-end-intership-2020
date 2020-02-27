import styled from "styled-components";
import React from "react";
import Button from "../shared/Button";

const Modal = styled.div`
  background-color: rgb(255, 250, 250);
  margin: 20px auto;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${props => (props.height ? props.height : "471px")};
  width: ${props => (props.width ? props.width : "400px")};
  border-radius: 2px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
  outline-offset: 0.5px;
`;

const StyledModal = props => {
  const { handleClickCancle } = props;
  return (
    <Modal {...props}>
      {props.children}
      {props.cancle && (
        <Button onClick={event => handleClickCancle()}>Cancle</Button>
      )}
    </Modal>
  );
};

export default StyledModal;
