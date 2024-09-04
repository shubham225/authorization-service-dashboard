import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TClientCreatedDialogProps } from "types/PropsTypes";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useAlert } from "hooks/useAlert";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ClientGeneratedDialog = (props: TClientCreatedDialogProps) => {
  const { client, open, setOpen } = props;
  const [showPassword, setShowPassword] = React.useState(false);
  const { showAlert } = useAlert();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickCopyClientID = () => {
    navigator.clipboard.writeText(client.clientId);
    showAlert("Client ID copied to clipboard", "success", "Copied");
  };
  const handleClickCopySecret = () => {
    navigator.clipboard.writeText(client.clientSecret || "");
    showAlert("Client Secret copied to clipboard", "success", "Copied");
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="xs"
        PaperProps={{
          style: {
            width: "-webkit-fill-available",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Client Generated
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            display="flex"
            m={2}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "-webkit-fill-available" }}
          >
            <TaskAltIcon
              sx={{ height: "80px", width: "80px" }}
              color="success"
            />
            <Typography variant="h4" color="success">
              SUCCESS
            </Typography>
          </Box>
          <Box py={1} m={1}>
            <Box display="flex" my={1}>
              <FormControl fullWidth variant="outlined">
                <InputLabel shrink htmlFor="clientId">
                  Client ID
                </InputLabel>
                <OutlinedInput
                  disabled
                  notched
                  value={client.clientId}
                  id="clientId"
                  name="clientId"
                  type="text"
                  endAdornment={
                    <InputAdornment position="end">
                      <Box>
                        <Tooltip
                          placement="top"
                          TransitionComponent={Fade}
                          TransitionProps={{ timeout: 600 }}
                          title="Copy to Clipboard"
                        >
                          <IconButton
                            aria-label="copy-id"
                            onClick={handleClickCopyClientID}
                            sx={{ my: 2, ml: 1, borderRadius: 2 }}
                          >
                            <ContentCopyIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </InputAdornment>
                  }
                  label="Client ID"
                />
              </FormControl>
            </Box>
            <Box display="flex" py={1} my={1}>
              <FormControl fullWidth variant="outlined">
                <InputLabel shrink htmlFor="clientSecret">
                  Client Secret
                </InputLabel>
                <OutlinedInput
                  disabled
                  notched
                  value={client?.clientSecret}
                  id="clientSecret"
                  name="clientSecret"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <Box>
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        <Tooltip
                          placement="top"
                          TransitionComponent={Fade}
                          TransitionProps={{ timeout: 600 }}
                          title="Copy to Clipboard"
                        >
                          <IconButton
                            aria-label="copy-secret"
                            onClick={handleClickCopySecret}
                            sx={{ ml: 1, borderRadius: 2 }}
                          >
                            <ContentCopyIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </InputAdornment>
                  }
                  label="Client Secret"
                />
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Box width="200px">
            <Button
              fullWidth
              size="large"
              color="success"
              variant="contained"
              autoFocus
              onClick={handleClose}
            >
              Ok
            </Button>
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default ClientGeneratedDialog;
