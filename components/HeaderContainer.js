import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HeaderContainer() {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
        <Row className="section-header">
            <Col xs={12} md={6} className="section-title">
            
              <h2>La forma más <span className="span-header">fácil</span><br></br>
              de empezar tu<br></br> tienda online <br></br>
              desde tu <span className="span-header">móvil</span></h2>
              
              
              <button className="btn btn-custom">¡Comienza ya!</button>
             
            </Col>
            <Col xs={12} md={6} className="section-img">
            <img className="img-fluid" src="/principal.svg" />
            
              
              
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
}

export default HeaderContainer;
