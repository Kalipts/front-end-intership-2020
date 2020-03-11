/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import StyledInputButton from './StyledIconButton';

export default function CloseButton({ inputProps, handleClick }) {
  return (
    <div
      onClick={e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        handleClick();
      }}
      onKeyDown={() => {}}
      onMouseDown={e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
      onMouseUp={e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
      onMouseMove={e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
    >
      <StyledInputButton disabled>{inputProps}</StyledInputButton>
    </div>
  );
}
CloseButton.propTypes = {
  inputProps: PropTypes.node,
  handleClick: PropTypes.func,
};
