import React from 'react'
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap"
import styles from "../../styles/edit.module.scss"

function EditProduct() {
    return (
        <div>
            
            <Container className="mt-5"> 
                
                <Row >
              
                </Row>
                <Row>
                    <Col md={6} >

                        <form>
                            <Form.Group>
                                <Form.Label className={styles.label}> Identificador SKU</Form.Label>
                                <Form.Control className={styles.input} name="identificadorSKU" placeholder="1223456" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className={styles.label}> Titulo del producto </Form.Label>
                                <Form.Control className={styles.input} name="title" placeholder="Camiseta de algodón" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className={styles.label}> Marca </Form.Label>
                                <Form.Control  className={styles.input} name="brand" placeholder="Marca del producto"  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className={styles.label}> Link de tu tienda </Form.Label>
                                <Form.Control className={styles.input} name="link" placeholder="http://www.tutienda.com" />
                            </Form.Group>

                        </form>

                    </Col>

                    <Col  md={6} >
                        <form >
                            <Row>
                                <Col >
                                    <Form.Label className={styles.label}> Precio </Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Control className={styles.input} name="price" placeholder="9.99 MXN" />
                                        </Form.Group>
                                    </Col>
                                
                                
                            </Row>
                            
                        
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label className={styles.label}>Descripción del producto</Form.Label>
                                <Form.Control className={styles.input} name="description" placeholder="Características del producto" as="textarea" rows={6} />
                            </Form.Group>



                        </form>


                    </Col>

                    <Col md={6} >
                        <form >
                            <div>
                                
                                <Form.Group>
                                    <Form.Label className={styles.label}> ¿Cuantos productos tienes? </Form.Label>
                                    <Form.Control className={styles.input} name="availability" placeholder="3" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label className={styles.label}>Condición</Form.Label>
                                    <Form.Control className={`mb-2 text-muted`}as="select" name="condition" >
                                        <option>New</option>
                                        <option>Refurbished</option>
                                        <option>Used</option>
                                    </Form.Control>
                                </Form.Group>
                                

                                





                            </div>
                        </form>

                    </Col>

                    
                </Row>

                <Row>
                    <Col md={{size:2,offset:5}}>
                    
                    <Button className={styles.buttonproduct}  type="button">Actualizar</Button>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default EditProduct
