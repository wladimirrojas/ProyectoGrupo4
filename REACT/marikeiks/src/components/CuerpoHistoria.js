import React from 'react';
import foto1 from '../img/torta1.png';
import foto2 from '../img/torta2.png';
import foto3 from '../img/torta3.png';
import '../styles/Historia.css'

const CuerpoHistoria = () => {
    return (
        <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 mb-5 mt-5'>
            <h4 id='subtitulo_historia'>¿Cómo fue la creación de Marikeiks?</h4>
            <p className='texto_historia'>
                Marikeiks Bakery empieza en la cocina de la casa, ofreciendo bizcochos húmedos, sabores
                deliciosos y
                diseño personalizado para darle al cliente la experiencia de crear su propio pastel y disfrutar
                cuchareando una deliciosa torta.
                Marieiks Bakery, es una pastelería creada en el 2014 por María José, publicista, soñadora, con
                ganas
                de evolucionar y salir del sistema laboral con su propio proyecto.</p>
            <p className='texto_historia'>
                El despido de una agencia le dio el empuje para crear su propio universo de pasteles, caramelos
                y
                diseño. Cuando este proyecto empezó a crecer y María José adquirió conocimientos en pastelería,
                decoración en azúcar, contabilidad,
                administración de empresas, manejo de redes y atención al cliente dejó de ser un proyecto, se
                convirtió en su life style y ESO es lo que hoy entrega Marikeiks, un estilo de vida y un pastel
                para
                llevar de regalo, para celebrar tu
                cumpleaños, o tu matrimonio, incluso para decirle adiós a un ser amado. </p>
        </div>
    );
};

const ImagenesHistoria = () => {
    return (
        <div id='carouselExampleControls'
            className='carousel slide col-xl-4 col-lg-5 col-md-8 col-sm-8 col-8 mb-5 mt-5'
            data-bs-ride='carousel'>
            <div className='carousel-inner'>
                <div className='carousel-item active' data-bs-interval='2000'>
                    <img id="imagen1c" className='rounded' src={foto1} alt='imagen1'/>
                </div>
                <div className='carousel-item' data-bs-interval='2000'>
                    <img id="imagen2c" className='rounded' src={foto2} alt='imagen2'/>
                </div>
                <div className='carousel-item' data-bs-interval='2000'>
                    <img id="imagen3c" className='rounded' src={foto3} alt='imgen3'/>
                </div>
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls'
                data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControls'
                data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
            );
};

export {CuerpoHistoria, ImagenesHistoria};