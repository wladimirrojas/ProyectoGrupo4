import React from "react";
import '../styles/ProductoTorta.css'
import { useCallback } from "react";
import { useNavigate } from 'react-router-dom';

import FormatNumberComponent from "./utils/FormatNumberComponent";


const TarjetaTorta = ({ producto }) => {
    const navigate = useNavigate();
        const handleOnClick = useCallback(() => navigate('/productos/editarorden', { replace: true }, [navigate]));
    return (
        <div id="contenedor-card" className="col">
            <div className="card p-1 border bg-light mx-5">
                <img id="imagen-torta" src={producto.url} className="card-img-top" alt={producto.id} />
                <div id="card-model" className="card-body">
                    <h5 className="card-title">{producto.descripcion}</h5>
                    <p className="card-text"><FormatNumberComponent number={producto.precio}/></p>
                    <button className="btn btn-sm btn-outline-primary me-2"onClick = {handleOnClick}>Comprar</button>
                </div>
            </div>
        </div>
    );
};

export default TarjetaTorta;