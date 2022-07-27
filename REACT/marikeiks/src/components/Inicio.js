import React from "react";
import VistaProductoComponent from "./VistaProductoComponent";
import Historia from "./Historia";
import PortadaComponent from "./PortadaComponent";
import ContactoComponent from "./ContactoComponent";
import DireccionamientoFAQ from "./DireccionamientaFAQ";

import "../styles/InicioStyle.css"

const Inicio = () => {
  return (
    <div id="inicio" className="container-fluid p-0">
      <PortadaComponent />
      <VistaProductoComponent />
      <Historia />
      <Historia />
      <ContactoComponent/>
      <DireccionamientoFAQ />
    </div>
  );
};

export default Inicio;
