import React, { useState, useEffect } from "react";
import TarjetaTorta from "./TarjetaTorta";
import getAll from "../services/ProductoService";
import TituloProducto from "./TituloProducto";
import DireccionamientoFAQ from "./DireccionamientaFAQ";
import "../styles/ProductoTorta.css";

const initialProductos = [
  {
    id: 0,
    nombre: "",
    descripcion: "",
    stock: 0,
    precio: 0,
    vegano: 0,
    tipoProducto: 0,
    decoracion: 0,
    sabor: 0,
    cantidad: 0,
  },
];

const ProductoListado = () => {
  const [productos, setProductos] = useState(initialProductos);

  const obtenerProductos = async () => {
    setProductos(await getAll());
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div className="contenedor-productos p-0">
      <TituloProducto />
      <div className="row row-cols-4 row-cols-lg-4 g-4 g-lg-4">
        {productos.map((producto) => (
          <TarjetaTorta id={producto.id} producto={producto} />
        ))}
      </div>
      <br />
      <DireccionamientoFAQ />
    </div>
  );
};

export default ProductoListado;
