import React from 'react'
import {Form, Button} from "react-bootstrap"
import styles from "../../styles/register.module.scss"

function ResgisterFormComponent() {
    return (
        <div>
            <div style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
            <h2>¿Cómo <span className={styles.spanHeader}>empezamos</span>?</h2>
              <h5>Crea tu tienda en pocos minutos</h5>

            </div>
            
            <form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group>
                    <Form.Label> Correo Electrónico</Form.Label>
                    <Form.Control  type="email" placeholder="Ingresa tu correo"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Crea tu contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Crea tu contraseña"/>
                </Form.Group>
                <Button type="submit"> ¡Registrate!</Button>
            </form>
            
        </div>
    )
}

export default ResgisterFormComponent
