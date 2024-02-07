import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Button,
  Text,
  Flex,
  Spinner
} from "@chakra-ui/react";
import Pagination from "../components/Pagination";
import { AuthContext } from "../context/AuthContextProvider";
import PostModal from "../components/PostModal";
import axios from "axios";
import { BaseUrl } from "../api";
import { PostContext } from "../context/PostContextProvider";
import EditModal from "../components/EditModal";

export const getpost = (page) => {
  return axios.get(`${BaseUrl}/post?page=${page}`).then((res) => {
    return res;
  });
};
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { post, setPost } = useContext(PostContext);
  const [showEditModal, setShowEditModal] = useState(false);
  const [delId, setDelId] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getpost(page).then((res) => {
      console.log(res?.data);
      setLoading(false);
      setPost(res?.data?.posts);
    });
  }, [page]);

  const handleDelete = (id) => {
    setLoading(true)
    axios.delete(`${BaseUrl}/post/${id}`).then((res) => {
      getpost().then((res) => {
        setLoading(false)
        setPost(res?.data?.posts);
      });
    });
  };

  const handleEdit = (id) => {
    setShowEditModal(true);
    setDelId(id);
    
  };

  return (
    <Container p="1rem" maxW={["100%", "100%", "100%"]} height="80vh">
      <Flex mb="1rem" align="center" justify="space-between">
        <Text textAlign="center" fontSize="2xl">
          User
        </Text>
        <Button onClick={() => setShowModal(true)}>Add</Button>
        <PostModal showModal={showModal}  setShowModal={setShowModal} />
      </Flex>
      {loading ? (
        <Text textAlign={'center'}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Text>
      ) : post?.length > 0 ? (
        <TableContainer mb="1rem">
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
              {post?.map((elem, index) => {
                return (
                  <Tr key={elem._id}>
                    <Td>{index + 1}</Td>
                    <Td>{elem.name}</Td>
                    <Td>{elem.email}</Td>
                    <Td>
                      <Button onClick={() => handleEdit(elem._id)}>Edit</Button>
                    </Td>
                    <EditModal
                      showEditModal={showEditModal}
                      id={delId}
                      setDelId={setDelId}
                      setShowEditModal={setShowEditModal}
                    />
                    <Td>
                      <Button onClick={() => handleDelete(elem._id)}>
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Text m="1rem" textAlign="center" fontSize="xl">
          No Data Found
        </Text>
      )}
      <Pagination page={page} setPage={setPage} totalLength={post?.length} />
    </Container>
  );
};

export default Home;
