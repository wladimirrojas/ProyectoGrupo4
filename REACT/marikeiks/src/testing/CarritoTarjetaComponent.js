import React from "react";

const CarritoTarjetaComponent =({venta})=>{
    return(
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{venta.comentario}</h3>
                <hr />
                <div className="d-flex justify-content-end">
                    {/* <button className="btn btn-sm btn-outline-primary me-2" onClick={()=>setVentaEditada(venta)}  >Editar</button> */}
                    {/* <button className="btn btn-sm btn-outline-danger" onClick={()=>ventaDelete(venta.id)}>
                        Eliminar
                    </button> */}

                </div>
            </div>
        </div>

    )
}

export default CarritoTarjetaComponent;