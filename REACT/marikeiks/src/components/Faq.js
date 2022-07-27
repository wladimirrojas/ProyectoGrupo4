import React from "react";
import foto3 from '../img/torta3.png';

const Faq = () => {
    return (
        <div className="contenedor-FAQ p-0">
            <div className="row">
                <div className="col-3" style={{height:'600px'}}>
                    {/* <img alt="foto ejemplo" /> */}
                </div>
                <div className="accordion accordion-flush col-7 me-5 mt-5" id="accordionFlushExample" >
                    <div className="accordion-item bg-transparent border border-info rounded-3">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                ¿Con cuánta antelación debo reservar mi pedido?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Nuestras pedidos requieren un mínimo de 7 días de anticipación.
                                <br />
                                LA RESERVA DE PEDIDO SE HACE CON TRANSFERENCIA DEL 50% DEL VALOR TOTAL.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-transparent border border-info rounded-3">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                ¿Cómo funciona el tamaño de las porciones?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Existen valores base para las tortas, dependiendo de la cantidad de porciones (1 porción por persona):
                                <br />
                                <lu>
                                    <li>10 personas: $23.500 </li>
                                    <li>15 personas: $35.250 </li>
                                    <li>20 personas: $47.000 </li>
                                    <li>25 personas: $58.750 </li>
                                    <li>30 personas: $70.500 </li>
                                    <li>+ de 35 personas: $2.500 por porción </li>
                                </lu>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-transparent border border-info rounded-3">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                ¿Cuál es la mejor manera de transporte?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">

                                Despachos dentro de Santiago para tortas pequeñas y hasta la V región:
                                <br />
                                Valores dentro de santiago por la empresa externa:
                                <br />
                                RAINAW delivery,
                                desde los $5.000 a $7.000
                                <br /><br />
                                valores de despacho de matrimonios, desde los $15.000
                                <br />
                                (El valor depende del tamaño de la torta y la complejidad del delivery).
                                <br /><br />
                                Existe despacho y retiro en la comuna de peñalolen, desde el taller de Marikeiks.
                                <br /><br />
                                Retiro de pedidos:
                                <br />
                                De Martes a Sábado
                                <br /><br />
                                horario:
                                <br />
                                11:00 -18:00 hrs.
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