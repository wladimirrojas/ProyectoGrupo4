import React from "react";
import FooterComponent from "./FooterComponent";
import VistaProductoComponent from "./VistaProductoComponent";
import Historia from "./Historia";
import PortadaComponent from "./PortadaComponent";
import ContactoComponent from "./ContactoComponent";
import HeaderComponent from "./HeaderComponent";

const Inicio = () => {
  return (
    <div className="container-fluid p-0" style={{backgroundColor: "whitesmoke"}}>
      <HeaderComponent/>
      <PortadaComponent />
      <VistaProductoComponent />
      <Historia />
      <FooterComponent />
    </div>
  );
};

export default Inicio;
