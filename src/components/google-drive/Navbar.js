import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      className="d-flex justify-content-between navbar-expand-sm mb-4"
    >
      <Navbar.Brand as={Link} to="/" className="ms-3">
        ANST Drive
      </Navbar.Brand>
      <Nav className="me-3">
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
