import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

function NavBar() {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);

    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <Navbar expand="lg" style={{ backgroundColor: "#CAAFA8" }}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand as={Link} to="/" className='h1 text-light'>Paystey</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                    <Nav className="h6">
                        <Nav.Link as={Link} to="/" className='py-sm-3 px-sm-3 text-light footer-link '>Home</Nav.Link>
                        <Nav.Link as={Link} to="/" className='py-sm-3 px-sm-3 text-light footer-link '>Chess</Nav.Link>
                        <Nav.Link as={Link} to="/" className='py-sm-3 px-sm-3 text-light footer-link '>Pokemon</Nav.Link>
                        <Nav.Link as={Link} to="/" className='py-sm-3 px-sm-3 text-light footer-link '>Basketball</Nav.Link>
                        <Nav.Link as={Link} to="/" className='py-sm-3 px-sm-3 text-light footer-link '>Bassball</Nav.Link>

                        <NavDropdown title={<span className="text-light my-auto footer-link">Football</span>} show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} className='py-sm-2 px-sm-3'>
                            <NavDropdown.Item as={Link} to="/">
                            Premier League
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/" className='py-sm-3 px-sm-3 text-light footer-link'>Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link as={Link} to="/" className='py-sm-3 px-sm-3 text-light font-weight-bold footer-link'>Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar