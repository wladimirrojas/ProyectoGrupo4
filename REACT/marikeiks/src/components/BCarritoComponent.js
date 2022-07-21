import React from "react";


// const agregarCarrito = (producto, cantidad) => {
//     const aux = carrito.find((x) => x.producto === tipoProducto);
                                //VERLO POR ID
//     if (!aux) {
//         const Tipoproducto = {
                //             tortas capucackes galletas candybar decoraciones fondant
//             categoria: item.producto,
//             Precio: item.precio,
//             cantidad: cantidad,
//             precioTotal: item.precio * cantidad
//         };
//         setCarrito([
//         ...Carrito, producto
//         ]);
//     }
// };

const BCarritoComponent = (
    // ({producto, productoDelete, setCantidadProducto})
) => {
    return (
        <div className="row">
            <div className="card mb-3 col">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="rounded" height="200" width="170" src={require("../img/contacto.jpg")} alt="contacto" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">NOMBRE PRODUCTO</h5>
                            <p className="card-text">
                                <ul className="list-unstyled mb-0">
                                    <li className="parrafos ">Av. Consistorial 5778</li>
                                    <li className="parrafos">Santiago, Peñalolén</li>
                                    <li className="parrafos">Retiro: Lun-Sáb <br></br> 9:00 - 18:00</li>
                                </ul>
                            </p>
                            <p className="card-text"><small className="text-muted">hehe</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row-col-2 ">
                    <div>
                        {/* onChancgue Cambiar */}
                        <button className="btn btn-sm btn-outline-primary me-2 col"
                        // onClick={()=>setCantidadProducto(producto)}
                        >Añadir</button>
                    </div>
                    <div>

                        {/* <a href="">
                                <div className="bi bi-x-lg">

                                </div>
                            </a> */}

                        <button className="btn btn-sm btn-outline-danger col"
                        //onClick={() => productoDelete(producto.key)}
                        >Eliminar</button>
                        <i class="bi bi-x-lg"></i>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default BCarritoComponent;