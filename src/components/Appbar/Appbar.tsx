import { AppBar, Toolbar, Typography } from '@mui/material'

const drawerWidth = 240;

export const Appbar = () => {
  return (
    <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
