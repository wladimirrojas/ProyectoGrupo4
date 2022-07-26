import React from "react";
import '../styles/ProductoTorta.css'

const TarjetaTorta = ({ producto }) => {
    return (
        <div id="contenedor-card" className="col">
            <div className="card p-1 border bg-light mx-5">
                <img id="imagen-torta" src={producto.url} className="card-img-top" alt={producto.id} />
                <div id="card-model" className="card-body">
                    <h5 className="card-title">{producto.descripcion}</h5>
                    <p className="card-text">${producto.precio}</p>
                    <button className="btn btn-sm btn-outline-primary me-2">Comprar</button>
                </div>
            </div>
        </div>
    );
};

export default TarjetaTorta;