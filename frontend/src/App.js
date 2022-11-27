import Home from "./components/Home";
import Login from "./components/Login";
import PhoneSignUp from "./components/PhoneSignUp";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import About from "./pages/smallComponents/AboutUs";
import ContactUs from "./pages/smallComponents/ContactUs";
import Error404 from "./pages/Error";
import Signup from "./components/Signup";
import SignIn from "./pages/Sevices";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/main" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/phonesignup" element={<PhoneSignUp />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error404 />}></Route>

          <Route path="/sevices" element={<SignIn />}></Route>
        </Route>
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
