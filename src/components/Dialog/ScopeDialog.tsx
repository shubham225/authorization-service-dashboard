import React from 'react'
import { DialogWindow } from '../WindowUI/DialogWindow'
import { Box } from '@mui/material'
import { TScopeDialogProps } from 'types/PropsTypes'
import { TButtonClickEvent } from 'types/DataTypes'

export const ScopeDialog = (props : TScopeDialogProps) => {
  const {openDialog, setOpenDialog} = props;

  const onOkButtonClick = (e : TButtonClickEvent) => {
    e.preventDefault();
    console.log("Ok Button Clicked from dialog");
    setOpenDialog(false);
  }

  return (
    <>
        <DialogWindow
          open = {openDialog}
          setOpen = {setOpenDialog}
          title = "Create New Scope"
          maxWidth = "md"
          okButtonLabel = "Save"
          closeButtonLabel = "Close"
          onOkButtonClick={onOkButtonClick}
          >
            <Box sx={{height: '700px'}}>
                This is the edit window for scopes
            </Box>
        </DialogWindow>
    </>
  )
}
