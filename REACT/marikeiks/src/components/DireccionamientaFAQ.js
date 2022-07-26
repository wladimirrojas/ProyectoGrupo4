import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const DireccionamientoFAQ = () => {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/faq', { replace: true }, [navigate]))

    return (
        <div id="contenedor-FAQ" className='container-fluid text-center'>
            <div className="col">
                <p>Nuestras pedidos requieren un mínimo de 7 días de anticipación. Para obtener más información, lea nuestras preguntas frecuentes. </p>
                <br />
                <div className="col">
                    <button type='button' className='btn btn-outline-dark' onClick={handleOnClick}>Ir a preguntas frecuentes</button>
                </div>
            </div>
        </div>
    );
};

export default DireccionamientoFAQ;