import React, { useState } from "react";
import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import GlobalWorkshop from "./Global/GlobalWorkshopComponent";

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState("users");

    const renderComponent = () => {
        switch (activeSection) {
            case "users":
                return <Users />;
            case "Paintings":
            case "Landscape":
            case "Glass Paintings":
            case "Best of Waste Material":
            case "Paper Craft":
            case "Clay Work":
            case "Mixed Media":
            case "Quilling":
                return <GlobalWorkshop sectionType={activeSection} />;
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
                        <NavDropdown.Item onClick={() => setActiveSection("Paintings")}>Paintings</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setActiveSection("Landscape")}>Landscape</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setActiveSection("Glass Paintings")}>Glass Paintings</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setActiveSection("Best of Waste Material")}>Best of Waste Material</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setActiveSection("Paper Craft")}>Paper Craft</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setActiveSection("Clay Work")}>Clay Work</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setActiveSection("Mixed Media")}>Mixed Media</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setActiveSection("Quilling")}>Quilling</NavDropdown.Item>
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
