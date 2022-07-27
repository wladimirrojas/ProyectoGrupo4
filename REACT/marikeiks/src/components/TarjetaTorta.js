import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import FormatNumberComponent from "./utils/FormatNumberComponent";

import "../styles/TarjetaTortaStyle.css";

const TarjetaTorta = ({ producto }) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() =>
    navigate("/productos/editarorden", { replace: true }, [navigate])
  );
  return (
    <div className="col mb-2 colcard">
      <div className="card">
        <img
          src={producto.url}
          className="card-img-top imagen-torta"
          alt={producto.id}
        />
        <div className="card-body">
          <h5 className="card-title titulo">{producto.descripcion}</h5>
          <p className="card-text contenido">
            <FormatNumberComponent number={producto.precio} />
          </p>
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={handleOnClick}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarjetaTorta;
