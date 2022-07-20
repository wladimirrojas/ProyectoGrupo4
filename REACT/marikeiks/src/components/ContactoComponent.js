import React from "react";
import '../styles/Contacto.css';

<<<<<<< HEAD
const CotactoComponent = () => {
    return (
        <div>
            <div id="uno"></div>
            <div id="dos" className="titulos">Contacto</div>

            <div id="tres">
                <div className="row-col-2 tres-1">
                    <div className="row mx-5 ">
                        <div className="col-3 "><img className="rounded" height="200" width="170" src="assets/img/contacto3.jpg" alt="3" /></div>
                        <div className="col-3 mx-5"><img className="rounded" height="200" width="170" src="assets/img/contacto.jpg" alt="0" /></div>
                        <div className="col-3"><img className="rounded" height="200" width="170" src="assets/img/contacto1.jpg" alt="1" /></div>
                    </div>
                    <div className="mapa row-col mt-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.7224664369787!2d-70.55837837333792!3d-33.50859714632189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d1a3a8c249e1%3A0x54b1c2be80b9fa2d!2sAv.%20Consistorial%205778%2C%20Penalolen%2C%20Pe%C3%B1alol%C3%A9n%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1657576944559!5m2!1ses!2scl"
                            width="700px" height="300px" style="border-radius: 5px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="row tres-2">
                    <div>
                        <ul className="list-unstyled mb-0">
                            <h2 className="titulos">Dirección</h2>
                            <div className="fs-6">
                                <strong>
                                    <li className="parrafos">Av. Consistorial 5778</li>
                                    <li className="parrafos">Santiago, Peñalolén</li>
                                    <li className="parrafos">Retiro: Lun-Sáb <br></br> 9:00 - 18:00</li>
                                </strong>
                            </div>
                        </ul>
                    </div>
                    <div className="parrafos">
                        <ul className="list-unstyled">
                            <li>
                                <br></br>
                                <strong><h5>Retiros con cita previa, agenda con nosotros</h5></strong>
                                <a href="mailto:marikeiks@gmail.com">
                                    <div className="contenedorIcono">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                        </svg>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5"><h5>llamanos al momento de llegada</h5></div>
                        <a href="https://api.whatsapp.com/send?phone=56974898201">
                            <div className="contenedorIcono">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <br></br>

                </div>
            </div>

            <div id="cinco" className="titulos fs-1" >¿Necesitas ayuda?</div>

            <div id="seis">
                <div>
                    <div className="seis-1" style="position: absolute; top: 150px;">
                        <br></br>
                        <div className="titulos fs-1">Marikeiks</div>
                        <div className="parrafos fs-5"> Nuestro local
                            <ul className="list-unstyled">
                                <strong>
                                <li >Av. Consistorial 5778</li>
                                <li >Santiago, Peñalolén</li>
                                <li >Lun-Sáb 9:00 - 18:00</li>
                                <div style="align-content: center;">
                                    <a href="/index.html"> <HTMLImageElement id="img-logo-bottom" style="margin-left:100px;" src="assets/img/marikeiks logo 2.png" alt="logo" title="Ir a inicio" /></a>
                                </div>
                                <li >Retiro sólo con visita agendada</li>
                                </strong>
                            </ul>
                        </div>

                    </div>
                    <div className="seis-2 col" style="position: absolute; top: 40px;">
                        <div className="titulos fs-1 text-center">¿Cómo podemos ayudarte?</div>
                        <br />
                        <div className="parrafos fs-4">
                            <div className="row">
                                <div className="mb-3 col">
                                    <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                                    <HTMLInputElement className="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
                                </div>
                                <div className="mb-3 fs-4 col">
                                    <label label for="exampleFormControlInput1" className="form-label">Apellido</label>
                                    <HTMLInputElement className="form-control" id="exampleFormControlInput2" placeholder="Apellido" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="mb-3 col">
                                    <label for="exampleFormControlInput2" className="form-label">Correo</label>
                                    <HTMLInputElement type="email" className="form-control" id="exampleFormControlInput3" placeholder="correo@email.com" />
                                </div>
                                <div className="mb-3 col">
                                    <label for="exampleFormControlInput2" className="form-label">Teléfono</label>
                                    <HTMLInputElement type="tel" className="form-control" id="exampleFormControlInput3" placeholder="(9) 1234 5678" />
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
            )}
=======
const ContactoComponent = () =>{
    return(
''
    );
};
>>>>>>> main

export default ContactoComponent;