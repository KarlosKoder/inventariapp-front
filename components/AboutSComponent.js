import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutSComponent() {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src="assets/landing-page2.svg" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="about-details">
            <div>
              <h2>Sabemos lo difícil que es empezar</h2>
              <b>Lorem ipsum, or lipsum as it is sometimes known,</b>
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
