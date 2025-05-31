import React, { useEffect, useState } from "react";
import "./Formenroll.css"; // Assuming you have this CSS file for styling
import { useUser } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Formenroll = () => {
  const Navigate = useNavigate();
  const { state } = useUser();
  // console.log(state);
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    email: state?.user?.userEmail,
    phone: "",
    address: "",
    course: "",
    parentName: "",
    relation: "",
    schoolName: "",
    classGrade: "", // New field for course selection
    courseDetail: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "course") {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        courseDetail: courses?.find(
          (elem) => elem.courseName === e.target.value
        ),
      }));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const res = await axios.post(
      `${import.meta.env.VITE_Backend_url}/user/enroll-user`,
      formData
    );
    toast.success(res?.data?.message)
  };

  useEffect(() => {
    if (state?.user === null) {
      Navigate("/login");
      toast.error("Login First!")
    } else {
      const fetchCourses = async () => {
        const res = await axios.get(
          `${import.meta.env.VITE_Backend_url}/admin/get-course`
        );
        setCourses(res?.data?.CoursesData);
      };
      fetchCourses();
    }
  }, []);

  useEffect(() => console.log(formData), [formData]);

  return (
    <div id="enroll-form">
      <h2 className="mb-3">Apply for Admission</h2>
      <p>
        You can apply online by filling up the form below or{" "}
        <a href="#">Download a pdf</a> and submit. Any questions related to the
        admission process, please contact our admission office at{" "}
        <a>+91 8130011848</a> or <a>taraartclass@gmail.com</a>.
      </p>
      <p className="mb-1">
        Before you proceed with the form, please read the following topics:
      </p>
      <ul className="ps-3 undd">
        <li>Application fee is Rs.0/-</li>
        <li>Fees are non-refundable</li>
      </ul>
      <form onSubmit={handleSubmit}>
        {/* Student Details Section */}
        <div id="student-details">
          <h2 className="mb-4">Personal Information</h2>
          <div className="form-group">
            <label htmlFor="firstName">Full Name</label>
            <input
              type="text"
              id="firstName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div> */}

          <div className="form-group">
            <label>Gender</label>
            <div id="gender-group">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleChange}
                required
              />
              <label htmlFor="male">Male</label>

              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
                required
              />
              <label htmlFor="female">Female</label>

              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                onChange={handleChange}
                required
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={state?.user?.userEmail}
              disabled
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="course">Select Course</label>
          <select
            id="course"
            name="course"
            value={formData?.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            {courses?.map((elem) => {
              return (
                <option value={elem?.courseName}>{elem?.courseName}</option>
              );
            })}
          </select>
        </div>

        {/* Parent Details Section */}
        <div id="parent-details">
          <h2 className="mb-4">Parent's Details</h2>
          <div className="form-group">
            <label htmlFor="parentName">Full Name</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="relation">Relation with Applicant</label>
            <input
              type="text"
              id="relation"
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Education Details Section */}
        <div id="education-details">
          <h2 className="mb-4">Education</h2>
          <div className="form-group">
            <label htmlFor="schoolName">School or College Name</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="board">Board of School</label>
            <input
              type="text"
              id="board"
              name="board"
              value={formData.board}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="classGrade">Class Grade</label>
            <input
              type="text"
              id="classGrade"
              name="classGrade"
              value={formData.classGrade}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* New Select Course Section */}

        {/* Submit Button */}
        <button type="submit" id="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formenroll;
