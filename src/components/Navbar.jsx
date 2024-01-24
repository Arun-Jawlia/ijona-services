import React, { useContext } from "react";
import { Box, Flex, Button, Text, Center } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const { isAuth, currentEmail, handleLogout } = useContext(AuthContext);
  const handleUserLogout = () => {
    handleLogout();
  };

  return (
    <Box bg="gray.50" height="fit-content" padding="1rem">
      <Flex align="center" justify="space-between">
        <Text fontSize="2xl" fontWeight="bolder">
          <Center>IJONA</Center>
        </Text>
        <Box>
          <Flex gap="1rem">
            {isAuth && <Button onClick={handleUserLogout}>Logout</Button>}
            {currentEmail && <Button>{currentEmail}</Button>}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
