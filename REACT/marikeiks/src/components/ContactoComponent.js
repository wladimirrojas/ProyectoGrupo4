import React from "react";
import '../styles/Contacto.css';
import FormComponent from "./FormComponent";
import SmapaComponent from "./SmapaComponent";
import TContactoComp from "./TContactoComp";

const ContactoComponent = () => {
    return (
        <div >
            <TContactoComp/>
            <SmapaComponent/>
            <br/>
            <FormComponent/>
        </div>
            )}

export default ContactoComponent;