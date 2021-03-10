import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap"
import styles from "../../styles/register.module.scss"

function ResgisterFormComponent(){
    const [ userData, setUserData ] = useState({})
    const [ logedIn , setLogedIn ] = useState(null)
    const [ loginError, setLoginError ] = useState(false)

    const changeHandler = event => {
        setUserData( {...userData, [event.target.name] : event.target.value })
        setLoginError( false )
    }

    const registerUser = async event => {
        let nonTextHeaders = new Headers()

        event.preventDefault()
        const res = await fetch(
            'http://ec2-18-222-219-127.us-east-2.compute.amazonaws.com:8080/auth/signup',
          {
            body: JSON.stringify({
                email : userData.inputEmail,
                password : userData.inputPassword
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )
    
        const result = await res.json()
        console.log(result)
        
      }

    return (
        <div>
            <div style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
            <h2>¿Cómo <span className={styles.spanHeader}>empezamos</span>?</h2>
              <h5>Crea tu tienda en pocos minutos</h5>

            </div>
            
            <form onSubmit = { registerUser } style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group>
                    <Form.Label> Correo Electrónico</Form.Label>
                    <Form.Control  name="inputEmail" type="email" onChange = { changeHandler } placeholder="Ingresa tu correo"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Crea tu contraseña</Form.Label>
                    <Form.Control name="inputPassword" type="password" onChange = { changeHandler } placeholder="Crea tu contraseña"/>
                </Form.Group>
                <Button type="submit"> ¡Registrate!</Button>
            </form>
            
        </div>
    )
}
export default ResgisterFormComponent
