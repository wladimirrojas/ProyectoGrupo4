import React from 'react';
import Titulo from './Titulo';
import {Cuerpo, Imagenes} from './Cuerpo';
import Slogan from './Slogan';

const Historia = () => {
    return (
        <div className="container-fluid">
            <div className="row">
            <Titulo/>
            <hr/>
            <div className="row justify-content-center">
            <Cuerpo/>
            <Imagenes/>
            </div>
            </div>
            <Slogan/>
        </div>    

    );  
};

export default Historia;