import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutComponent() {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src="assets/" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="about-details">
            <div>
              <h2 className="text-alt">Sabemos lo difícil que es empezar</h2>
              <b className="about-text">Lorem ipsum dolor sit amet, con-sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis 
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
