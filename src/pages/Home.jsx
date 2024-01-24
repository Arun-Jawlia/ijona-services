import React, { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
  Button,
  Text,
  Flex
} from "@chakra-ui/react";
import Pagination from "../components/Pagination";

const data = [
    {
        id:1,
    name:'Arun',
    email:"arun@gmail.com",

},
    {
        id:2,
    name:'Arun',
    email:"arun@gmail.com",

},
    {
        id:3,
    name:'Arun',
    email:"arun@gmail.com",

},
    {
        id:4,
    name:'Arun',
    email:"arun@gmail.com",

}
]

const Home = () => {

    


  return (
    <Container p="1rem"  maxW={['100%',"100%",'100%']} height="80vh">
        <Flex mb='1rem' align='center' justify='space-between'>
        <Text textAlign='center' fontSize='2xl' >User</Text>
            <Button>Add</Button>
        </Flex>
      <TableContainer mb='1rem'>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>S.no.</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Edit</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
           {
            data?.map((elem)=>
            {
                return(
                    <Tr key={elem.id}>
                    <Td>{elem.id}</Td>
                    <Td>{elem.name}</Td>
                    <Td>{elem.email}</Td>
                    <Td><Button>Edit</Button></Td>
                    <Td><Button>Delete</Button></Td>
                  </Tr>
                )
            })
           }
          
          </Tbody>
        
        </Table>
      </TableContainer>
      <Pagination/>
    </Container>
  );
};

export default Home;
