import React from "react";
import TCarritoComponent from "./TCarritoComponent";
import BCarritoComponent from "./BCarritoComponent";
import FooterComponent from "./FooterComponent";

import '../styles/Carrito.css';

const CarritoComponent = () => {
    return(
        <div>
        <TCarritoComponent/> 
        <BCarritoComponent/>
        </div>
    );
};

export default CarritoComponent;