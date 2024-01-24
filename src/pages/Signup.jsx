import React, { useState } from "react";
import {
  Box,
  Container,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Button
} from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const isErrorEmail = email === "";
  const isErrorPassword = password === "";
  return (
    <Container
      mt="3rem"
      borderRadius="0.3rem"
      height="100%"
      p='2rem'
      bg='gray.50'
    >
      <Text textAlign='center' fontSize="3xl">Register</Text>
      <FormControl p='0.5rem' isInvalid={isErrorEmail}>
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
      <FormControl mt='0.5rem'  p='0.5rem' isInvalid={isErrorPassword}>
        <FormLabel>Password</FormLabel>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        {isErrorPassword &&
          <FormErrorMessage>Password is required.</FormErrorMessage>
        }
      </FormControl>
      <Button mt='1rem' width='full'>
        Signup
      </Button>
      <Button onClick={()=>navigate('/login')} mt='1rem' color='blue.300' variant='link' width='full'>
        Already a user ! Click Me 
      </Button>
      
    </Container>
  );
};

export default Signup;
