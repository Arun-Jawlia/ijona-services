import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") || false);
  const [token, setToken] = useState(
    localStorage.getItem("access_token") || ""
  );
  const [currentEmail, setCurrentEmail] = useState(
    localStorage.getItem("email") || ""
  );

  const handleLogin = (token, email) => {
    if (token && email) {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      setToken(token);
      setCurrentEmail(email);
    }
    
  };
  const handleLogout = () => {
    localStorage.setItem("isAuth", false);
    setIsAuth(false);
    setCurrentEmail("");
    localStorage.setItem("email", "");
    setToken("");
    localStorage.setItem("access_token", "");
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, token, handleLogin, currentEmail, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
