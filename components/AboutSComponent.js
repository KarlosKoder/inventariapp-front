import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/about.module.scss"

function AboutSComponent() {
  return (
    <div className={styles.aboutContainerBg}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src="assets/landing-page2.svg" className={styles.imgAbout} />
          </Col>
          <Col xs={12} md={6} className={styles.aboutDetails}>
            <div>
              <h2 className={styles.textAlt}>Sabemos lo difícil que es empezar</h2>
              <b className={styles.aboutText}>Lorem ipsum, or lipsum as it is sometimes known,</b>
              <br />
              <br />
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutSComponent;
