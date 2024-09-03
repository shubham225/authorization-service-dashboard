import { SnackbarCloseReason } from "@mui/material";
import { initAlert } from "constant/Initial";
import { AppContext } from "context/AppContext";
import { useContext } from "react";
import { TAlert, TAlertSeverity, TAppContextType } from "types/DataTypes";

export const useAlert = () => {
  const { setAppContext } = useContext(AppContext) as TAppContextType;

  const showAlert = (
    message: string,
    type: TAlertSeverity,
    title: string
  ): void => {
    let alert: TAlert = {
      open: true,
      message: message,
      severity: type ? type : "error",
      title: title,
    };

    if (setAppContext != null) {
      setAppContext((context) => {
        return { ...context, alert: alert };
      });
    }
  };

  const closeAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ): void => {
    if (reason === "clickaway") {
      return;
    }

    if (setAppContext != null) {
      setAppContext((context) => {
        return { ...context, alert: initAlert };
      });
    }
  };

  return {
    showAlert,
    closeAlert,
  };
};
