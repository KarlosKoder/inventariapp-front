import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/servicios.module.scss"

function ServiceComponent() {
  return (
    <div className={`p-0 ${styles.serviceContainerBg}`}>
      <Container className={styles.serviceContainer}>
        <Row>
          <Col xs={12} md={4}>
            <img src="assets/ventajas1.svg" className="" />
            <h2>Rápido</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img src="assets/ventajas3.svg" className="" />
            <h2>Fácil</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img
              src="assets/ventajas2.svg"
              className="" />
            
            <h2>Dinámico</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
        </Row>
      
      </Container>
    </div>
  );
}

export default ServiceComponent;
