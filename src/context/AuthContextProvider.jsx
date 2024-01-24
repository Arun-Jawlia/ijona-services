import { createContext, useState } from "react";

export const AuthContext = createContext();

 const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const handleLogin = (token) => {
    setIsAuth(true);

    setToken(token);
  };

  return <AuthContext.Provider value={{ isAuth, token, handleLogin }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider