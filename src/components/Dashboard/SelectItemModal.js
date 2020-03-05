import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import isNil from 'lodash/isNil';

import Label from './Label';
import Search from '../shared/Search';
import { CalendarContext } from '../../context/Calendar';

const Wrapper = styled.div`
  position: absolute;
  background-color: #ffffff;
  padding: 5px 20px;
  top: 20%;
  right: 0;
  z-index: 20;
  display: block;
  flex-direction: column;
  max-height: 550px;
  width: 330px;
  border-radius: 2px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
  outline-offset: 0.5px;
  justify-content: center;
  align-items: center;
`;

const SelectItemModal = props => {
  const { type } = props;
  const [onClose, setOnClose] = useState(false);
  const modal = React.createRef();
  const { onDisabled } = useContext(CalendarContext);
  const handdleToggleClose = () => {
    setOnClose(!onClose);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);
  }, []);

  useEffect(
    () => () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    },
    [],
  );

  function handleKeyUp(e) {
    const keys = {
      27: () => {
        e.preventDefault();
        handdleToggleClose();
        window.removeEventListener('keyup', handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  // Handle the mouse click on browser window.
  function handleOutsideClick(e) {
    if (!isNil(modal)) {
      const { current } = modal;
      if (current && !current.contains(e.target)) {
        handdleToggleClose();
        document.removeEventListener('click', handleOutsideClick, false);
      }
    }
  }
  return (
    <>
      {!onClose && (
        <Wrapper onBlur={onDisabled} ref={modal}>
          <Label label={type} />
          <Search width="inherit" />
        </Wrapper>
      )}
    </>
  );
};
export default SelectItemModal;
