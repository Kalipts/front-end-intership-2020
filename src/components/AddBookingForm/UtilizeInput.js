import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUtilizeInput = styled(NumberFormat)`
  color: #000000;
  font-family: Muli;
  font-size: 14px;
  line-height: 18px;
`;

export default function UtilizeInput(props) {
  const { inputRef, onChange, ...other } = props;
  function limit(val) {
    let numberPercent = val.replace('%', '');
    if (
      Number(numberPercent) === 0 ||
      Number(numberPercent) > 100 ||
      numberPercent.length > 2
    ) {
      numberPercent = '100';
    }
    return `${numberPercent}%`;
  }
  return (
    <StyledUtilizeInput
      {...other}
      getInputRef={inputRef}
      displayType="number"
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      suffix="%"
      format={limit}
    />
  );
}

UtilizeInput.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
