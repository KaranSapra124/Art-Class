import React, { useState } from "react";
import "./Contact.css";
import { Link, useNavigate } from "react-router-dom";
import bkimgc from "../../assets/contact_bk.jpg";
import ContactInfo from "./ContactInfo"; // Import ContactInfo component
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(
      `${import.meta.env.VITE_Backend_url}/user/add-lead`,
      formData
    );
    toast?.success(res?.data?.message)
    Navigate("/")
  };
  return (
    <div className="row g-4 g-xxl-5" id="rowcont">
      <div className="col-xl-9 mx-auto">
        {/* Background Image */}
        <img src={bkimgc} className="rounded" alt="contact-bg" />
        {/* Contact form START */}
        <div className="row mt-n5 mt-sm-n7 mt-md-n8" id="form-cont">
          <div className="col-11 col-lg-9 mx-auto">
            <div className="card shadow p-4 p-sm-5 p-md-6">
              {/* Card header */}
              <div className="card-header border-bottom px-0 pt-0 pb-5">
                {/* Breadcrumb */}
                <nav className="mb-3" aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots pt-0">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact us
                    </li>
                  </ol>
                </nav>
                {/* Title */}
                <h1 className="mb-3 h3">Let's make the world Creative</h1>
                <p className="mb-0">
                  You can reach us anytime via{" "}
                  <a href="mailto:taraartclass@gmail.com">
                    taraartclass@gmail.com
                  </a>
                </p>
              </div>
              {/* Card body & form */}
              <form className="card-body px-0 pb-0 pt-5" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="input-floating-label form-floating mb-4">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control bg-transparent"
                    id="floatingName"
                    placeholder="Your name"
                    name="userName"
                  />
                  <label htmlFor="floatingName">Your name</label>
                </div>
                {/* Email */}
                <div className="input-floating-label form-floating mb-4">
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control bg-transparent"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="userEmail"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                {/* Number */}
                <div className="input-floating-label form-floating mb-4">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control bg-transparent"
                    id="floatingNumber"
                    placeholder="Phone number"
                    name="userNumber"
                  />
                  <label htmlFor="floatingNumber">Phone number</label>
                </div>
                {/* Message */}
                <div className="input-floating-label form-floating mb-4">
                  <textarea
                    onChange={handleChange}
                    className="form-control bg-transparent"
                    name="userMessage"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Message</label>
                </div>
                {/* Button */}
                <button className="btn btn-lg btn-primary mb-0">
                  Send a message
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />
        {/* Contact form END */}
        {/* Contact Info Section */}
        <ContactInfo /> {/* Inserted ContactInfo component here */}
        <hr className="featurette-divider" />
        {/* Google Maps Section */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.9134856946996!2d77.4437693694867!3d28.580152576170732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8168f80c79%3A0xac0248487d2ba9b2!2sNirala%20Greenshire!5e0!3m2!1sen!2sin!4v1728544467334!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
