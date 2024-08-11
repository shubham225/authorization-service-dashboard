import { Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
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
import React from 'react';

const drawerWidth = 240;
const appbarHeight = 64;

export const Sidebar = () => {
  const navigateTo = useNavigate();
  const [openApp, setOpenApp] = React.useState(false);
  const [openClient, setOpenClient] = React.useState(false);
  const [openUser, setOpenUser] = React.useState(false);

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
            mt: `${appbarHeight}px`
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>
            <ListItem key='home' disablePadding>
              <ListItemButton onClick={(e) => navigateTo('/home')}>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>

            <ListItemButton onClick={handleAppOpen}>
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
            </Collapse>

            <ListItem key='jwt' disablePadding>
              <ListItemButton onClick={(e) => navigateTo('/jwt')}>
                <ListItemIcon>
                  <DataObjectIcon/>
                </ListItemIcon>
                <ListItemText primary='JWT Config' />
              </ListItemButton>
            </ListItem>

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
