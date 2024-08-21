import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
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
  const { open, 
          title,
          maxWidth,
          okButtonLabel,
          okButtonIcon,
          closeButtonLabel,
          children,
          setOpen,
          onOkButtonClick,
          onCloseButtonClick } = props;

  const handleClose = (e : TButtonClickEvent) => {
    e.preventDefault();
    onCloseButtonClick(e);
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
          {children}
        </DialogContent>
        <DialogActions>
          <Button autoFocus 
            type='submit'
            variant='contained'
            startIcon={okButtonIcon}
            onClick={onOkButtonClick} >
            {okButtonLabel}
          </Button>
          <Button startIcon={<CloseIcon />} variant='outlined' onClick={handleClose}>
            {(closeButtonLabel) ? closeButtonLabel : "Close"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
