import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OtpComp from "react-otp-input";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const OTPInput = ({ length = 6, onChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location; // Get email from state
  const email = state;
  const [otp, setOtp] = useState(""); // Manage OTP as a string

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_Backend_url}/user/verify-otp`,
        {
          email: state, // Email from location state
          otp: otp, // OTP value as string
        }
      );

      toast?.success(res?.data?.message);
      navigate("/Reset-password", {
        state: email,
      });
    } catch (error) {
      //   console.error("Error verifying OTP:", error?.response?.data?.message);
      toast?.error(error?.response?.data?.message);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Row className="text-center mb-4">
        <Col>
          <h1>Enter OTP</h1>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <Form onSubmit={handleSubmit}>
            <OtpComp
              value={otp} // OTP state
              onChange={setOtp} // Update state on change
              numInputs={6} // Number of OTP inputs
              separator={<span className="mx-2">-</span>} // Separator with spacing
              isInputNum // Only numeric input
              inputStyle={{
                width: "50px",
                height: "50px",
                textAlign: "center",
                fontSize: "20px",
                border: "1px solid #ced4da",
                borderRadius: "5px",
                margin: "0 5px",
              }}
              renderInput={(props) => (
                <input {...props} className="form-control" />
              )}
            />
          </Form>
        </Col>
      </Row>

      <Button
        variant="primary"
        onClick={handleSubmit}
        className="mt-3 px-4 py-2"
      >
        Verify
      </Button>
    </Container>
  );
};

export default OTPInput;
