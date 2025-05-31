import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NewPassword = () => {
  const location = useLocation();
  const { state } = location;
 const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setSuccess(false);
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setSuccess(false);
    } else {
      setError("");
      // setSuccess(true);
      // Add logic for handling the password reset (e.g., API call).
      const res = await axios.post(
        `${import.meta.env.VITE_Backend_url}/user/reset-password`,
        {
          email: state,
          newpassword: password,
        }
      );
      toast.success(res?.data?.message);
      navigate("/login")
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Set New Password</h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && (
              <Alert variant="success">Password changed successfully!</Alert>
            )}

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewPassword;
