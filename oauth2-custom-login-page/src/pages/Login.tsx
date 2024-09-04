import React from 'react'
import SignIn from '../components/SignIn'
import { Container } from '@mui/material'

export const Login = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
      <Container 
        maxWidth='xs'
        sx={{ 
          height: '100%',
          display: 'flex'
        }}>
          <SignIn handleSubmit={handleSubmit} />
      </Container>
  )
}
