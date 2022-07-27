import React from "react";
import VistaProductoComponent from "./VistaProductoComponent";
import Historia from "./Historia";
import PortadaComponent from "./PortadaComponent";
import ContactoComponent from "./ContactoComponent";
<<<<<<< HEAD
import HeaderComponent from "./HeaderComponent";
import DireccionamientoFAQ from "./DireccionamientaFAQ";
import CarritoDVS from "../CarritoDIVS/CarrritoDVS";

const Inicio = () => {
  return (
    <div className="container-fluid p-0" style={{backgroundColor: "whitesmoke"}}>
      <HeaderComponent/>
      <CarritoDVS/>
=======
import DireccionamientoFAQ from "./DireccionamientaFAQ";

import "../styles/InicioStyle.css"

const Inicio = () => {
  return (
    <div id="inicio" className="container-fluid p-0">
>>>>>>> main
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
