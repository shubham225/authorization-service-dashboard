import { Alert, AlertTitle, Snackbar } from "@mui/material";

type AlertProps = {
    open : boolean,
    handleClose : () => void,
    severity : 'error' | 'success',
    title: string,
    message : string
}

function AlertSnackBar(props: AlertProps) {
  const { open, severity, message, title, handleClose } = props;

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
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

export default AlertSnackBar