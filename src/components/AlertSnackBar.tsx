import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { TAlertSnackbarProps } from "types/PropsTypes";

function AlertSnackBar(props: TAlertSnackbarProps) {
  const { open, severity, message, title, duration, handleClose } = props;

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        sx={{ mt: 3, width: "350px" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AlertSnackBar;
