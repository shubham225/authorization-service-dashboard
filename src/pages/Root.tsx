import { BottomNavigation, Box, Divider } from '@mui/material';
import { Outlet } from 'react-router-dom'
import { Copyright } from '../components/Copyright';

export const Root = () => {
  return (
    <Box 
      sx={{
        height: '-webkit-fill-available',
        display: 'flex',
        flexDirection: 'column'   
      }}>
        <Box flexGrow={1}>
          <Outlet />
        </Box>
        <Box sx={{
          position: 'fixed',
          bottom: 0,
          zIndex: 20,
          width: '100%'
        }}>
          <Divider />
          <BottomNavigation showLabels 
            sx={{
              height: '40px',
              pt: 1
            }}>
              <Copyright />
          </BottomNavigation>
        </Box>
    </Box>
  )
}
