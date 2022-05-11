import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import Logo from "./Logo.png";
import './NavbarDefault.css'

export const NavbarDefault = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><Image src={Logo}/></Navbar.Brand>
    <Nav className="me-end">
      <Nav.Link className='txt-link' href="https://classroom.google.com/c/NDY1Nzg2NzcwOTM0">Start Working!</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

