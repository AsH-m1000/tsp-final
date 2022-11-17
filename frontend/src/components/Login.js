import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container, Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/main");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/main");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container
        style={{
          width: "400px",
          // backgroundColor: "lightcoral",
          // flex: 1,
          // marginTop: 150,
          // borderRadius: "25px",
          // padding: 10,
        }}
      >
        <Col>
          <Row>
            <div className="p-3 box">
              <h2 className="mb-3">Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ fontSize: 15 }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ fontSize: 15 }}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    type="Submit"
                    style={{ fontSize: 15 }}
                  >
                    Log In
                  </Button>
                </div>
                <Link to="/phonesignup">
                  <div className="d-grid gap-2 mt-3 ">
                    <Button
                      variant="success"
                      type="Submit"
                      style={{ fontSize: 15 }}
                    >
                      Sign In With Phone
                    </Button>
                  </div>
                </Link>
              </Form>
              <hr />
              <div>
                <GoogleButton
                  className="g-btn"
                  type="dark"
                  onClick={handleGoogleSignIn}
                  style={{ fontSize: 10 }}
                />
              </div>
            </div>
            <div className="p-4 box mt-3 text-center">
              Don't have an account?
              <Button style={{ marginLeft: 5 }}>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Login;
