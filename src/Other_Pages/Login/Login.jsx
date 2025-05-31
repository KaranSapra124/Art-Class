import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useUser } from "../../Context/UserContext";

const Login = () => {
 
  const { state, dispatch } = useUser();

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // alert("HELLo")
      const res = await axios.post(
        `${import.meta.env.VITE_Backend_url}/user/auth-user`,
        formData, {
        withCredentials: true,  // Allow credentials (cookies, auth tokens)
        // headers: {
        //   'Content-Type': 'application/json', // Make sure this is correct (adjust if you're sending formData)
        // },
      }
      );
      alert(res?.data?.message)
      toast.success(res?.data?.message);
      dispatch({ type: "LOGIN", payload: res?.data?.foundUser });
    } catch (error) {
      // console.log(error?.response, "ERROR");
      toast.error(error?.response?.data?.message);
    }
    // setTimeout(() => navigate("/"), 100);
    // console.log(state);
  };
  useEffect(() => {
    if (state.isAuthenticated) {
      navigate("/");
    }
  }, [state.isAuthenticated, navigate]);

  // useEffect(() => console.log(state), [state]);

  return (
    <>
      <sectionoo id="login-container" className="d-flex flex-column vh-100">
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
          <div
            id="login-card-container"
            className="col-lg-5 col-md-8 py-8 py-xl-0"
          >
            {/* Card */}
            <div id="login-card" className="card shadow">
              {/* Card body */}
              <div
                id="login-card-body"
                className="card-body p-6 d-flex flex-column gap-3"
              >
                <div>
                  {/* <a href="">
                    <img src={lgo} id="login-logo" className="mb-4" alt="logo-icon" />
                  </a> */}
                  <div id="login-title" className="d-flex flex-column gap-1">
                    <h1 className="mb-0 fw-bold">Sign in</h1>
                    <span>
                      Don’t have an account?
                      <Link to="/SignUp">
                        <a href="SignUp.jsx" id="sign-up-link" className="ms-1">
                          Sign up
                        </a>
                      </Link>
                    </span>
                  </div>
                </div>
                {/* Form */}
                {/* <form
                  id="login-form"
                  className="needs-validation"
                  noValidate
                  // onSubmit={handleSubmit}
                > */}
                {/* Username */}
                <div id="username-container" className="mb-3">
                  <label htmlFor="signInEmail" className="form-label">
                    Username or email
                  </label>
                  <input
                    type="email"
                    id="signInEmail"
                    className="form-control"
                    name="userEmail"
                    placeholder="Email address here"
                    required
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid username.
                  </div>
                </div>
                {/* Password */}
                <div id="password-container" className="mb-3">
                  <label htmlFor="signInPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="signInPassword"
                    className="form-control"
                    name="password"
                    placeholder="************"
                    required
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid password.
                  </div>
                </div>
                {/* Checkbox */}
                <div
                  id="rememberme-container"
                  className="d-lg-flex justify-content-between align-items-center mb-4"
                >
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberme"
                      required
                    />
                    <label className="form-check-label" htmlFor="rememberme">
                      Remember me
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                  <div>
                    <Link to="/Forget">
                      <a id="forgot-password-link">Forgot your password?</a>
                    </Link>
                  </div>
                </div>
                <div>
                  {/* Button */}
                  <div id="login-button-container" className="d-grid">
                    <button
                      onClick={handleSubmit}
                      id="login-button"
                      className="btn btn-primary"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </sectionoo>
    </>
  );
};

export default Login;
