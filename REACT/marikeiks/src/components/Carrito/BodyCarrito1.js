import React from "react";
import TarjetaTorta from "../TarjetaTorta";

const BodyCarrito1 = () => {
    return (
        <>
            <div className="subtitulos2 row">
                <div className="col-8">Producto</div>
                <div className="col-2">Cantidad</div>
                <div className="col-2">Total</div>
            </div>
            <div className="parrafosT row">
                <TarjetaTorta/>
                <div className="col-2">Cantidad</div>
                <div className="col-2">Total</div>
            </div>
        </>
    );
};

export default BodyCarrito1;