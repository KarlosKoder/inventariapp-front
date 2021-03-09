import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap"
import styles from "../../styles/register.module.scss"

function LoginFormComponent(){
    const [ userData, setUserData ] = useState({})
    const [ logedIn , setLogedIn ] = useState(null)
    const [ loginError, setLoginError ] = useState(false)

    const changeHandler = event => {
        setUserData( {...userData, [event.target.name] : event.target.value })
        setLoginError( false )
    }

      const loginUser = async event => {
        let nonTextHeaders = new Headers()

        event.preventDefault()
        const res = await fetch(
            'http://ec2-18-222-219-127.us-east-2.compute.amazonaws.com:8080/auth/login',
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
        window.location.href = '/home'
        
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
              <h5>Inicia sesión</h5>

            </div>
            
            <form onSubmit = { loginUser } style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group>
                    <Form.Label> Correo Electrónico</Form.Label>
                    <Form.Control  name="inputEmail" type="email" onChange = { changeHandler } placeholder="Ingresa tu correo registrado"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Contraseña</Form.Label>
                    <Form.Control name="inputPassword" type="password" onChange = { changeHandler } placeholder="Ingresa tu contraseña"/>
                </Form.Group>
                <Button type="submit"> Entrar</Button>
            </form>
            
        </div>
    )
}
export default LoginFormComponent
