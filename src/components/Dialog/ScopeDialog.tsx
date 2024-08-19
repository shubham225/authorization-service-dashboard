import React from 'react'
import { DialogWindow } from '../WindowUI/DialogWindow'
import { Box } from '@mui/material'

export const ScopeDialog = () => {
  return (
    <>
        <DialogWindow>
            <Box sx={{height: '700px'}}>
                This is the edit window for scopes
            </Box>
        </DialogWindow>
    </>
  )
}
