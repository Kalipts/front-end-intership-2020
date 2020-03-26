import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Error = styled.div`
  background-color: #582f62;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  justify-content: center;
`;

const AlertInput = props => {
  const { open, message, anchorEl } = props;
  console.log(anchorEl);
  return (
    <>
      <Error>{message}</Error>
      {/* <Popover
        id="111"
        open={open}
        anchorEl={anchorEl.current}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography>{message}</Typography>
      </Popover> */}
    </>
  );
};

export default AlertInput;
