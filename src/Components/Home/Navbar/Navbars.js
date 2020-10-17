import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.svg';
import './Navbar.css';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Navbars = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://pacific-bayou-95420.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);

    return (
        <>
            <Navbar fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="" className="img-fluid"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link href="#portfolio">Our Portfolio</Nav.Link>
                            <Nav.Link href="#review">Our Team</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                            {
                                isAdmin ? <Link className="btn btn-primary btn-fill" to="/allService">Admin Panel</Link> : '' 
                            }
                            {
                                loggedInUser.name ? <Link className="btn btn-primary btn-fill" to="/serviceList">{loggedInUser.name}</Link> : <Link className="btn btn-primary btn-fill" to="/login">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        </>
    );
};

export default Navbars;