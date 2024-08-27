import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import AlertSnackBar from './AlertSnackBar';


type Props = {
  handleSubmit : (event: React.FormEvent<HTMLFormElement>) => void;
};

type AlertProps = {
  open : boolean,
  severity : 'error' | 'success',
  message : string,
  title: string
}

export default function SignIn(props : Props) {
  const [alert, setAlert] = React.useState<AlertProps>({open : false, message : '', severity : 'error', title: ''});

  const handleClose = () => {
    setAlert({open : false, message : '', severity : 'error', title: ''})
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
          message : (error != null) ? 'Invalid username or password.' : 'User Successfully logged out.', 
          severity : (error != null) ? 'error' : 'success',
          title: (error != null) ? 'Login failed' : 'Success'
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
            mt: '20vh'
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
              autoComplete="current-password"
            />
            <Button
              fullWidth
              type="submit"
              size="large"
              color="primary"
              variant="contained"
              sx={{ mt: 3, mb: 2, fontWeight: 'bold' }}
            >
              Sign In
            </Button>
          </Box>
          <AlertSnackBar 
            open= {alert.open}
            title= {alert.title}
            message= {alert.message}
            severity= {alert.severity}
            handleClose={() => handleClose()}
          />
        </Box>
      </>
  );
}
