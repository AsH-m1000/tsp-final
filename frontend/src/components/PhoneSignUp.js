import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const PhoneSignUp = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [Otp, setOtp] = useState("");
  const [flag, setflag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  const { setUpRecaptcha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("Please Enter the Valid Phone Number ");

    try {
      const response = await setUpRecaptcha(number);
      console.log(response);
      setConfirmObj(response);
      setflag(true);
    } catch (err) {
      setError(err.message);
    }
    console.log(number);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    if (Otp === "" || Otp === null) return;
    try {
      setError("");
      await confirmObj.confirm(Otp);
      navigate("/home");
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
              <h2 className="mb-3">Phone Auth Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form
                onSubmit={getOtp}
                style={{ display: !flag ? "block" : "none" }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <PhoneInput
                    defaultCountry="IN"
                    value={number}
                    onChange={setNumber}
                    placeholder="Phone Number"
                    style={{ fontSize: 15 }}
                  />
                  <div id="recaptcha-container" />
                </Form.Group>
                <div className="button-right">
                  <Link to="/">
                    <Button variant="secondary" style={{ marginLeft: 30 }}>
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginLeft: 30 }}
                  >
                    Send Otp
                  </Button>
                </div>
              </Form>
              {/* OtpVerficationOtpVerficationOtpVerficationOtpVerficationOtpVerficationOtpVerficationOtpVerficationOtpVerficationOtpVerficationOtpVerficationOtpVerficationOtpVerficationOtpVerfication */}
              <Form
                onSubmit={verifyOtp}
                style={{ display: flag ? "block" : "none" }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter Otp"
                    onChange={(e) => {
                      setOtp(e.target.value);
                    }}
                  ></Form.Control>

                  <div id="recaptcha-container" />
                </Form.Group>
                <div className="button-right">
                  <Link to="/">
                    <Button variant="secondary" style={{ marginLeft: 30 }}>
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginLeft: 30 }}
                  >
                    Verify
                  </Button>
                </div>
              </Form>
            </div>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default PhoneSignUp;
