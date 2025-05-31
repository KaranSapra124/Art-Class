import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { UserProvider } from "./Context/UserContext.jsx";
import AdminDashboard from "./admin/Components/AdminDashboard.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UserProvider>
    <BrowserRouter>
      {document.location.pathname.includes("/admin") ? <AdminDashboard /> : <>

        <Navbar />
        <App />
        <Footer />
      </>}
    </BrowserRouter>
  </UserProvider>
  // {/* </StrictMode> */}
);
