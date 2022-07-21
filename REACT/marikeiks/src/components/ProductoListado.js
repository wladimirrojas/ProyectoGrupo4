import React,{useState, useEffect} from 'react';
import TarjetaTorta from './TarjetaTorta';
import getAll from '../services/ProductoService';
import '../styles/ProductoTorta.css'
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';


const initialProductos = [
    {
        id:1,
        descripcion:'',
        stock:1,
        precio:1,
        vegano:1,

    }
]

const ProductoListado = () => {

    const [productos, setProductos] = useState(initialProductos);

    const obtenerProductos = async()=>{
        setProductos(await getAll());
    };

    useEffect(
        ()=>{obtenerProductos()
        },[])


    return (
        <div className="container-fluid p-0" style={{backgroundColor: "whitesmoke"}}>
            <HeaderComponent/>
            <div className="row">
                    <h1>Lista de tortas</h1>
                    {
                        productos.map(producto => 
                        <TarjetaTorta
                        id={producto.id} 
                        producto={producto}/>)
                    }
            </div>
            <FooterComponent/>
        </div>
    );
};

export default ProductoListado;

