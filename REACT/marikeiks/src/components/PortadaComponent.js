import React from "react";
import "../styles/portadaStyle.css";

const PortadaComponent = () => {
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
      <button id="Boton" className="btn btn-outline-dark">
        Comprar Online
      </button>
    </div>
  </div>;
};

export default PortadaComponent;
