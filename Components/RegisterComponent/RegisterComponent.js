import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/register.module.scss"

function RegisterComponent() {
    return (
        <> 
        <div className={styles.background}></div>
      <div className={styles.texture}>
        <Container className={styles.containerTop}>
        <Row className={styles.sectionHeader}>
            <Col xs={12} md={6} className={styles.sectionTitle}>
            
              <h2>¿Cómo <span className={styles.spanHeader}>empezamos</span>?</h2>
              <h5>Crea tu tienda en pocos minutos</h5>
              
        
             
            </Col>
            <Col xs={12} md={6} className={styles.sectionImg}>
            <img className={styles.imgFluid} src="/principal.svg" />
            
              
              
            </Col>
          </Row>

        </Container>
      </div>
        </>
        
    )
}

export default RegisterComponent
