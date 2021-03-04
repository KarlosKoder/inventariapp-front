import React from 'react'
import { useRouter } from 'next/router';
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/nav.module.scss"

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
                            <div onClick={() => router.push('/')}>Inicio</div>
                            <div onClick={() => router.push('/register')}>Registrate</div>
                            <div onClick={() => router.push('/signup')}>Inicia sesión</div>
                            <div onClick={() => router.push('/products')}>productos</div>
                            

                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default NavComponent
