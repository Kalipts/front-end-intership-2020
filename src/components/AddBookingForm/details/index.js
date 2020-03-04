import styled from "styled-components";
import React from "react";
import ReactDOM from 'react-dom';
import {CES_ORANGE} from "../../../constants/colorTypes";

const InputDetailsModal = styled.input`
  height: 25px;
  width: 331px;
  margin-left: 13px;
  margin-right: 10px;
  font-size: 12px;
  font-family: Muli;
  
  outline: 0;
  border-width: 0 0 2px;
  border-color: ${CES_ORANGE}
  
`;

const Modal =({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <InputDetailsModal type="text" name="details_booking"/>
    </React.Fragment>, document.getElementById('details')
): null;

export default Modal;
