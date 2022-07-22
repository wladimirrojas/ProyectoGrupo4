import React from "react";
import FooterComponent from "./FooterComponent";
import VistaProductoComponent from "./VistaProductoComponent";
import Historia from "./Historia";
import PortadaComponent from "./PortadaComponent";
import ContactoComponent from "./ContactoComponent";
import HeaderComponent from "./HeaderComponent";
<<<<<<< HEAD
import CarritoComponent from "./CarritoComponent";
=======
import DireccionamientoFAQ from "./DireccionamientaFAQ";
>>>>>>> main

const Inicio = () => {
  return (
    <div className="container-fluid p-0" style={{backgroundColor: "whitesmoke"}}>
      <HeaderComponent/>
      <CarritoComponent/>
      <PortadaComponent />
      <VistaProductoComponent />
      <Historia />
      <ContactoComponent/>
      <DireccionamientoFAQ />
      <FooterComponent />
    </div>
  );
};

export default Inicio;
