import { Alert, Snackbar } from '@mui/material';
import React from 'react'

type AlertProps = {
    open : boolean,
    handleClose : () => void,
    severity : 'error' | 'success',
    message : string
}

function AlertSnackBar(props : AlertProps) {
    const {open, handleClose, severity, message} = props;
    
    return (
        <div>
            <Snackbar 
                open={open?open:false} 
                autoHideDuration={3000} 
                onClose={handleClose} 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                sx={{mt : 3}}
                >
                <Alert
                onClose={handleClose}
                severity= {severity ? severity : 'error'}
                variant="filled"
                sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default AlertSnackBar