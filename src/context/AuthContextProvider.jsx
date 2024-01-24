import { createContext, useState } from "react";


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');

  const handleLogin = (token,email) => {
    if(token && email)
    {
      setIsAuth(true)
      setToken(token)
      setCurrentEmail(email)
    }

  }
  const handleLogout = () => {
      setIsAuth(localStorage.setItem('isAuth', false));
      setCurrentEmail('');
      setToken('');
  }



  return (
    <AuthContext.Provider value={{ isAuth, token, handleLogin, currentEmail, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
