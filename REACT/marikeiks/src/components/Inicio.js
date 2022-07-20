import React from "react";
import FooterComponent from "./FooterComponent";
import VistaProductoComponent from "./VistaProductoComponent";
import Historia from "./Historia";
import PortadaComponent from "./PortadaComponent";
import ContactoComponent from "./ContactoComponent";

const Inicio = () => {
  return (
    <div className="container-fluid">
      <PortadaComponent />
      <VistaProductoComponent />
      <Historia />
      <FooterComponent />
    </div>
  );
};

export default Inicio;
