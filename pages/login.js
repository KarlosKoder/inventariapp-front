import React from 'react'

export default {

    login( userObject){
        console.log(userObject)
        let { userName, password } = userObject

        //!userObject && {status:"error", errorMsg:"debes proporcionar tus datos"}

        let response;

         userName === "israel@kodemia.mx" && password === "123456" 
            ? response = { status: "ok", token:123456789, role:"admin"}
            : response = { status: "error", errorCode: 300, errorMsg : "Usuario o contraseñaaa incorrectos" }

        return response
    }
}


