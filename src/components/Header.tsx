import { Box, Typography, useTheme } from "@mui/material";
import { colorTokens } from "theme";

type HeaderProps = { title: string; subtitle: string };

const Header = (props: HeaderProps) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {props.title}
      </Typography>
      <Typography variant="body1" color={colors.green[400]}>
        {props.subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
