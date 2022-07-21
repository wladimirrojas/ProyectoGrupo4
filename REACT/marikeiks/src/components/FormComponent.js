import React from "react";

const FormComponent = () =>{
    return(
        <div className="row-2">
        <div id="cinco" className="titulos col" >¿Necesitas ayuda? </div>

<div className="container-fluid d-flex justify-content-center vertical col">
<div id="seis" className=" row" >
    <div>
        <div className="seis-1 col" >
            <br></br>
            <div className="subTitulos">Marikeiks</div>
            <div className="parrafos fs-5">
                <ul className="list-unstyled">
                    <strong>
                    <li >Av. Consistorial 5778</li>
                    <li >Santiago, Peñalolén</li>
                    <li >Lun-Sáb 9:00 - 18:00</li>
                    <div style={{alignContent: 'center'}}>
                        <img id="img-logo-bottom" style={{marginLeft:'100px'}} src={require('../img/marikeiks logo 2.png')} alt="logo"/>
                    </div>
                    <li >sólo con visita agendada</li>
                    </strong>
                </ul>
            </div>

        </div>
        <div className="seis-2 col">
            <div className="titulos fs-1 text-center">¿Cómo podemos ayudarte?</div>
            <br />
            <div className="parrafos fs-4">
                <div className="row">
                    <div className="mb-3 col">
                        <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                        <input className="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
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
                    <label for="exampleFormControlTextarea1" className="form-label">Escribenos, nuestra atención es la mejor</label>
                    <textarea placeholder="Escribenos, nuestra atención es la mejor" className="form-control" id="exampleFormControlTextarea1" rows="3">
                    </textarea>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-outline-info parrafos">Enviar</button>
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