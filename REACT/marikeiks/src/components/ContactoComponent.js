import React from "react";
import '../styles/Contacto.css';
import FormComponent from "./FormComponent";
import SmapaComponent from "./SmapaComponent";
import TContactoComp from "./TContactoComp";
import "../styles/InicioStyle.css"

const ContactoComponent = () => {
    return (
        <div id="contenedor-contacto" className="fondo" >
            <TContactoComp/>
            <SmapaComponent/>
            <br/>
            <FormComponent/>
        </div>
            )}

export default ContactoComponent;