import React from "react";
import '../styles/estilosEditar.css';
import Imgprueba1 from '../img/vanilla-vegan-gluten-free-cake-oat-flour_9718.jpg';
import { useCallback } from "react";
import { useNavigate } from 'react-router-dom';

const EditarProducto = () => {
    
    
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/productos/editarorden/carrito', { replace: true }, [navigate]));

    return (
        <div id="containerP" className="containerP">
            <img src={Imgprueba1} id='torta' alt="logo de empresa" />
            <section className="section" style={{ "font": "size 0.5vw" }}>
                <h1 id="Tituloeditar">Elige los detalles de tu torta:</h1>
                <br></br>
                <p className="new-line">Tipo de Pastelería</p>
                <div className="input-group mb-3">
                    <br></br>
                    <select class="form-select" id="inputGroupSelect01">
                    <option value>Elegir...</option>
                    <option value={1}>Vegana</option>
                    <option value={2}>No Vegana</option>
                    </select>
                </div>
                <p className="new-line">Tamaño</p>
                <div className="input-group mb-3">
                    <br></br>
                    <select class="form-select" id="inputGroupSelect02">
                        <option selected>Elegir...</option>
                        <option value={1}>10 personas ($23.500)</option>
                        <option value={2}>15 personas ($35.250)</option>
                        <option value={3}>20 personas ($47.000)</option>
                        <option value={4}>25 personas ($58.750)</option>
                        <option value={5}>30 personas ($70.500)</option>
                        <option value={6}>desde 35 personas, 2 pisos: $2.500 por porcion</option>
                    </select>
                </div>
                <p className="new-line">Sabor de Bizcocho</p>
                <div className="input-group mb-3">
                    <br></br>
                    <select class="form-select" id="inputGroupSelect03">
                        <option selected>Elegir...</option>
                        <option value={1}>Violeta (chocolate,ganache y frambuesas)</option>
                        <option value={2}>Jazmín (bizcocho de limón con chocolate blanco, frambuesas y manjar)</option>
                        <option value={3}>Lotto (bizcocho de chocolate con relleno de cookies and cream)</option>
                        <option value={4}>Peonía (bizcocho de chocolate con relleno de ganache y naranjas confitadas)
                        </option>
                        <option value={5}>Magnolia (bizcocho de nueces con relleno de manjar y lúcuma)</option>
                        <option value={6}>Amapolas (bizcocho de amapolas con relleno de chocolate blanco, frambuesas, manjar
                            y nueces)</option>
                        <option value={7}>Manjar,Nuez, Pastelera</option>
                        <option value={8}>Merengue Lúcuma y Manjar (solo decoración simple)</option>
                        <option value={9}>Merengue frambuesas y manjar (solo decoración simple)</option>
                    </select>
                </div>
                <br></br>
                <span style={{textDecorationLine: 'underline'}}>Tipo DECORACIÓN:</span>
                <br></br> <span>Debes escribir TODOS LOS DETALLES que quieres que se incluyan en tu cotización. Este
                    valor se suma al valor base de la torta. </span>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlfor="flexRadioDefault1">
                        Frutas de la estacion: $5.000
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlfor="flexRadioDefault2">
                        Flores: $5.000
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlfor="flexRadioDefault3">
                        Unicornio: $8.000
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlfor="flexRadioDefault4">
                        Number Cake o Letter Cake: $8.000
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlfor="flexRadioDefault5">
                        Sirena: $6.000
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlfor="flexRadioDefault6">
                        Decoracion simple
                    </label>
                </div>
                <br></br>
                <span>Comentarios extra:</span>
                <div className="input-group">
                    <textarea class="form-control" aria-label="With textarea" defaultValue={""} />
                </div>
                <form action="../../form-result.php" method="post" encType="multipart/form-data" target="_blank">
                <br></br>
                    <p>
                        Aqui puedes subir imagenes de referencia:
                        <br/>
                        <br/>
                        <input type="file" name="imagensubida" accept="image/png, .jpeg, .jpg, image/gif" />
                    </p>
                </form>
                <p className="new-line">¿Deseas añadir algo mas?</p>
                <div className="input-group mb-3">
                    <select class="form-select" id="inputGroupSelect04">
                        <option selected>Elegir...</option>
                        <option value={1}>Cupcakes y mini Cupcakes</option>
                        <option value={2}>Donuts, galletas o popcakes</option>
                        <option value={3}>No</option>
                    </select>
                </div>
                <br></br>
                <div id="botones">
                    <button type="button" class="btn btn-outline-danger">Cancelar</button>
                    <button type="button" class="btn btn-outline-dark">Atrás</button>
                    <button type="button" class="btn btn-outline-dark"onClick = {handleOnClick}>Siguiente</button>
                </div>
            </section>
        </div>

    );

};

export default EditarProducto;