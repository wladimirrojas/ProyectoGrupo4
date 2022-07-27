import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";


const EdicionProducto = () => {
    return (
        <div className="containerP">
            <section>
                <div class="btn-group">
                    <button type="button" class="btn btn-danger">Título del botón</button>

                    <button type="button" class="btn btn-danger dropdown-toggle"
                        data-toggle="dropdown">
                        <span class="caret"></span>
                        <span class="sr-only">Desplegar menú</span>
                    </button>

                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Acción #1</a></li>
                        <li><a href="#">Acción #2</a></li>
                        <li><a href="#">Acción #3</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Acción #4</a></li>
                    </ul>
                </div>

            </section>




        </div>









    );
};















export default EdicionProducto;
