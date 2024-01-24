import React, { useContext, useState } from "react";
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

const PostModal = ({ showModal, setShowModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {post, setPost} = useContext(PostContext)

  const handleAddData = ()=>
  {
    if(name,email)
    {
        const payload = { name, email}
        axios.post(`${BaseUrl}/post/create`,payload)
        .then(res=>
            {
                setName('')
                setEmail('')
                setShowModal(false)
                getpost()
                .then(res=>
                    {
                        setPost(res.data)
                    })
            })
    }
  }

  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
              />

              <FormLabel mt="1rem">Email address</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter email"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleAddData} colorScheme="blue" mr={3}>
              Add User
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostModal;
