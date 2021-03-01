import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/header.module.scss"

function HeaderContainer() {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.texture}>
        <Container className={styles.containerTop}>
        <Row className={styles.sectionHeader}>
            <Col xs={12} md={6} className={styles.sectionTitle}>
            
              <h2>La forma más <span className={styles.spanHeader}>fácil</span><br></br>
              de empezar tu<br></br> tienda online <br></br>
              desde tu <span className={styles.spanHeader}>móvil</span></h2>
              
              
              <button className="">¡Comienza ya!</button>
             
            </Col>
            <Col xs={12} md={6} className="">
            <img className="img-fluid" src="/principal.svg" />
            
              
              
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
}

export default HeaderContainer;
