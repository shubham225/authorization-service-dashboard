import { Box, Divider, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

const About = () => {
  const appInfo = {
    name: "authorization-server",
    description: "OAuth2 Authorization Server",
    author: "Shubham Shinde",
    version: "0.0.1",
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ m: 2, height: "200px", width: "300px" }}
    >
      <Box display="flex" justifyContent="start" alignItems="center" m={1}>
          <InfoIcon />
        <Box ml={2}>
          <Typography fontWeight="bold" variant="h4">OAuth 2.0</Typography>
        </Box>
      </Box>
      <Divider />
      <Box m={1} mt={2}>
        <Typography variant="body1">Name : {appInfo.name}</Typography>
        <Typography variant="body1">Description : {appInfo.description}</Typography>
        <Typography variant="body1">Version : {appInfo.version}</Typography>
      </Box>
    </Box>
  );
};

export default About;
