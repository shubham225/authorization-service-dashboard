import { BottomNavigation, Box, Divider } from '@mui/material';
import { Outlet } from 'react-router-dom'
import { Copyright } from 'components/Copyright';
import { BOTTOMNAV_HEIGHT as bottomNavHeight} from 'constant/Style';
import { AppContext } from 'context/AppContext';
import { useContext } from 'react';
import { useAlert } from 'hooks/useAlert';
import AlertSnackBar from 'components/AlertSnackBar';
import { TAppContextType } from 'types/DataTypes';

export const Root = () => {
  const { appContext } = useContext(AppContext) as TAppContextType;
  const { closeAlert } = useAlert();

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
              height: `${bottomNavHeight}px`,
              pt: 1
            }}>
              <Copyright />
          </BottomNavigation>
        </Box>
        
        <AlertSnackBar 
            open= {appContext.alert.open}
            message= {appContext.alert.message}
            severity= {appContext.alert.severity}
            title={appContext.alert.title}
            handleClose={() => closeAlert()}
          />
    </Box>
  )
}
