import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { TAlertSnackbarProps } from 'types/PropsTypes';

function AlertSnackBar(props : TAlertSnackbarProps) {
    const { open, 
            severity, 
            message,
            title, 
            handleClose} = props;
    
    return (
        <div>
            <Snackbar 
                open={open} 
                autoHideDuration={6000} 
                onClose={handleClose} 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                sx={{mt : 3}}
                >
                <Alert
                    onClose={handleClose}
                    severity= {severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                    >
                        <AlertTitle>{title}</AlertTitle>
                        {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default AlertSnackBar