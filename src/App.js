import { useState } from "react";
import AppForm from "./componentes/AppForm";

function App() {
///////////////////LECTURA  (READ) ///////////////////////////

const [idActual, setIdActual ] = useState('');    //EL IDACTUAL SU FUNCION ES : para actualizar y eliminar
const [docsBD, setDocsBD] = useState([]);        //para lectura a BD

////////////LECTURA A BASE DE DATOS////////////
const fnRead = () =>{
  console.log("Lectura a BD");
} 

////////////LECTURA A BASE DE DATOS////////////
const fnDelete = () =>{
  console.log("Eliminar un registro");
} 

  return (
    <div style={{background:"greenyellow", width:"350px"}}>
      <AppForm {...{idActual, setIdActual, fnRead}} />
    </div>
  );
}

export default App;
