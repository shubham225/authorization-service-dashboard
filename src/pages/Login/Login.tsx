import React from 'react'
import SignIn from '../../components/Login'
import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigateTo = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
    navigateTo("/dashboard");
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
