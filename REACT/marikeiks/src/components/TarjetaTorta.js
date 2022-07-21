import React from "react";
import '../styles/ProductoTorta.css'

const TarjetaTorta = (producto) => {
    return (
        <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 mb-5 mt-5'>
            <div className="card">
                <img src="..." className="card-img-top" alt={producto.id}/>
                    <div className="card-body">
                        <h5 className="card-title">{producto.descripcion}</h5>
                        <p className="card-text">{producto.vegano}</p>
                        <p className="card-text">{producto.precio}</p>
                        <button className="btn btn-sm btn-outline-primary me-2">Añadir al carro</button>
                    </div>
            </div>
        </div>
    );
};

export default TarjetaTorta;