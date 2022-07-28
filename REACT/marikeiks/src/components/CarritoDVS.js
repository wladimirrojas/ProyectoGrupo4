import React from "react";
import BodyCarrito from "./BodyCarrito";
import TituloCarrito from "./TituloCarrito";
import '../styles/Cart.css';
import FCarrito from "./FCarrito";
import "../styles/InicioStyle.css"

const CarritoDVS = () =>{
    return (
        <div className="fondo">
        <TituloCarrito/>
        <BodyCarrito/>
        <FCarrito/>
        </div>
    );
};

export default CarritoDVS;