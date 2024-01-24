import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./context/AuthContextProvider";
import PostContextProvider from "./context/PostContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PostContextProvider>
    <AuthContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AuthContextProvider>
  </PostContextProvider>
);
