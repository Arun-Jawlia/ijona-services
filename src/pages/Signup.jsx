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
  useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import axios from 'axios'
import { BaseUrl } from "../api";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast()



  const handleUserSignup=()=>
  {
    if(email && password)
    {
      const payload = {
        email, password
      }

      try {
        axios.post(`${BaseUrl}/user/signup`,payload)
        .then((res)=>
        {
  
  
          console.log(res.data)
         if(!res?.data?.access_token)
         {
          navigate('/login')
         }
        
        })
      } catch (error) {
         console.log(error)
      }
    
    }
  }



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
