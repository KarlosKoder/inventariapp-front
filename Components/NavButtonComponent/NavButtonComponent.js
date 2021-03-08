import React from 'react'
import { useRouter } from 'next/router';
import { Col, Container, Row, Navbar, Nav, Form } from "react-bootstrap";
import styles from "../../styles/nav.module.scss"

function NavButtonComponent() {
    return (
        <>
            <Container className="p-0">
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </>
    )
}

export default NavButtonComponent
