import React, { useContext, useState } from "react";
import {
  Box,
  Container,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import axios from "axios";
import { BaseUrl } from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { handleLogin } = useContext(AuthContext);

  const handleUserLogin = () => {
    if (email && password) {
      const payload = {
        email,
        password,
      };
      axios.post(`${BaseUrl}/user/login`, payload).then((res) => {
        handleLogin(res?.data?.access_token , res?.data?.otherDetails?.email)
        navigate('/')
      });
    }
  };

  const isErrorEmail = email === "";
  const isErrorPassword = password === "";
  return (
    <Container
      mt="3rem"
      borderRadius="0.3rem"
      height="100%"
      p="2rem"
      bg="gray.50"
    >
      <Text textAlign="center" fontSize="3xl">
        Login
      </Text>
      <FormControl p="0.5rem" isInvalid={isErrorEmail}>
        <FormLabel>Email</FormLabel>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        {!isErrorEmail ? (
          <FormHelperText>
            We don't share your email with anyone else
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl mt="0.5rem" p="0.5rem" isInvalid={isErrorPassword}>
        <FormLabel>Password</FormLabel>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        {isErrorPassword && (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>
      <Button onClick={handleUserLogin} mt="1rem" width="full">
        Login
      </Button>
      <Button
        onClick={() => navigate("/signup")}
        mt="1rem"
        color="blue.300"
        variant="link"
        width="full"
      >
        New User ! Click Me
      </Button>
    </Container>
  );
};

export default Login;
