import React from 'react'
import { useRouter } from 'next/router';
import { Col, Container, Row, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import styles from "../../styles/nav.module.scss"

function NavButtonComponent() {
    return (
        <>
            <Container className="p-0 ">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                        <Nav className="">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            
                        </Nav>
                      
                   
                </Navbar>
            </Container>
        </>
    )
}

export default NavButtonComponent
