// Import React and Bootstrap dependencies
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import Paintings from "./Art_Workshop/Paintings";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("users");

  const renderComponent = () => {
    switch (activeSection) {
      case "users":
        return <Users />;
      case "paintings":
        return <Paintings />;
      default:
        return <div>Select a section from the sidebar</div>;
    }
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4 className="text-center mb-4">Admin Panel</h4>
        <Nav className="flex-column">
          <Nav.Link
            onClick={() => setActiveSection("users")}
            className="text-white"
          >
            Users
          </Nav.Link>
          <NavDropdown
            title="Our Art Workshop"
            id="artworkshop-dropdown"
            className="text-white"
          >
            <NavDropdown.Item onClick={() => setActiveSection("paintings")}>Paintings</NavDropdown.Item>
            <NavDropdown.Item disabled>Landscape</NavDropdown.Item>
            <NavDropdown.Item disabled>Portraits</NavDropdown.Item>
            <NavDropdown.Item disabled>Custom Orders</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <Navbar bg="light" className="shadow-sm px-4">
          <Navbar.Brand>Admin</Navbar.Brand>
        </Navbar>

        <Container fluid className="p-4">{renderComponent()}</Container>
      </div>
    </div>
  );
};

export default AdminDashboard;
