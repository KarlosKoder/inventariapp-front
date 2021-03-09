import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/header.module.scss"
import { useRouter } from 'next/router';

function HeaderContainer() {
  const router = useRouter();
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.texture}>
        <Container className={styles.containerTop}>
        <Row className={styles.sectionHeader}>
            <Col xs={12} md={6} className={styles.sectionTitle}>
              <div className={styles.sectionT}>

               
                <h2>La forma más <span className={styles.spanHeader}>fácil</span><br></br>
              de empezar tu<br></br> tienda online <br></br>
              desde tu <span className={styles.spanHeader}>móvil</span></h2>
              
              
              <button onClick={() => router.push('/register')} className= {styles.btnCustom}>¡Comienza ya!</button>


              </div>
              
             
            </Col>
            <Col xs={12} md={6} className="">
            <img className={styles.imgFluid} src="/principal.svg" />
            
              
              
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
}

export default HeaderContainer;
