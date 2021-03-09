import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import style from'./../../styles/newproduct.module.scss'
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import Tus from '@uppy/tus'
import Instagram from '@uppy/instagram'
import Webcam from '@uppy/webcam'
import { useState, useEffect } from "react";




export const NewProductComponent= () => {
    const [newproduct, setnewproduct] = useState({
        
    })
    const [dataExist, setdataExist] = useState(false)
    
    const saveProductHandler = () => {
        console.log(newproduct)
        fetch(`http://localhost:8080/products`,{
        method: "POST",
        body: JSON.stringify(newproduct),
        headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(json => {
        console.log(json)
        })
    }


    useEffect(() => {
        Uppy()
          .use(Dashboard, {
            trigger: '#select-files',
            inline: true
          })
          .use(Instagram, {
            target: Dashboard,
            companionUrl: 'https://companion.uppy.io'
          })
          .use(Webcam, { target: Dashboard })
          .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
          .on('complete', (result) => {
            console.log('Upload result:', result)
            console.log(result.successful[0].response.uploadURL)
            setnewproduct({... newproduct, image_link: result.successful[0].response.uploadURL})
            console.log(newproduct)
          })
        
      }, [dataExist])

    const changeHandler = (event) => {
        let property = event.target.name
        let value = event.target.value
        setnewproduct({... newproduct, [property]:value})
        console.log(newproduct)
    }

    return (
        <> 
        <div>
           
            <Container className="mt-5">
                
                <Row>
                    <Col xs={{offset:3}}>
                        <div id="select-files">
                            <link rel="stylesheet" href="https://releases.transloadit.com/uppy/v1.26.0/uppy.min.css"/>
                        </div>
                    </Col>
                </Row>

                
                
                <Row >
                  
                    <Col  xs="12">
                        <div  className="d-flex justify-content-center">
                            <h2 className={style.titlenewProduct}>Crea tu producto</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{size: 12}} sm={{size:12}} md={3} >

                        <form  style={{ width: "100%" }}>
                            <Form.Group>
                                <Form.Label className={style.label}> Identificador SKU</Form.Label>
                                <Form.Control className={style.input} onChange={changeHandler} name="identificadorSKU" placeholder="1223456" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className={style.label}> Titulo del producto </Form.Label>
                                <Form.Control className={style.input} onChange={changeHandler} name="title" placeholder="Camiseta de algodón" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className={style.label}> Marca </Form.Label>
                                <Form.Control  className={style.input} name="brand" placeholder="Marca del producto" onChange={changeHandler} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className={style.label}> Link de tu tienda </Form.Label>
                                <Form.Control className={style.input} name="link" placeholder="http://www.tutienda.com" onChange={changeHandler}/>
                            </Form.Group>

                        </form>

                    </Col>

                    <Col xs={{size:12}} md={6} >
                        <form style={{ width: "100%"}}>
                            <Row>
                                <Col xs={{size:12}}>
                                    <Form.Label className={style.label}> Precio </Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Control className={style.input} name="price" placeholder="9.99" onChange={changeHandler}/>
                                        </Form.Group>
                                    </Col>
                                
                                    <Col>
                                        <Form.Group controlId="exampleForm.ControlSelect1">

                                            <Form.Control as="select" onChange={changeHandler}>
                                                <option>MXN</option>
                                                <option>USD</option>
                                                <option>EUR</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            
                        
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label className={style.label}>Descripción del producto</Form.Label>
                                <Form.Control className={style.input} name="description" placeholder="Características del producto" as="textarea" rows={6}  onChange={changeHandler}/>
                            </Form.Group>



                        </form>


                    </Col>

                    <Col xs={12} md={3} >
                        <form style={{ width: "100%" }}>
                            <div>
                                
                                <Form.Group>
                                    <Form.Label className={style.label}> ¿Cuantos productos tienes? </Form.Label>
                                    <Form.Control className={style.input} name="availability" placeholder="3" onChange={changeHandler}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={style.label}>Condición</Form.Label>
                                    <Form.Control  className={style.input}as="select" name="condition" onChange={changeHandler}>
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
                    <Col xs={{size:2,offset:5}}>
                    
                    <Button className={style.buttonproduct} onClick={saveProductHandler}  type="button">Guardar producto</Button>
                    </Col>
                </Row>

            </Container>
        </div>
        </>
    )
}

export default NewProductComponent;