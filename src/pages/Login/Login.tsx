import React from 'react'
import SignIn from '../../components/Login'
import { Box, Container } from '@mui/material'
import { alpha } from '@mui/material';

export const Login = () => {
  return (
      <Container 
        maxWidth='xs'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '-webkit-fill-available',
          justifyContent: 'center'
        }}>
          <SignIn />
      </Container>
  )
}
