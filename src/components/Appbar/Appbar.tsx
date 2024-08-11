import { AppBar, Avatar, Box, Button, ButtonGroup, Divider, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { Logout, PersonAdd } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';
import React from 'react';

const logoStyle = {
  width: '160px',
  height: 'auto',
  cursor: 'pointer',
  marginLeft: '10px'
};

const drawerWidth = 240;

export const Appbar = () => {
  const navigateTo = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                    './imgs/app-logo.svg'
                  }
                  style={logoStyle}
                  alt="logo of sitemark"
                  onClick={(e) => navigateTo('/home')}
                />
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
              <ButtonGroup color="primary" aria-label="Medium-sized button group">
                <Button
                  color="primary"
                  variant="outlined"
                  size="medium"
                >
                  Admin
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  size="small"
                  onClick={handleClick}
                >
                  <PersonIcon />
                </Button>
              </ButtonGroup>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <KeyIcon fontSize="small" />
                </ListItemIcon>
                Change Password
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
  )
}
