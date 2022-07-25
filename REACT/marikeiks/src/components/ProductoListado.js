import React, { useState, useEffect } from 'react';
import TarjetaTorta from './TarjetaTorta';
import getAll from '../services/ProductoService';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import TituloProducto from './TituloProducto';
import DireccionamientoFAQ from './DireccionamientaFAQ';
import '../styles/ProductoTorta.css'



const initialProductos = [
    {
        id: 0,
        nombre: '',
        descripcion: '',
        stock: 0,
        precio: 0,
        vegano: 0,
        tipoProducto: 0,
        decoracion: 0, 
        sabor: 0,
        cantidad: 0

    }
]

const ProductoListado = () => {

    const [productos, setProductos] = useState(initialProductos);

    const obtenerProductos = async () => {
        setProductos(await getAll());
    };

    useEffect(
        () => {
            obtenerProductos()
        }, [])


    return (
        <div className="contenedor-productos p-0">
            <HeaderComponent />
            <TituloProducto />
            <div className="row">
                <div className='col-10 m-5 d-flex'>
                    {
                        productos.map(producto =>
                            <TarjetaTorta
                                id={producto.id}
                                producto={producto} />)
                    }
                </div>
            </div>
            <br />
            <DireccionamientoFAQ />
            <FooterComponent />
        </div>
    );
};

export default ProductoListado;

