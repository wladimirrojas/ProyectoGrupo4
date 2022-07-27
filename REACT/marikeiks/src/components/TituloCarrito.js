import React from "react";
import DireccionamientoProductos from "./DireccionamientoProductos";
import '../styles/Cart.css';

const TituloCarrito = () => {
    return (
        <div className="separacionBottom">
            <div className="titulos">Carrito

            </div>
            <div>
            <DireccionamientoProductos />
                {/* <div className="botonComprar">
                    <button className="mb-3 btn btn-outline-dark">
                        Seguir comprando
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default TituloCarrito;
