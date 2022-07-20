import React from "react";
import '../styles/styleCarrusel.css'

const VistaProductoComponent = () =>{
    return(
        <div id="tituloV">
                    <div className="d-flex justify-content-center">
                        <h2 id="variedades">Variedades</h2>
                    </div>

                    <div id="carruselProductos" className="carousel slide
                        carousel-fade carousel-dark d-flex align-items-center"
                        data-bs-ride="carousel">
                        {/*<!-- indicadores inferiores -->*/}
                        <div className="carousel-indicators">
                            <button type="button"
                                data-bs-target="#carruselProductos"
                                data-bs-slide-to="0" class="active"></button>
                            <button type="button"
                                data-bs-target="#carruselProductos"
                                data-bs-slide-to="1"></button>
                        </div>
                        {/*<!-- cuerpo del carrusel -->*/}
                        <div className="carousel-inner">
                            {/*<!-- pestaña que se verá como slider, que comprende 3 imagenes -->*/}
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-around
                                    tarjetaCompleta">
                                    <div className="tarjetaCarrusel">
                                        <div className="tarjetaImagen">
                                            <img className="imgProducto"
                                                src={require("../img/a65a6b0b81bc7645c4ddb272d656c548.webp")}
                                                alt=""/>
                                        </div>
                                        <div className="subtitulo">
                                            <h6>Tortas</h6>
                                        </div>

                                    </div>
                                    <div className="tarjetaCarrusel">
                                        <div className="tarjetaImagen">
                                            <img className="imgProducto"
                                                src={require("../img/vanilla-vegan-gluten-free-cake-oat-flour_9718.jpg")}
                                                alt=""/>
                                        </div>
                                        <div className="subtitulo">
                                            <h6>Vegan</h6>
                                        </div>

                                    </div>
                                    <div className="tarjetaCarrusel">
                                        <div className="tarjetaImagen">
                                            <img className="imgProducto"
                                                src={require("../img/WeddingCake_1800x1800.webp")}
                                                alt=""/>
                                        </div>
                                        <div className="subtitulo">
                                            <h6>Matrimonio</h6>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-around
                                    tarjetaCompleta">
                                    <div className="tarjetaCarrusel">
                                        <div className="tarjetaImagen">
                                            <img className="imgProducto"
                                                src={require("../img/mike-meeks-zk-fclJdGas-unsplash-scaled.jpg")}
                                                alt=""/>
                                        </div>
                                        <div className="subtitulo">
                                            <h6>Cupcakes</h6>
                                        </div>

                                    </div>
                                    <div className="tarjetaCarrusel">
                                        <div className="tarjetaImagen">
                                            <img className="imgProducto"
                                                src={require("../img/variado.jpg")}
                                                alt=""/>
                                        </div>
                                        <div className="subtitulo">
                                            <h6>Candy Bar</h6>
                                        </div>

                                    </div>
                                    <div className="tarjetaCarrusel">
                                        <div className="tarjetaImagen">
                                            <img className="imgProducto"
                                                src={require("../img/pan.jpg")}
                                                alt=""/>
                                        </div>
                                        <div className="subtitulo">
                                            <h6>Horneados</h6>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<!-- Controles derecho/izquierdo -->*/}
                        <button className="carousel-control-prev" type="button"
                            data-bs-target="#carruselProductos"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button"
                            data-bs-target="#carruselProductos"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
    )
}

export default VistaProductoComponent;