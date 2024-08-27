import React from 'react'
import { Box } from '@mui/material';
import {DRAWER_WIDTH as drawerWidth, 
        APPBAR_HEIGHT as appbarHeight,
        BOTTOMNAV_HEIGHT as bottomNavHeight} from 'constant/Style';

interface ComponentAcceptingChildren {
    children: React.ReactNode;
  }

export const MainWindow = (props : ComponentAcceptingChildren) => {
  return (
      <Box sx={{p: 3, mt: 8}}>
          <Box >
            {props.children}
          </Box>
      </Box>
  )
}
