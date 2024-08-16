import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

export const Copyright = (props: any) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="https://github.com/shubham225/authorization-service">
            Auth 2.0 Admin
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}
