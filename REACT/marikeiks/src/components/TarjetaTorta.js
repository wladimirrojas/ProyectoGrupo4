import React from "react";
import '../styles/ProductoTorta.css'
import { useCallback } from "react";
import { useNavigate } from 'react-router-dom';




const TarjetaTorta = ({producto}) => {
        const navigate = useNavigate();
        const handleOnClick = useCallback(() => navigate('/producto/editarorden', { replace: true }, [navigate]));
    return (
        <div className="card mx-5">
            <img src={producto.url} className="card-img-top" alt={producto.id} />
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                {/* <p className="card-text">{producto.cantidad.porcion}</p>
                <p className="card-text">{producto.sabor.descripcion}</p> */}
                <p className="card-text">${producto.precio}</p>
                <button className="btn btn-sm btn-outline-primary me-2"onClick = {handleOnClick}>Añadir al carro</button>
            </div>
        </div>
    );
};

export default TarjetaTorta;