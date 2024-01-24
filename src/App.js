import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContextProvider";
function App() {

  return (
    <Box height="fit-content" width="100%">
      <BrowserRouter>
        <Box>
          <Navbar />
        </Box>
        <Box>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home  /> 
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
