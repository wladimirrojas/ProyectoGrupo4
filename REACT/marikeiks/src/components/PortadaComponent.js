import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/portadaStyle.css";

const PortadaComponent = () => {

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/productos', { replace: false }, [navigate]))

  return(
  <div id="portada">
    <img
      className="img-fluid"
      src={require("../img/portada.jpeg")}
      alt=""
    ></img>
    <div id="titulo">
      <p id="tituloLetra">Marikeiks</p>
    </div>
    <div id="BotonContenedor">
      <button id="Boton" className="btn btn-outline-dark" onClick={handleOnClick}>
        Comprar Online
      </button>
    </div>
  </div>)
};

export default PortadaComponent;
