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

const BCarritoComponent = 
(
    //{producto}

    // ({producto, productoDelete, setCantidadProducto})
) => {
    return (
        <div className="row">
            <div className="card mb-3 col">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="card-img" width="1%" 
                        // ver el enlace con imagen
                        src={require("../img/contacto.jpg")} 
                        alt="{producto.id}" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                Nombre
                                {/* {producto.nombre} */}
                                </h5>
                            <p className="card-text">
                                <ul className="list-unstyled mb-0">
                                    <li className="parrafos ">Detalles: 
                                    {/* {producto.descripcion} */}
                                    </li>
                                    <li className="parrafos">ID: 
                                    {/* {producto.id} */}
                                    </li>
                                    <li className="parrafos">Precio: $
                                    {/* {producto.precio} */}
                                    <br></br> 
                                    cantidad: unit.
                                    {/* {producto.cantidad} */}
                                    
                                    </li>
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
<<<<<<< HEAD
                        <i class="bi bi-x-lg"></i>

                        
=======
                        <i className="bi bi-x-lg"></i>
>>>>>>> main
                    </div>
                </div>
            </div>

        </div>

    );
};

export default BCarritoComponent;