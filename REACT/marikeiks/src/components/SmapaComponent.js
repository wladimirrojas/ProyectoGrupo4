import React from "react";

const SmapaComponent = () => {
    return (
        <div className="container-xl mb-5">
            <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 mt-3">
                    <img id="imagenes-map" class="rounded ms-3" src={require("../img/contacto3.jpg")} alt="contacto2" />
                    <img id="imagenes-map" class="rounded ms-3" src={require("../img/contacto.jpg")} alt="contacto" />
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8 mt-3 me-4">
                    <iframe title="mapa_marikeiks" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.7224664369787!2d-70.55837837333792!3d-33.50859714632189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d1a3a8c249e1%3A0x54b1c2be80b9fa2d!2sAv.%20Consistorial%205778%2C%20Penalolen%2C%20Pe%C3%B1alol%C3%A9n%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1657576944559!5m2!1ses!2scl"
                        id="mapa" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>

                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 mt-3 justify-content-center">
                    <div>
                        <ul className="list-unstyled mb-0">
                            <h2 className="subTitulos">Dirección</h2>
                            <div className="fs-6">
                                <strong>
                                    <li className="parrafos">Av. Consistorial 5778</li>
                                    <li className="parrafos">Santiago, Peñalolén</li>
                                    <li className="parrafos">Retiro: Lun-Sáb <br></br> 9:00 - 18:00</li>
                                </strong>
                            </div>
                        </ul>
                    </div>
                    <div className="parrafos mt-5">
                        <h5>Retiros con cita previa, agenda con nosotros</h5>
                        <a href="mailto:marikeiks@gmail.com">
                            <div className="contenedorIcono">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="parrafos mt-5">
                        <h5>Llámanos al momento de llegada</h5>
                        <a href="https://api.whatsapp.com/send?phone=56974898201">
                            <div className="contenedorIcono">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                <br />
            
            </div>
        </div>
    );
};

export default SmapaComponent;