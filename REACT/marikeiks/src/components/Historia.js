import React from 'react';
import TituloHistoria from './TituloHistoria';
import {CuerpoHistoria, ImagenesHistoria} from './CuerpoHistoria';
import SloganHistoria from './SloganHistoria';

const Historia = () => {
    return (
        <div className="container-fluid">
            <div className="row">
            <TituloHistoria/>
            <hr/>
            <div className="row justify-content-center">
            <CuerpoHistoria/>
            <ImagenesHistoria/>
            </div>
            </div>
            <SloganHistoria/>
        </div>    

    );  
};

export default Historia;