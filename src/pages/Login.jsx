import React, { useContext, useState } from "react";
import {
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
    try {
      if (!email && !password) {
        alert("Please enter all credentials!");
      } else if (!email.includes("@gmail.com")) {
        alert("Enter a valid email. Email should have @gmail.com");
      } else if (email.includes("@gmail.com") && password.length <= 3) {
        alert("Password must be at least 4 characters");
      } else if (email.includes("@gmail.com") && password.length >= 3) {
        const payload = {
          email,
          password,
        };
        axios.post(`${BaseUrl}/user/login`, payload).then((res) => {
          console.log(res.data);
          if (res?.data?.access_token) {
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('email', res?.data?.userData?.email);
            handleLogin(res?.data?.access_token, res?.data?.userData?.email);
            navigate("/");
          }
        });
      }
    } catch (error) {
      console.log(error);
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
