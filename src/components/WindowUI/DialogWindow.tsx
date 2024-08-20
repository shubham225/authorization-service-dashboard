import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { TDialogWindowProps } from 'types/PropsTypes';
import { TButtonClickEvent } from 'types/DataTypes';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const DialogWindow = (props : TDialogWindowProps) => {
  const {open, 
          setOpen,
          title,
          maxWidth,
          okButtonLabel,
          closeButtonLabel,
          onOkButtonClick } = props;

  const handleClose = (e : TButtonClickEvent) => {
    e.preventDefault();
    setOpen(false);
  }

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={(maxWidth) ? maxWidth : 'md'}
        PaperProps={{
          style: {
            width : '-webkit-fill-available'
          },
          component: 'form',
          onSubmit: (event : any) => {
              event.preventDefault();
        }}} 
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button autoFocus 
            variant='contained'
            onClick={onOkButtonClick} >
            {okButtonLabel}
          </Button>
          <Button onClick={handleClose}>
            {(closeButtonLabel) ? closeButtonLabel : "Close"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
