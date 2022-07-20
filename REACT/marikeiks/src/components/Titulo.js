import React from 'react';
import adorno1 from './img/adorno.png';
import adorno2 from './img/adorno2.png';

const Titulo = () => {
    return (
        <div className='d-flex justify-content-around col-12 pt-5'>
            <img className='adorno' src={adorno1} />
            <h1 id='titulo_historia'>Nuestra historia</h1>
            <img className='adorno' src={adorno2} />
        </div>
    );
};

export default Titulo;