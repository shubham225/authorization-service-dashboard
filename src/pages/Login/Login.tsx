import React from 'react'
import SignIn from '../../components/Login'
import { Container } from '@mui/material'

export const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };

  return (
      <Container 
        maxWidth='xs'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '-webkit-fill-available',
          justifyContent: 'center'
        }}>
          <SignIn handleSubmit={handleSubmit} />
      </Container>
  )
}
