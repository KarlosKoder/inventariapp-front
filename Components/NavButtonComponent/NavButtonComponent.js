import React from 'react'
import { useRouter } from 'next/router';
import { Col, Container, Row, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { GrDocumentCsv, GrAdd, GrHome, GrDocumentImage } from 'react-icons/gr';
import styles from "../../styles/navB.module.scss"

function NavButtonComponent() {
    return (
        <>
            <Container className="p-0 ">
                <Navbar fixed="bottom" bg="light" className={`justify-content-center  ${styles.fanav}`} >

                    <Nav className={styles.facont}>

                        <div className={`d-flex justify-content-between  ${styles.fadiv}`}>


                            <Nav.Link onClick={event => window.location.href = '/'} className={styles.productB} href="#home">
                                <GrHome className={styles.productButton} />
                            </Nav.Link>

                            <Nav.Link onClick={event => window.location.href = '/'} className={styles.productB} href="#home">
                                <GrAdd className={styles.productButton} />
                            </Nav.Link>

                            <Nav.Link onClick={event => window.location.href = '/'} className={styles.product} href="#home">
                                < GrDocumentCsv className={styles.productButton} />
                            </Nav.Link>


                            <Nav.Link onClick={event => window.location.href = '/'} className={styles.product} href="#home">
                                <GrDocumentImage className={styles.productButton} />
                            </Nav.Link>






                        </div>

                    </Nav>


                </Navbar>
            </Container>
        </>
    )
}

export default NavButtonComponent
