import React from 'react'
import { useRouter } from 'next/router';
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Nav.module.css"

function NavComponent() {
    const router = useRouter();

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <img className="img-fluid" src="logo.png" />
                    </Col>
                    <Col>
                        <div className={styles.main}>
                            <div onClick={() => router.push('/')}>Home</div>
                            <div onClick={() => router.push('/feed/1')}>Registrate</div>
                            <div onClick={() => router.push('/eom')}>Inicia sesión</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default NavComponent
