import { AppBar, Box, Button, Divider, MenuItem, SvgIcon, Toolbar, Typography } from '@mui/material';
import {ReactComponent as AppLogo} from './app-logo.svg';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

const drawerWidth = 240;

export const Appbar = () => {
  return (
    <AppBar
        position="fixed"
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: 'transparent',
          backgroundImage: 'none',
        }}
      >
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            bgcolor:
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(20px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
          })}
          >
          {/* <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              ml: '-18px',
              px: 0,
            }}
          >
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
          </Box> */}
          <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Box sx={{
                width: `${drawerWidth}px`,}}>
                <img
                  src={
                    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                  }
                  style={logoStyle}
                  alt="logo of sitemark"
                />
                {/* <SvgIcon sx={{
              height: '-webkit-fill-available',
              width: '-webkit-fill-available'
            }}>
                  <AppLogo />
                </SvgIcon> */}
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <Typography variant="h6" color="text.primary">
                    Auth 2.0 Admin Dashboard
                  </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <Button
                color="primary"
                variant="outlined"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-in/"
                target="_blank"
              >
                Admin
              </Button>
            </Box>
        </Toolbar>
      </AppBar>
  )
}
