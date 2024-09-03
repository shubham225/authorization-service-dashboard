import React from "react";
import { Box } from "@mui/material";

interface ComponentAcceptingChildren {
  children: React.ReactNode;
}

export const MainWindow = (props: ComponentAcceptingChildren) => {
  return (
    <Box sx={{ p: 3, mt: 8 }}>
      <Box>{props.children}</Box>
    </Box>
  );
};
