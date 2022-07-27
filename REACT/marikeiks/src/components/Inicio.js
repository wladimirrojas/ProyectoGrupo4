import React from "react";
import FooterComponent from "./FooterComponent";
import VistaProductoComponent from "./VistaProductoComponent";
import Historia from "./Historia";
import PortadaComponent from "./PortadaComponent";
import ContactoComponent from "./ContactoComponent";
import HeaderComponent from "./HeaderComponent";
import DireccionamientoFAQ from "./DireccionamientaFAQ";
import CarritoDVS from "../CarritoDIVS/CarrritoDVS";

const Inicio = () => {
  return (
    <div className="container-fluid p-0" style={{backgroundColor: "whitesmoke"}}>
      <HeaderComponent/>
      <CarritoDVS/>
      <PortadaComponent />
      <VistaProductoComponent />
      <Historia />
      <Historia />
      <ContactoComponent/>
      <DireccionamientoFAQ />
      <FooterComponent />
    </div>
  );
};

export default Inicio;
