import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuth, token } = useContext(AuthContext);


  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
