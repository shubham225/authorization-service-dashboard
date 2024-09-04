import React from "react";
import SignIn from "components/Login";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigateTo = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    navigateTo("/home");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100%",
        display: "flex",
        mt: "100px",
      }}
    >
      <SignIn handleSubmit={handleSubmit} />
    </Container>
  );
};
