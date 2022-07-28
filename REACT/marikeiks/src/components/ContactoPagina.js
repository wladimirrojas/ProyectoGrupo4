import React from "react";
import ContactoComponent from "./ContactoComponent";
import DireccionamientoFAQ from "./DireccionamientaFAQ";
import "../styles/InicioStyle.css"

const ContactoPagina = () => {
    return (
        <div className="fondo">
        <ContactoComponent/>
        <DireccionamientoFAQ/>
        </div>
    );
};

export default ContactoPagina;