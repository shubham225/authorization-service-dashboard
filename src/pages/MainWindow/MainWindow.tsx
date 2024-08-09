import { Toolbar } from '@mui/material';
import React from 'react'

interface ComponentAcceptingChildren {
    children: React.ReactNode;
  }

export const MainWindow = (props : ComponentAcceptingChildren) => {
  return (
    <div>
        <Toolbar />
        {props.children}
    </div>
  )
}
