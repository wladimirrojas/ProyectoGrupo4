import React from 'react';
import TituloHistoria from './TituloHistoria';
import {CuerpoHistoria, ImagenesHistoria} from './CuerpoHistoria';



const Historia = () => {
    return (
        <div className="contenedorHistoria">
            <div className="row justify-content-center">
            <TituloHistoria/>
            <div className="row justify-content-center">
            <CuerpoHistoria/>
            <ImagenesHistoria/>
            </div>
            </div>
        </div>    
    );  
};

export default Historia;