import React from "react";
import '../styles/Cart.css';

const BodyCarrito = () => {
    return (
        <>
            <div className="subtitulos2 row">
                <div className="col-8">Producto</div>
                <div className="col-2">Cantidad</div>
                <div className="col-2">Total</div>
            </div>
            <div className="parrafosT row">
                <div className="col-8 card mb-3 p-2">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={require("../img/contacto0.jpg")}
                                className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">Torta de Amapola</h3>
                                <p className="card-text">
                                    Tamaño: 30 porciones
                                    <br />
                                    Decoración: Frutas de la estacion
                                </p>
                                <p className="card-text"><small className="text-muted">
                                    Despacho por pagar a empresa externa
                                </small></p>
                            </div>

                            <br />
                            <button className="btn btn-sm btn-outline-danger col"
                            //onClick={() => productoDelete(producto.key)}
                            >Eliminar</button>
                        </div>
                    </div>
                </div>
                <div className="col-2">

                    <div>
                        <ul className="list-unstyled mb-0">
                            <li className="unst">
                                <i class="bi bi-dash-circle"
                                ></i>
                                    1
                                <i class="bi bi-plus-circle"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* '\u00A0' */}
                <div className="col-2">$55.000</div>
            </div>
        </>
    );
};

export default BodyCarrito;