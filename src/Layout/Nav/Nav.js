import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

function NavBar() {
    const [show, setShow] = useState(false);
    const [select, setSelect] = useState(false)
    const showDropdown = (e) => {
        setShow(!show);

    }
    const hideDropdown = e => {
        setShow(false);
    }
    const handleShow = () => {
        setSelect(!select)
    }
    const handleHide = () => {
        setSelect(false)

    }
    return (
        <Navbar expand="lg" style={{ backgroundColor: "#CAAFA8" }}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand as={Link} to="/" className='h1 text-light'>Paystey</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                    <Nav className="h6">
                        <Nav.Link as={Link} to="/" className='py-sm-3 px-sm-3 text-light footer-link '>Home</Nav.Link>
                        <NavDropdown title={<span className="text-light my-auto footer-link">Shop</span>} show={select} onMouseEnter={handleShow} onMouseLeave={handleHide} className='py-sm-2 px-sm-3'>
                            <NavDropdown.Item as={Link} to="/furniture" >
                                Furniture
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/outdoor" >
                                Outdoor
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/kitchen">
                                Kitchen
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/bath-bedding" >
                                Bath & Bedding
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/lighting" >
                                Lighting
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/widoow-door">
                                Widow & Dooor
                            </NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title={<span className="text-light my-auto footer-link">NFT</span>} show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} className='py-sm-2 px-sm-3'>
                            <NavDropdown.Item as={Link} to="/basketball">
                                Basketball
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/football">
                                Football
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pokemon">
                                Pokemon
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/soccer">
                                Soccer
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/hockey">
                                Hockey
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/baseball">
                                Basball
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/blog" className='py-sm-3 px-sm-3 text-light footer-link'>Blog</Nav.Link>
                        <Nav.Link as={Link} to="/about" className='py-sm-3 px-sm-3 text-light footer-link'>About</Nav.Link>
                        <Nav.Link as={Link} to="/search" className='py-sm-3 px-sm-3 text-light footer-link'>Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link as={Link} to="/profile" className='py-sm-3 px-sm-3 text-light font-weight-bold footer-link'>Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar