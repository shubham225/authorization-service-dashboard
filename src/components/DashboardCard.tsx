import { Box, Typography } from "@mui/material";
import { TDashboardCardProps } from "types/PropsTypes";

const DashboardCard = (props: TDashboardCardProps) => {
  const { title, value, subvalue, footer } = props;
  return (
    <Box p={2}>
      <Typography p={1} variant="h5">
        {title}
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography px={1} variant="h3" fontWeight="bold">
          {value}
        </Typography>
        <Typography px={1} variant="h5" fontWeight="bold">
          {subvalue}
        </Typography>
      </Box>
      <Typography p={1} variant="h6">
        {footer}
      </Typography>
    </Box>
  );
};

export default DashboardCard;
