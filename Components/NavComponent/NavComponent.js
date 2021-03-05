import React from 'react'
import { useRouter } from 'next/router';
import { Col, Container, Row, Navbar, Nav, Form } from "react-bootstrap";
import styles from "../../styles/nav.module.scss"

function NavComponent() {
    const router = useRouter();

    return (
        <>
           <Container className="p-0">
             <Navbar className="p-0" expand="md">
                        <Navbar.Brand href="#home">
                            <img onClick={() => router.push('/')} className={styles.imgFluid} 
                                width="120"
                                height="30"
                                src="/logo.svg"
                                className="d-inline-block align-top"
                                alt="Inventariapp logo"
                            />
                      </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                
                                

                            </Nav>
                            <Form  inline className={styles.main}>
                                <Nav.Link className={styles.mainText} onClick={() => router.push('/')}>Inicio</Nav.Link>
                                <Nav.Link className={styles.mainText}  onClick={() => router.push('/register')}>Registrate</Nav.Link>
                                <Nav.Link className={styles.mainText}  onClick={() => router.push('/register')}>¡Comienza ya!</Nav.Link> 
                                
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
            </Container>
        </>

    );
};

export default NavComponent
