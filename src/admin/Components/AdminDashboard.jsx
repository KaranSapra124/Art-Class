// Import React and Bootstrap dependencies
import React from "react";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Users from "./Users";
// import "./AdminDashboard.css"; // Optional: for custom styles

const AdminDashboard = () => {
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
                <h4 className="text-center mb-4">Admin Panel</h4>
                <Nav defaultActiveKey="#users" className="flex-column">
                    <Link className="text-white" to={"/admin/users"}>Users</Link>
                    <NavDropdown title="Our Art Workshop" id="artworkshop-dropdown" className="text-white">
                        <NavDropdown.Item href="#paintings">Paintings</NavDropdown.Item>
                        <NavDropdown.Item href="#landscape">Landscape</NavDropdown.Item>
                        <NavDropdown.Item href="#portraits">Portraits</NavDropdown.Item>
                        <NavDropdown.Item href="#custom">Custom Orders</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1">
                <Navbar bg="light" className="shadow-sm px-4">
                    <Navbar.Brand>Admin</Navbar.Brand>
                </Navbar>

                <Container fluid className="p-4">
                   {document.location.pathname.includes("/admin/users") ? 
                   <Users/>:<></>}
                </Container>
            </div>
        </div>
    );
};

export default AdminDashboard;
