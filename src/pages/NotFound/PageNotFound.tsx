import { Box, Button, Container, Grid, SvgIcon, Typography } from '@mui/material'
import {ReactComponent as PageNotFoundIcon} from './404-page-not-found.svg'
import { useNavigate } from 'react-router-dom'


export const PageNotFound = () => {
  const navigateTo = useNavigate();

  return (
    <Container maxWidth='lg' sx={{height: '100%'}}>
      <Grid 
        container 
        spacing={2} 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%'
        }}>
          <Grid item xs={4} >
            <SvgIcon sx={{
              height: '-webkit-fill-available',
              width: '-webkit-fill-available'
            }}>
              <PageNotFoundIcon />
            </SvgIcon>
          </Grid>
          <Grid item xs={5}>
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'                
              }}>
              <Typography variant='h1'>404</Typography>
              <Typography variant='h5'>Page you were looking for doesn't exist</Typography>
              <Button variant='outlined' sx={{margin: 2}} onClick={(e) => navigateTo('/home')}>Back To Home</Button>
            </Box>
          </Grid>
      </Grid>
    </Container>
  )
}
