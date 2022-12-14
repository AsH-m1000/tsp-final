import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container, Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import "../App.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Container
        style={{
          width: "400px",
        }}
      >
        <Col>
          <Row>
            <div className="p-4 box">
              <h2 className="mb-3">Signup</h2>
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
                    Sign up
                  </Button>
                </div>
              </Form>
            </div>
            <div className="p-4 box mt-3 text-center">
              Already have an account?
              <Button style={{ marginLeft: 10 }}>
                <Link to="/">Log In</Link>
              </Button>
            </div>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Signup;
