import React, { useState } from 'react'

const AppForm = (props) => {

    const camposRegistro={nombre:"", edad:"", genero:""};   //estructura de la tabla(campos para los registros)
    const [objeto, setObjeto] = useState(camposRegistro);   //tabla a objeto(define un estado)

    const controlarEstadoCambio = (e) => {          //maneja cambios en imput
    };
    const controlSubmit = (e) => {                   // maneja submit (envio)
         
    };
  return (
    <div style={{background:"orange"}}>
        Formulario AppForm.js
    </div>
  )
}

export default AppForm