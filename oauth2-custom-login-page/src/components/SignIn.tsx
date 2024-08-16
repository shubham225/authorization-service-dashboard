import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Captcha } from './Captcha';
import AlertSnackBar from './AlertSnackBar';


type Props = {
  handleSubmit : (event: React.FormEvent<HTMLFormElement>) => void;
};

type AlertProps = {
  open : boolean,
  severity : 'error' | 'success',
  message : string
}

export default function SignIn(props : Props) {
  const [alert, setAlert] = React.useState<AlertProps>({open : false, message : '', severity : 'error'});

  const handleClose = () => {
    setAlert({open : false, message : '', severity : 'error'})
  }

  React.useEffect(() =>
  {
    const queryParam = new URLSearchParams(window.location.search);
    const error = queryParam.get("error");
    const logout = queryParam.get("logout");
    
    if (error != null || logout != null) {
      setAlert(
        {
          open : true, 
          message : (error != null) ? 'Username/Password is wrong.' : 'User Successfully logged out.', 
          severity : (error != null) ? 'error' : 'success'
        }
      );
    } 
  }, [window.location.search]);

  return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '-webkit-fill-available',
            mt: '100px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" sx={{ mt: 1 }} method='post' action='/login'>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              placeholder='username'
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder='password'
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          <AlertSnackBar 
            open= {alert.open}
            message= {alert.message}
            severity= {alert.severity}
            handleClose={() => handleClose()}
          />
        </Box>
      </>
  );
}
