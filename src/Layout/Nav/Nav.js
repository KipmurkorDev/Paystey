import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
        <Container fluid style={{padding:"0% 4%"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand as={Link} to="/" className='h1 text-light'>Paystey</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                    <Nav className="h6">
                        <Nav.Link as={Link} to="/" className='py-sm-3 px-sm-3 text-light footer-link '>Home</Nav.Link>
                        <Nav.Link as={Link} to="/nft-chess" className='py-sm-3 px-sm-3 text-light footer-link '>Chess</Nav.Link>
                        <Nav.Link as={Link} to="/nft-pokemon" className='py-sm-3 px-sm-3 text-light footer-link '>Pokemon</Nav.Link>
                        <Nav.Link as={Link} to="/nft-ai-generative" className='py-sm-3 px-sm-3 text-light footer-link '>AI Generative</Nav.Link>
                        <Nav.Link as={Link} to="/nft-photography" className='py-sm-3 px-sm-3 text-light footer-link '>Photography</Nav.Link>
                        <NavDropdown title={<span className="text-light my-auto footer-link">Entertainment</span>} show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} className='py-sm-2 px-sm-3'>
                            <NavDropdown.Item as={Link} to="/entertainment-football">
                                Football
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/entertainment-baseball">
                                Baseball
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/entertainment-basketball">
                                Basket Ball
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/login" className='py-sm-3 px-sm-3 text-light font-weight-bold footer-link'>Login</Nav.Link>
                        <Nav.Link as={Link} to="/signup" className='py-sm-3 px-sm-3 text-light font-weight-bold footer-link'>Sign up</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link className='py-sm-3 px-sm-3 text-light footer-link'>
                        <div class="input-group rounded">
                            <input type="search" class="form-control rounded-right" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{ border: "none" }} />
                            <span class="input-group-text border-0 bg-white" id="search-addon">
                                <FontAwesomeIcon icon={faSearch} style={{ background: "#FFFFFF" }} />
                            </span>
                        </div>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar