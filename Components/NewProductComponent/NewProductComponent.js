import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';



export const NewProductComponent= () => {
    return (


        <div>
           
            <Container >
                <Row>
                    <Col xs={12} md={3} >

                        <form style={{ width: "100%", marginLeft: "10%", marginTop: "10%" }}>
                            <Form.Group>
                                <Form.Label> Identificador SKU</Form.Label>
                                <Form.Control type="" placeholder="12234" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label> Titulo del producto </Form.Label>
                                <Form.Control type="" placeholder="Camiseta de algodón" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label> Marca </Form.Label>
                                <Form.Control type="" placeholder="Marca del producto" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label> Link de tu tienda </Form.Label>
                                <Form.Control type="" placeholder="http://www.tutienda.com" />
                            </Form.Group>

                        </form>

                    </Col>

                    <Col xs={12} md={6} >
                        <form style={{ width: "100%", marginLeft: "10%", marginTop: "10%" }}>
                            <div>
                                <Form.Group>
                                    <Form.Label> Precio </Form.Label>
                                    <Form.Control type="" placeholder="9.99" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">

                                    <Form.Control as="select">
                                        <option>MXN</option>
                                        <option>USD</option>
                                        <option>EUR</option>
                                    </Form.Control>
                                </Form.Group>

                            </div>
                        
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Descripción del producto</Form.Label>
                                <Form.Control placeholder="Características del producto" as="textarea" rows={6} />
                            </Form.Group>



                        </form>


                    </Col>

                    <Col xs={12} md={3} >
                        <form style={{ width: "100%", marginLeft: "10%", marginTop: "10%" }}>
                            <div>
                                <Form.Group>
                                    <Form.Label> Titulo del producto </Form.Label>
                                    <Form.Control type="" placeholder="Camiseta de algodón" />
                                </Form.Group>
                                <Form.Group>

                                    <Form.File id="exampleFormControlFile1" label="Example file input" />

                                </Form.Group>
                                <Form.Group>
                                    <Form.Label> ¿Cuantos productos tienes? </Form.Label>
                                    <Form.Control type="" placeholder="3" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Example select</Form.Label>
                                    <Form.Control as="select">
                                        <option>New</option>
                                        <option>Refurbished</option>
                                        <option>Used</option>
                                    </Form.Control>
                                </Form.Group>





                            </div>
                        </form>

                    </Col>

                    
                </Row>

            </Container>
        </div>
    )
}

export default NewProductComponent;