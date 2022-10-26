import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import About from "./pages/smallComponents/AboutUs";
import { Container, Row, Col } from "react-bootstrap";
import ContactUs from "./pages/smallComponents/ContactUs";
import Error404 from "./pages/Error";
import Signup from "./components/Signup";
import SignIn from "./pages/Sevices";
// import "./App.css";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        {/* <Route
          path="/main"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/phonesignup" element={<PhoneSignUp />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error404 />}></Route>
        // TODO: Styles to Be Added
        <Route path="/sevices" element={<SignIn />}></Route>
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
