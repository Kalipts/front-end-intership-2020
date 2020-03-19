import React, { useState, useEffect, useContext } from 'react';
import isNil from 'lodash/isNil';
import PropTypes from 'prop-types';
import StyledModal from './StyledModal';
import { CalendarContext } from '../../context/Calendar';
import { ESC_KEY } from '../../constants/keyTypes';

const Modal = props => {
  const { isChildVisible } = props;
  const [onClose, setOnClose] = useState(false);
  const modal = React.createRef();
  const calendarContext = useContext(CalendarContext);
  const { handleCloseModal, isModalOpen } = calendarContext;

  const handdleToggleClose = () => setOnClose(!onClose);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);
    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [modal]);

  // Handle the key press event.
  function handleKeyUp(e) {
    const keys = {};
    keys[`${ESC_KEY}`] = () => {
      e.preventDefault();
      handleCloseModal();
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  // Handle the mouse click on browser window.
  function handleOutsideClick(e) {
    e.preventDefault();
    const isNotClose = isNil(modal) || isChildVisible;
    if (isNotClose) {
      return;
    }
    const { current } = modal;
    if (current && !current.contains(e.target)) {
      handleCloseModal();
      document.removeEventListener('click', handleOutsideClick, false);
    }
  }
  return (
    <>
      {isModalOpen && (
        <StyledModal
          disabled={props.disabled}
          tabIndex="0"
          onBlur={handdleToggleClose}
          ref={modal}
        >
          {props.children}
        </StyledModal>
      )}
    </>
  );
};
Modal.propTypes = {
  isChildVisible: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
