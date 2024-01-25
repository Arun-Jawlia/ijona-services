import React, { useContext, useEffect, useState } from "react";
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
  Flex,
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

  useEffect(() => {
    getpost(page).then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
  }, [page]);

  const handleDelete = (id) => {
    axios.delete(`${BaseUrl}/post/${id}`).then((res) => {
      getpost().then((res) => {
        setPost(res.data);
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
        <PostModal showModal={showModal} setShowModal={setShowModal} />
      </Flex>
      {post.length > 0 ? (
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
