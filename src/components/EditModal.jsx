import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { BaseUrl } from "../api";
import { getpost } from "../pages/Home";
import { PostContext } from "../context/PostContextProvider";

const EditModal = ({ showEditModal, setShowEditModal, id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { post, setPost } = useContext(PostContext);

  //   get single post by id
  const getPostById = () => {
    axios.get(`${BaseUrl}/post/${id}`).then((res) => {
      // console.log(res.data)
      setName(res?.data?.name);
      setEmail(res?.data?.email);
    });
  };

  useEffect(() => {
    getPostById();
  }, [id]);

  //   Function to update choose post
  const handleEditData = () => {
    if ((name, email)) {
      const payload = { name, email };
      axios.put(`${BaseUrl}/post/edit/${id}`, payload).then((res) => {
        setName("");
        setEmail("");
        setShowEditModal(false);
        getpost().then((res) => {
          setPost(res.data);
        });
      });
    }
  };

  return (
    <>
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
                value={name}
              />

              <FormLabel mt="1rem">Email address</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter email"
                value={email}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleEditData} colorScheme="blue" mr={3}>
              Edit User
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
