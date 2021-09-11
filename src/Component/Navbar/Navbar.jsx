import React from 'react';
import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { IoIosPower, IoIosAddCircleOutline, IoIosEye } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand className="NavBrand" >Dashboard</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link><IoIosAddCircleOutline /> Create course</Nav.Link>
                        <Nav.Link><IoIosEye/> Preview homepage</Nav.Link>
                        <Nav.Link><IoIosEye/> Preview after login</Nav.Link>
                        <Nav.Link><IoIosPower/> View homescreen</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link><IoAlertCircleOutline/> Help</Nav.Link>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
