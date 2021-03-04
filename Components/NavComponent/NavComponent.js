import React from 'react'
import { useRouter } from 'next/router';
import { Col, Container, Row, Navbar, Nav, Form } from "react-bootstrap";


function NavComponent() {
    const router = useRouter();

    return (
        <>
           <Container className="p-0">
             <Navbar className="p-0" expand="lg">
                        <Navbar.Brand href="#home">
                            <img onClick={() => router.push('/')} className={styles.imgFluid} 
                                src="/logo.svg"
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                                alt="Inventariapp logo"
                            />
             gits           </Navbar.Brand>
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
