import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/register.module.scss"

import ResgisterFormComponent from "../RegisterFormComponent/ResgisterFormComponent"

function RegisterComponent() {
    return (
        <> 
        <div className={styles.background}></div>
      <div className={styles.texture}>
        <Container className={styles.containerTop}>
        <Row className={styles.sectionHeader}>
            <Col xs={12} md={6} className={styles.sectionTitle}>
            
              

              <ResgisterFormComponent/>
              
        
             
            </Col>
            <Col xs={12} md={6} className={styles.sectionImg}>
            <img className={styles.imgFluid} src="/backregister.svg" />
            
              
              
            </Col>
          </Row>

        </Container>
      </div>
        </>
        
    )
}

export default RegisterComponent
