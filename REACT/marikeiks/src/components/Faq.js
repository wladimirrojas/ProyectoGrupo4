import React from "react";
import foto3 from '../img/faq.jpg';
import '../styles/FAQ.css';

const Faq = () => {
    return (
        <div className="container-fluid justify-content-center inicio">
            <div className="row">
            <div className='col-12 pt-5'>
            <h1 id='titulofaq'>Preguntas frecuentes</h1>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-10 col-5 mb-5 mt-5 mx-5">
                    <img src={foto3} className="img-thumbnail" alt="foto ejemplo" />
                </div>
                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-10  mb-5 mt-5 accordion accordion-flush pt-5 pb-5" id="accordionFlushExample" >
                    <div className="accordion-item bg-transparent border border-dark rounded-3 mb-3">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                ¿Cuentan con servicio de delivery?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-faq">
                                Despachos dentro de Santiago para tortas pequeñas y hasta la V región:
                                <ul>
                                <li>Valores dentro de santiago por la empresa externa:
                                RAINAW delivery, desde los $5.000 a $7.000</li>
                                <li>Valores de despacho de matrimonios, desde los $15.000
                                (El valor depende del tamaño de la torta y la complejidad del delivery).</li>
                                <li>Existe despacho y retiro en la comuna de peñalolen, desde el taller de Marikeiks.</li>
                                </ul>
                                <b>Retiro de pedidos:</b>
                                <br />
                                De Martes a Sábado.
                                <br />
                                Horario:
                                <br />
                                11:00 -18:00 hrs.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-transparent border border-dark rounded-3 mb-3">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                ¿Con cuánta antelación debo reservar mi pedido?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-faq">
                                Nuestras pedidos requieren un mínimo de 7 días de anticipación.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-transparent border border-dark rounded-3 mb-3">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                ¿Cómo funciona el tamaño de las porciones?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-faq">Existen valores base para las tortas, dependiendo de la cantidad de porciones (1 porción por persona):
                                <br />
                                <ul>
                                    <li>10 personas: $23.500. </li>
                                    <li>15 personas: $35.250. </li>
                                    <li>20 personas: $47.000. </li>
                                    <li>25 personas: $58.750. </li>
                                    <li>30 personas: $70.500. </li>
                                    <li>+ de 35 personas: $2.500 por porción. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-transparent border border-dark rounded-3 mb-3">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                ¿Cómo es su sistema de cambios y cancelaciones?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-faq">
                                No se realiza devolución de dinero luego de finalizar la compra en nuestra página web.
                                En caso de querer cambiar la fecha de entrega, se debe avisar con 4 días de anticipación.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-transparent border border-dark rounded-3 mb-3">
                        <h2 className="accordion-header" id="flush-heading-Five">
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                ¿Tienen cursos de pastelería?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-heading-Five" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-faq">
                                Si, tenemos 3 talleres disponibles.
                                <br />
                                Son talleres presenciales de máximo 3 personas, se deben agendar con 2 semanas de anticipación.
                                Uno de estos talleres es previo a Halloween.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-transparent border border-dark rounded-3 mb-3">
                        <h2 className="accordion-header" id="flush-heading-Six">
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                ¿Tienen pasteles personalizados para eventos?
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-heading-Six" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-faq">
                                Si. contamos con servicio de pasteles personalizados para eventos.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    ;
}
export default Faq;