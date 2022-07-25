import React from "react";

const BodyCarrito = () => {
    return (
        <>
            <div className="subtitulos2 row">
                <div className="col-8">Producto</div>
                <div className="col-2">Cantidad</div>
                <div className="col-2">Total</div>
            </div>
            <div className="parrafosT row">
                <div className="col-8 card mb-3 p-1">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={require("../img/contacto.jpg")} 
                                className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                <button className="btn btn-sm btn-outline-danger col"
                                //onClick={() => productoDelete(producto.key)}
                                >Eliminar</button>
                            </div>
                        </div>
                    </div>
                
                <div className="col-2">Cantidad</div>
                <div className="col-2">Total</div>
            </div>
        </>
    );
};

export default BodyCarrito;