import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/footer.module.scss"

function ContactComponent() {
  return (
    <div className={styles.contactContainerBg}>
      <Container className={styles.contactComponent}>
        <Row>
          <Col xs={12} md={6}>
            <h1>InventariApp</h1>
            <p>
              Buscanos en nuestras redes
            </p>
            <div>
              <span className="fa fa-facebook-square"></span>
              <span className="fa fa-instagram"></span>
              <span className="fa fa-linkedin-square"></span>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <b>Links</b>
      
           
            <h6>Overview</h6>
            <h6>Social Media</h6>
            <h6>Contact</h6>
          </Col>
          <Col xs={12} md={3}>
            <b>Company</b>
           
            <h6>Overview</h6>
            <h6>Social Media</h6>
            <h6>Contact</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactComponent;
