import React, { useState } from "react";
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
import axios from "axios";
import { BaseUrl } from "../api";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserSignup = () => {
    if (!email && !password) {
      alert("Please enter all credentials!");
    } else if (!email.includes("@gmail.com") && password.length >= 3) {
      alert("Enter a valid email. Email should have @gmail.com");
    } else if (email.includes("@gmail.com") && password.length <= 3) {
      alert("Password must be at least 4 characters");
    } else if (email.includes("@gmail.com") && password.length > 3) {
      const payload = {
        email,
        password,
      };
      try {
        axios
          .post(`${BaseUrl}/user/signup`, payload)
          .then((res) => {
            // console.log(res.data);
            if (res?.data?.userData?.email) {
              navigate("/login");
            }
          })
          .catch((err) => {
            if (err?.response?.data?.status === 404) {
              alert("User is already registerd! Please Login");
            }
          });
      } catch (error) {
        console.log(error);
      }
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
        Register
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
      <Button onClick={handleUserSignup} mt="1rem" width="full">
        Signup
      </Button>
      <Button
        onClick={() => navigate("/login")}
        mt="1rem"
        color="blue.300"
        variant="link"
        width="full"
      >
        Already a user ! Click Me
      </Button>
    </Container>
  );
};

export default Signup;
