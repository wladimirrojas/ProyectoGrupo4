import React from "react";

const FormComponent = () => {
    return (
        <div id="contenedor-formulario" className="row justify-content-center pb-5">
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10">
                    <div id="tituloFormulario" className="fs-1 text-center">¿Cómo podemos ayudarte?</div>
                    <br/>
                    <div className="container col-xl-10 col-lg-10 col-md-10 col-sm-10">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                            <input className="form-control" id="exampleFormControlInput1" placeholder="Nombre" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Apellido</label>
                            <input className="form-control" id="exampleFormControlInput2" placeholder="Apellido" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="validationDefaultCorreo" className="form-label">Correo</label>
                        <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>    
                        <input type="text" className="form-control" id="validationDefaultCorreo" aria-describedby="inputGroupPrepend2" placeholder="correo@gmail.com" required/>
                        </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" id="exampleFormControlInput3" placeholder="(9) 1234 5678" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Escríbenos, nuestra atención es la mejor</label>
                            <textarea placeholder="¿Cómo te ayudamos?" className="form-control" id="exampleFormControlTextarea1" rows="4" required>
                            </textarea>
                        </div>
                        <div className="d-grid gap-2 justify-content-md-end mb-5">
                            <button type="submit" className="btn btn-outline-dark">Enviar</button>
                        </div>
                    </form>
                    </div>
                </div>

        </div >
    );
};

export default FormComponent;