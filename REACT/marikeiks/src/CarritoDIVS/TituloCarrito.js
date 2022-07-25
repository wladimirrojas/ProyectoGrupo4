import React from "react";
import Cart from '../styles/Cart.css'

const TituloCarrito = () => {
    return (
        <div className="separacionBottom">
            <div className="titulos">Tu carrito

            </div>
            <div>
                <div className="botonComprar">
                    <button className="mb-3 btn btn-outline-dark">
                        Seguir comprando
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TituloCarrito;
