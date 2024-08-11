import { BottomNavigation, Box, Divider, Typography } from '@mui/material';
import Link from '@mui/material/Link';
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
        <Divider />
        <BottomNavigation showLabels 
          sx={{
            height: '40px',
            pt: 1
          }}>
            <Copyright />
        </BottomNavigation>
    </Box>
  )
}
