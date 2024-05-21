import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HedNavbar.css"


function HedNavbar() {
    return (
        
        <div>
            <Navbar sticky="top" className='bg_mainNav' bg="" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src='https://www.sharewolves.com/images/logo-black.png' className='img-fluid'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="aboutus">About</Nav.Link>
                            <Nav.Link href="blog">Blog</Nav.Link>
                            <Nav.Link href="news">News</Nav.Link>
                            <Nav.Link href="features">Features</Nav.Link>
                            <NavDropdown title="Services" id="services-dropdown">
                                <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
                                <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
                                <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="contactus">Contact</Nav.Link>
                            <Nav.Link href="login">Login</Nav.Link>
                            <Nav.Link href="register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HedNavbar