import React from "react";
import DireccionamientoProductos from "./DireccionamientoProductos1";

const TituloCarrito1 = () => {
    return (
        <div className="separacionBottom">
            <div className="titulos">Tu carrito

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

export default TituloCarrito1;
