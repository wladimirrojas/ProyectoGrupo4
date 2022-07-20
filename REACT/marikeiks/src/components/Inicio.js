import React from "react";
import FooterComponent from "./FooterComponent";
import VistaProductoComponent from "./VistaProductoComponent";
import Historia from "./Historia";

const Inicio = () =>{
    return(
        <div className="container-fluid">
        <VistaProductoComponent/>
        <Historia/>
        <FooterComponent/>
        </div>

    )

}

export default Inicio;