import React from 'react'
import { useRouter } from 'next/router';
import { Col, Container, Row, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import styles from "../../styles/navB.module.scss"

function NavButtonComponent() {
    return (
        <>
            <Container className="p-0 ">
                <Navbar fixed="bottom"bg="light" className={`justify-content-center  ${styles.fanav}`} >
                  
                    <Nav className={styles.facont}>
                    
                    <div className={`d-flex justify-content-between  ${styles.fadiv}`}>

                    <Nav.Link  className={`fa fa-home  ${styles.fa}`}href="#home"></Nav.Link>
                        <Nav.Link className={`fa fa-plus ${styles.fa}`} href="#pricing"></Nav.Link>
                        <Nav.Link className={`fa fa-file-text   ${styles.fatext} ${styles.fa}`} href="#pricing"></Nav.Link>
                        <Nav.Link className={`fa fa-arrow-circle-up ${styles.fa}`} href="#pricing"></Nav.Link>
                        
                    

                    </div>
                      
                    </Nav>


                </Navbar>
            </Container>
        </>
    )
}

export default NavButtonComponent
