import React from "react";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from "react-router-dom"; //
import "react-toastify/dist/ReactToastify.css";

// import Hero from "./Components/Hero/Hero";
import Curriculam from "./Components/Curriculam/Curriculam";
import Pricing from "./Components/Pricing/Pricing";
import Art_area from "./Components/Art_Areas/Art_area";
import Enroll from "./Components/Enrollment/Enroll";
import Customer from "./Components/Customer/Customer";
import Showcase from "./Components/Showcase/Showcase";
import Art_workshop from "./Components/Art_Workshop/Art_workshop";
import Formenroll from "./Components/Formenroll/Formenroll";
import Intro from "./Components/Intro/Intro";
// Import the other pages from your "Other_Pages" folder
import About from "./Other_Pages/About/About";
import Classes from "./Other_Pages/Classes/Classes";
import Contact from "./Other_Pages/Contact/Contact";
import Tutorial from "./Other_Pages/Tutorial/Tutorial";
import Workshop from "./Other_Pages/Workshop/Workshop";
import Login from "./Other_Pages/Login/Login";
import SignUp from "./Other_Pages/Login/SignUp";
import Forget from "./Other_Pages/Login/Forget";
import InstructorArtPage from "./Other_Pages/InstructorArtPage/InstructorArtPage";

//Import the Workshop pages
import Painting from "./Workshop_Pages/Painting/Painting";
import Landscapes from "./Workshop_Pages/Landscapes/Landscapes";
import Glass from "./Workshop_Pages/Glass_painting/Glass";
import Paper_craft from "./Workshop_Pages/Paper_craft/Paper_craft";
import Mixed_media from "./Workshop_Pages/Mix_media/Mixed_media";
import Waste from "./Workshop_Pages/Waste/Waste";
import Sculpture from "./Workshop_Pages/Sculpture/Sculpture";
import Mosaic from "./Workshop_Pages/Mosaic/Mosaic";
import Clay from "./Workshop_Pages/Clay/Clay";

//Import Footer pages
import FaqPage from "./FooterPages/FaqPage/FaqPage";
import Instructor from "./FooterPages/Instructor/Instructor";
import Review from "./FooterPages/Review/Review";
import Privacy from "./FooterPages/Privacy/Privacy";
import Blog from "./FooterPages/Blog/Blog";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/UserContext";
import Profile from "./Components/Profile/Profile";
import OTPInput from "./Other_Pages/Login/Otp";
import Resetpassword from "./Other_Pages/Login/Resetpassword"
import Users from "./admin/Components/Users";
import AdminDashboard from "./admin/Components/AdminDashboard";
import Paintings from "./admin/Components/Art_Workshop/Paintings";

const App = () => {
  return (
    <>
      {/* <UserProvider> */}
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        {/* Define routes for each page */}

        <Route
          path="/"
          element={
            <>
              <Intro />
              <Curriculam />
              <Art_area />
              <Pricing />
              <Enroll />
              <Showcase />
              <Art_workshop />
              <Customer />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verify-otp" element={<OTPInput />} />

        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Formenroll" element={<Formenroll />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/Reset-password" element={<Resetpassword />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/clay" element={<Clay />} />
        <Route path="/glass" element={<Glass />} />
        <Route path="/landscapes" element={<Landscapes />} />
        <Route path="/mixed_media" element={<Mixed_media />} />
        <Route path="/mosaic" element={<Mosaic />} />
        <Route path="/paper_craft" element={<Paper_craft />} />
        <Route path="/sculpture" element={<Sculpture />} />
        <Route path="/waste" element={<Waste />} />
        <Route path="/InstructorArtPage" element={<InstructorArtPage />} />
        {/* foorer routes */}
        <Route path="/FaqPage" element={<FaqPage />} />
        <Route path="/Instructor" element={<Instructor />} />
        <Route path="/Reviews" element={<Review />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/paintings" element={<Paintings />} />
      </Routes>
      {/* </UserProvider> */}
    </>
  );
};

export default App;
