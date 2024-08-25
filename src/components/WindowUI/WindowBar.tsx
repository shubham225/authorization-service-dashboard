import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import { colorTokens } from "theme";
import { TWindowBarProps } from "types/PropsTypes";
import AddIcon from "@mui/icons-material/Add";

export const WindowBar = (props: TWindowBarProps) => {
  const { onNewButtonClick, title, subtitle } = props;
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box display={"flex"} justifyContent="space-between" mb={2}>
      <Box display="flex" alignItems="center">
        <Typography
          variant="h4"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          {title}
        </Typography>
        {subtitle && <Divider variant="middle" orientation="vertical" sx={{mx: 2}}/>}
        <Typography variant="subtitle1" color={colors.green[400]}>
          {subtitle}
        </Typography>
      </Box>
      <Button
        variant="contained"
        size="large"
        startIcon={<AddIcon />}
        onClick={onNewButtonClick}
      >
        Add New
      </Button>
    </Box>
  );
};
