import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/logo.png' 
import '../Header/Header.css'
const Header = () => {
    return (
        <section className='Header'>
            <Navbar expand="lg">
                <Container>
                    <Link className='nav-link' to="#home">
                        <img src={logo} alt="logo" className="img-fluid mx-auto d-block" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="#populartext" smooth>Residencies</Link>
                            <Link className='nav-link' to="#maininterfest" smooth>Our Value</Link>
                            <Link className='nav-link' to="#contactpage" smooth>Contact Us</Link>
                            <Link className='nav-link' to="#Get" smooth>Get Started</Link>
                            <Link onClick={() => window.location = 'mailto:omarfaruck1944@gmail.com'}><button className="btn btn-outline-light w-100">Contact</button></Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default Header;