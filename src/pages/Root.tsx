import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AppContext } from "context/AppContext";
import { useContext } from "react";
import { useAlert } from "hooks/useAlert";
import AlertSnackBar from "components/AlertSnackBar";
import { TAppContextType } from "types/DataTypes";

export const Root = () => {
  const { appContext } = useContext(AppContext) as TAppContextType;
  const { closeAlert } = useAlert();

  return (
    <Box display="flex" sx={{ height: "100%", width: "100%" }}>
      <Outlet />
      <AlertSnackBar
        open={appContext.alert.open}
        message={appContext.alert.message}
        severity={appContext.alert.severity}
        title={appContext.alert.title}
        duration={appContext.alert.duration}
        handleClose={() => closeAlert()}
      />
    </Box>
  );
};
