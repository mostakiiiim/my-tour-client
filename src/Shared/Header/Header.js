import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';


import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <>
                <Navbar className="p-3" bg="danger" variant="dark" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">Malay Travels</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-end">




                                {user.email ?
                                    <>

                                        <Nav.Link as={Link} to="/myOrders">
                                            My Orders</Nav.Link>

                                        <Nav.Link as={Link} to="/addService">
                                            Add Service</Nav.Link>
                                        <Nav.Link as={Link} to="/manageOrders">
                                            Manage All Orders</Nav.Link>

                                        <button className="btn btn-danger ms-1" onClick={logOut}>Logout</button>
                                    </>
                                    :
                                    <Nav.Link as={Link} to="/login">Login/Sign Up</Nav.Link>
                                }
                                <Navbar.Text>
                                    <i className="far fa-user pe-1"></i>User: <span className="text-white">{user?.displayName}</span>
                                </Navbar.Text>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;