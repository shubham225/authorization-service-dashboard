import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import { colorTokens } from "../theme";
import { ColorModeContext } from "../context/ColorModeContext";
import { PopoverWithArrow } from "./Popover";
import About from "./About";

const Appbar = () => {
  // Theme Setup
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
            OAuth 2.0 
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
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
            <Button variant="outlined" size="medium" 
                onClick={handleClick}>
              About
            </Button>
          </Box>
          <PopoverWithArrow anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
            <About />
          </PopoverWithArrow>
        </Box>
      </Box>
      <Divider variant="middle" orientation="horizontal" />
    </Box>
  );
};

export default Appbar;
