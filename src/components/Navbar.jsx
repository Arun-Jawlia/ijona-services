import React from "react";
import { Box, Flex, Button, Text,Center } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg='gray.50' height="fit-content" padding="1rem">
      <Flex align='center' justify='space-between'>
        <Text  fontSize='2xl' fontWeight='bolder' >
            <Center>
                Logo
            </Center>
        </Text>
        <Box>
          <Flex gap='1rem'>
            <Button >Logout</Button>
            <Button >Username</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
