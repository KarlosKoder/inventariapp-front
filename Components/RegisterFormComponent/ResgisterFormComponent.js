import React from 'react'
import {Form, Button} from "react-bootstrap"
import styles from "../../styles/register.module.scss"
import { useState } from 'next/router';

function ResgisterFormComponent(){
    const [ userData, setUserData ] = useState({})
    const [ logedIn , setLogedIn ] = useState(null)
    const [ loginError, setLoginError ] = useState(false)

    const changeHandler = event => {
        setUserData( {...userData, [event.target.name] : event.target.value })
        setLoginError( false )
    }

    const registerUser = async event => {
        event.preventDefault()
    
        const res = await fetch(
          'https://hooks.zapier.com/hooks/catch/123456/abcde',
          {
            body: JSON.stringify({
              email: event.target.email.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )
    
        const result = await res.json()
        // result.user => 'Ada Lovelace'
      }

    const login = () => {
        let response = api.login(userData)
        console.log( response )
        response.status === "error" ? setLoginError( response ) : bringAccess( response )
    }

    const bringAccess = ( loginData ) => {
        console.log( loginData )
        let { token, role } = loginData;
        localStorage.setItem("token",token)
        localStorage.setItem("role",role)
        window.location.href = '/home'
    }
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
                <Button onClick={ registerUser } type="submit"> ¡Registrate!</Button>
            </form>
            
        </div>
    )
}
export default ResgisterFormComponent
