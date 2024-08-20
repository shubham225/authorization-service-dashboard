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
    <>
      <Box sx={ 
        (theme) => ({
          flexGrow: 1, 
          marginTop: `${appbarHeight}px`, 
          marginLeft: `${drawerWidth}px`, 
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        })
        }>
          <Box sx={{p: 3, mb: `${bottomNavHeight}px`}}>
            {props.children}
          </Box>
      </Box>
    </>
  )
}
