import { Box } from '@mui/material';
import React from 'react'

interface ComponentAcceptingChildren {
    children: React.ReactNode;
  }

  const drawerWidth = 240;
  const appbarHeight = 64;
  const bottomNavHeight = 40;

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
