import React from 'react';
import { Box, Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupsIcon from '@mui/icons-material/Groups';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useNavigate } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {DRAWER_WIDTH as drawerWidth, APPBAR_HEIGHT as appbarHeight} from 'constant/Style';
import { colorTokens } from 'theme';

const logoStyle = {
  width: "160px",
  height: "auto",
  cursor: "pointer"
};

export const Sidebar = () => {
  const navigateTo = useNavigate();
  const [openApp, setOpenApp] = React.useState(false);
  const [openClient, setOpenClient] = React.useState(false);
  const [openUser, setOpenUser] = React.useState(false);
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  const handleAppOpen = () => {
    setOpenApp(!openApp);
  }

  const handleOpenClient = () => {
    setOpenClient(!openClient);
  }

  const handleOpenUser = () => {
    setOpenUser(!openUser);
  }

  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: colors.primary[400]
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box display='flex' my={1} justifyContent='center'
          >
            <img
              src={theme.palette.mode === 'dark' ? "./imgs/app-logo-light.svg" : "./imgs/app-logo-dark.svg"}
              style={logoStyle}
              alt="logo of sitemark"
              onClick={(e) => e.preventDefault()}
            />
        </Box>
        <Divider variant='middle'/>
        <List>
            <ListItem key='home' disablePadding>
              <ListItemButton onClick={(e) => navigateTo('/home')}>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>

            {/* <ListItemButton onClick={handleAppOpen}>
              <ListItemIcon>
                <TerminalIcon />
              </ListItemIcon>
              <ListItemText primary="Application" />
              {openApp ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openApp} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton 
                  sx={{ pl: 4 }} 
                  onClick={(e) => navigateTo('/auth')}>
                    <ListItemIcon>
                      <GppGoodIcon />
                    </ListItemIcon>
                    <ListItemText primary="Authentication" />
                </ListItemButton>
                <ListItemButton 
                  sx={{ pl: 4 }} 
                  onClick={(e) => navigateTo('/security')}>
                  <ListItemIcon>
                    <SecurityIcon />
                  </ListItemIcon>
                  <ListItemText primary="Security" />
                </ListItemButton>
                <ListItemButton 
                  sx={{ pl: 4 }} 
                  onClick={(e) => navigateTo('/alert')}>
                  <ListItemIcon>
                    <NotificationsActiveIcon />
                  </ListItemIcon>
                  <ListItemText primary="Alert" />
                </ListItemButton>
              </List>
            </Collapse> */}

            {/* <ListItem key='jwt' disablePadding>
              <ListItemButton onClick={(e) => navigateTo('/jwt')}>
                <ListItemIcon>
                  <DataObjectIcon/>
                </ListItemIcon>
                <ListItemText primary='JWT Config' />
              </ListItemButton>
            </ListItem> */}

            {/* Client Management */}
            <ListItemButton onClick={handleOpenClient}>
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText primary="Client Management" />
              {openApp ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openClient} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton 
                  sx={{ pl: 4 }} 
                  onClick={(e) => navigateTo('/scope')}>
                    <ListItemIcon>
                      <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Scope" />
                </ListItemButton>
                <ListItemButton 
                  sx={{ pl: 4 }} 
                  onClick={(e) => navigateTo('/client')}>
                  <ListItemIcon>
                    <GroupsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Client" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* User Management */}
            <ListItemButton onClick={handleOpenUser}>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary="User Management" />
              {openApp ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openUser} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton 
                  sx={{ pl: 4 }} 
                  onClick={(e) => navigateTo('/role')}>
                    <ListItemIcon>
                      <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Role" />
                </ListItemButton>
                <ListItemButton 
                  sx={{ pl: 4 }} 
                  onClick={(e) => navigateTo('/user')}>
                  <ListItemIcon>
                    <ManageAccountsIcon />
                  </ListItemIcon>
                  <ListItemText primary="User" />
                </ListItemButton>
              </List>
            </Collapse>
        </List>
      </Drawer>
  )
}
