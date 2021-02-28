import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/about.module.scss"

function AboutComponent() {
  return (
    <div className={styles.aboutContainerBg}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src="assets/landing-page1.svg" className={styles.imgAbout} />
          </Col>
          <Col xs={12} md={6} className={styles.aboutDetails}>
            <div>
              <h2 className={styles.textAlt}>Sabemos lo difícil que es empezar</h2>
              <b className={styles.aboutText}>Lorem ipsum dolor sit amet, con-sectetuer 
              adipiscing elit, sed diam nonummy nibh euismod 
              tincidunt ut laoreet dolore magna aliquam erat volutpat. 
              Ut wisi enim ad minim veniam, quis 
              nostrud exerci tation ullamcorper suscipit. </b>
              <br />
              <br />
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;
