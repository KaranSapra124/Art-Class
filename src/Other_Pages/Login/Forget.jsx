import React, { useState } from "react";
import "./Forget.css"; // Import CSS file for styling
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom for navigation
import axios from "axios";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `${import.meta.env.VITE_Backend_url}/user/forget-password`,
      { email: email }
    );
    if (res?.data?.success) {
      Navigate("/verify-otp", {
        state: email,
      });
    }
  };
  return (
    <sectionf
      id="forgot-password-container"
      className="container d-flex flex-column vh-100"
    >
      <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
        <div className="col-lg-5 col-md-8 py-8 py-xl-0">
          {/* Card */}
          <div className="card shadow">
            {/* Card body */}
            <div className="card-body p-6 d-flex flex-column gap-4">
              <div>
                {/* <Link to="/">
                  <img src="../assets/images/brand/logo/logo-icon.svg" className="mb-4" alt="logo-icon" />
                </Link> */}
                <div className="d-flex flex-column gap-1">
                  <h1 className="mb-0 fw-bold">Forgot Password</h1>
                  <p className="mb-0">Fill the form to reset your password.</p>
                </div>
              </div>
              {/* Form */}
              <form
                className="needs-validation"
                noValidate
                onSubmit={handleSubmit}
              >
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="forgetEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="forgetEmail"
                    className="form-control"
                    name="forgetEmail"
                    placeholder="Enter Your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email.
                  </div>
                </div>
                {/* Button */}
                <div className="mb-3 d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="resetbtn"
                  >
                    Send Reset Link
                  </button>
                </div>
                <span>
                  Return to{" "}
                  <Link to="/login" className="signin-link">
                    sign in
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </sectionf>
  );
};

export default Forgot;
