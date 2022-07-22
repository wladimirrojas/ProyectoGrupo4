import React, { useEffect, useState } from "react";
import {getAllVentas, guardarVentas } from "../services/VentaServise";

import CarritoFormComponent from "./CarritoFormComponent";
import CarritoTarjetaComponent from "./CarritoTarjetaComponent";

//valores iniciales
const initialVenta = [
    {
        key: "1",
        fecha_emision: "",
        fecha_entrega: "",
        subtotal: "",
        comentario: "",
        iva_subtotal: "",

    }
]


const CarritoUsuarioComponent = () => {
    //Creacion del estado inicial
    const [ventas, setVentas] = useState(initialVenta);

    //creacion de la obtencion de los datos de VENTA
    const obtenerVentas = async () => {
        setVentas(await getAllVentas());
    }

    useEffect(
        () => { obtenerVentas() }
        , [])

    // Creacion metodo de eliminacion de datos de VENTA
    // const ventasDelete=async(id)=>{
    //     await eliminarVentas(id);
    //     setVentas(await getAllVentas());
    // }

    //Creacion metodo guardar datos en VENTA
    const ventasAdd=async(ventas)=>{
        await guardarVentas(ventas)
        setVentas(await getAllVentas())
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8 ">
                    <h1>Lista</h1>
                    {
                        //Iteracion de datos
                        ventas.map(venta => <CarritoTarjetaComponent
                            key={venta.id}
                            venta={venta}

                            
                            // tarjetaDelete={ventaDelete}
                        />)
                    }

                </div>
                <div className="col">
                    <h1>Formulario</h1>
                    <CarritoFormComponent ventasAdd={ventasAdd}/>

                </div>
            </div>
        </div>
    )
}

export default CarritoUsuarioComponent;