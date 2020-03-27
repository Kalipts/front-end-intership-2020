import React, { useState, useEffect, useContext, useRef } from 'react';
import isNil from 'lodash/isNil';
import PropTypes from 'prop-types';
import StyledModal from './StyledModal';
import { CalendarContext } from '../../context/Calendar';
import { ESC_KEY } from '../../constants/keyTypes';

const Modal = props => {
  const modal = useRef();
  const calendarContext = useContext(CalendarContext);
  const { handleCloseModal, isModalOpen, disabled } = calendarContext;
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
    const isNotClose = isNil(modal);
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
        <StyledModal ref={modal} disabled={disabled}>
          {props.children}
        </StyledModal>
      )}
    </>
  );
};
Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
