import React from "react";

const FormComponent = () => {
    return (
        <div className="row-col">
            <div className="container-fluid d-flex justify-content-center pt-5">
                <div id="seis" className="row" >
                    <div>
                        <div className="seis-2 col-12">
                            <div id="tituloFormulario" className="fs-1 text-center">¿Cómo podemos ayudarte?</div>
                            <br />
                            <div className="parrafos fs-4">
                                <div className="row">
                                    <div className="mb-3 col">
                                        <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                                        <input className="form-control" id="exampleFormControlInput1" placeholder="Nombre" required/>
                                    </div>
                                    <div className="mb-3 fs-4 col">
                                        <label label for="exampleFormControlInput1" className="form-label">Apellido</label>
                                        <input className="form-control" id="exampleFormControlInput2" placeholder="Apellido" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col">
                                        <label for="exampleFormControlInput2" className="form-label">Correo</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="correo@email.com" />
                                    </div>
                                    <div className="mb-3 col">
                                        <label for="exampleFormControlInput2" className="form-label">Teléfono</label>
                                        <input type="tel" className="form-control" id="exampleFormControlInput3" placeholder="(9) 1234 5678" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Escríbenos, nuestra atención es la mejor</label>
                                    <textarea placeholder="Escribenos, nuestra atención es la mejor" className="form-control" id="exampleFormControlTextarea1" rows="3">
                                    </textarea>
                                </div>

                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button type="button" className="btn btn-outline-dark parrafos">Enviar</button>
                                    <div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;