import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import {
  DarkModeOutlined,
  LightModeOutlined,
  Logout,
} from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import React, { useContext } from "react";
import { signout } from "services/AdminService";
import { useAlert } from "hooks/useAlert";
import { colorTokens } from "theme";
import { ColorModeContext } from "context/ColorModeContext";
import { ChangePasswordDialog } from "components/Dialog/ChangePasswordDialog";

const Appbar = () => {
  // Theme Setup
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigateTo = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openChangePasswd, setOpenChangePasswd] =
    React.useState<boolean>(false);
  const open = Boolean(anchorEl);
  const { showAlert } = useAlert();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const myAccount = () => {
    navigateTo("/myAccount");
  };

  const changePassword = () => {
    setOpenChangePasswd(true);
  };

  const logout = () => {
    logoutAsync();
  };

  const logoutAsync = async () => {
    try {
      let response = await signout();
      window.location.reload();
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "-webkit-fill-available",
          backdropFilter: "blur(5px)",
        }}
      >
        <Box display="flex" justifyContent="space-between" p={1} mt={1}>
          <Box display="flex" mx={1}>
            <Typography variant="h5" color={colors.primary[200]}>
              Admin Dashboard
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              onClick={colorMode.toggleColorMode}
              size="medium"
              sx={{ mx: 1 }}
            >
              {theme.palette.mode === "light" ? (
                <DarkModeOutlined />
              ) : (
                <LightModeOutlined />
              )}
            </IconButton>
            <Box sx={{ mx: 1 }}>
              <ButtonGroup
                color="primary"
                aria-label="Medium-sized button group"
              >
                <Button
                  color="primary"
                  variant="outlined"
                  size="medium"
                  onClick={myAccount}
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
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {/* <MenuItem onClick={myAccount}>
            <Avatar /> My account
          </MenuItem> 
          <Divider /> */}
              <MenuItem onClick={changePassword}>
                <ListItemIcon>
                  <KeyIcon fontSize="small" />
                </ListItemIcon>
                Change Password
              </MenuItem>
              <MenuItem onClick={logout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Divider variant="middle" />
      </Box>
      <ChangePasswordDialog
        openDialog={openChangePasswd}
        setOpenDialog={setOpenChangePasswd}
      />
    </>
  );
};

export default Appbar;
