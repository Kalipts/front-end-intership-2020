import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({
  title = '',
  diaglog = '',
  open,
  handleOnAccept,
  handleOnDisagree,
}) {
  const handleOnClose = async () => {
    await handleOnDisagree();
  };
  const handleOnAgree = async () => {
    await handleOnAccept();
  };
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {diaglog}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleOnClose()} color="primary">
            Disagree
          </Button>
          <Button
            onClick={async () => {
              await handleOnAgree();
            }}
            color="primary"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AlertDialog.propTypes = {
  title: PropTypes.string,
  diaglog: PropTypes.string,
  handleOnAccept: PropTypes.func,
  handleOnDisagree: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  open: PropTypes.bool,
};
