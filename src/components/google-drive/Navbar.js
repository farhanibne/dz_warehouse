import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="sm">
      <Navbar.Brand  >
        <h5 style={{color:'azure', marginLeft:'2px'}}>WAREHOUSE</h5>
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          <h6 style={{color:'azure',marginRight:'20px'}}>Profile</h6>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}