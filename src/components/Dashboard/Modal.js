import React, { useState, useEffect } from "react";
import StyledModal from "./StyledModal";
import isNil from "lodash/isNil";

const Modal = props => {
  const [onClose, setOnClose] = useState(false);
  const modal = React.createRef();
  const { cancle } = props;

  const handdleToggleClose = () => setOnClose(!onClose);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, false);
    document.addEventListener("click", handleOutsideClick, false);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("keyup", handleKeyUp, false);
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, []);
  // Handle the key press event.
  function handleKeyUp(e) {
    const keys = {
      27: () => {
        e.preventDefault();
        handdleToggleClose();
        window.removeEventListener("keyup", handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  // Handle the mouse click on browser window.
  function handleOutsideClick(e) {
    if (!isNil(modal)) {
      const current = modal.current;
      if (current && !current.contains(e.target)) {
        handdleToggleClose();
        document.removeEventListener("click", handleOutsideClick, false);
      }
    }
  }
  return <>{!onClose && <StyledModal ref={modal} {...props}></StyledModal>}</>;
};

export default Modal;
