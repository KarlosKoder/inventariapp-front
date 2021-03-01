import { Container, Row, Col } from "react-bootstrap";
import NavComponent from "../Components/NavComponent/NavComponent";
import { Form, Button } from "react-bootstrap"



export const Inicia = () => {
    return (


        <div>
            <NavComponent />
            <Container>
                <Row>
                    <Col xs={12} md={6} >

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
                                <Form.Group>
                                    <Form.Label>  </Form.Label>
                                    <Form.Control type="" placeholder="MXN" />
                                </Form.Group>
                            </div>
                            <Form.Group>
                                <Form.Label> Titulo del producto </Form.Label>
                                <Form.Control type="" placeholder="Camiseta de algodón" />
                            </Form.Group>



                        </form>


                    </Col>

                    <Col xs={12} md={6} >
                        <form style={{ width: "100%", marginLeft: "10%", marginTop: "10%" }}>
                            <div>
                            <Form.Group>
                            <Form.Label> Titulo del producto </Form.Label>
                            <Form.Control type="" placeholder="Camiseta de algodón" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> Sube tu imagen </Form.Label>
                            <Form.Control type="" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> ¿Cuantos productos tienes? </Form.Label>
                            <Form.Control type="" placeholder="Productos en stock" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> Condición </Form.Label>
                            <Form.Control type="" placeholder="New" />
                        </Form.Group>





                            </div>
                        </form>
                        
                    </Col>

                    <Button type="submit"> ¡Registrate!</Button>
                </Row>

            </Container>
        </div>
    )
}

export default Inicia;