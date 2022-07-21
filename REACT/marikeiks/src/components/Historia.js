import React,{useCallback} from 'react';
import TituloHistoria from './TituloHistoria';
import {CuerpoHistoria, ImagenesHistoria} from './CuerpoHistoria';
import SloganHistoria from './SloganHistoria';
import {useNavigate} from 'react-router-dom';

const Historia = () => {
    
        const navigate = useNavigate();
        const handleOnClick = useCallback(()=> navigate('/productos', {replace:true}, [navigate]))

        return (
        <div className="contenedorHistoria">
            <div className="row">
            <TituloHistoria/>
            <hr/>
            <div className="row justify-content-center">
            <CuerpoHistoria/>
            <ImagenesHistoria/>
            </div>
            </div>
            <SloganHistoria/>
            <button type='button' className='btn btn-outline-primary me-2' onClick={handleOnClick}>Ir a tortas</button>
        </div>    

    );  
};

export default Historia;