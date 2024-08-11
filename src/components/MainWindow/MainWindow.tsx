import { alpha, Box, Toolbar } from '@mui/material';
import React from 'react'

interface ComponentAcceptingChildren {
    children: React.ReactNode;
  }

  const drawerWidth = 240;
  const appbarHeight = 64;

export const MainWindow = (props : ComponentAcceptingChildren) => {
  return (
    <>
      <Box sx={ 
        // flexGrow: 1, p: 3, 
        // marginLeft: `${drawerWidth}px`, 
        // width: { sm: `calc(100% - ${drawerWidth}px)` },
        (theme) => ({
          flexGrow: 1, p: 3, 
          marginTop: `${appbarHeight}px`, 
          marginLeft: `${drawerWidth}px`, 
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        })
        }>
          {props.children}
      </Box>
    </>
  )
}
