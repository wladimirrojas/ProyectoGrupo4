import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const DireccionamientoFAQ = () => {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/faq', { replace: true }, [navigate]))

    return (
        <div className='container text-center'>
            <div className="col-md-6 mt-5 offset-md-3">
                <p>Nuestras pedidos requieren un mínimo de 7 días de anticipación. Para obtener más información, lea nuestras preguntas frecuentes. </p>
                <br />
                <div className="col-md-6 offset-md-3 mb-5">
                    <button type='button' className='btn btn-outline-dark' onClick={handleOnClick}>Ir a preguntas frecuentes</button>
                </div>
            </div>
        </div>
    );
};

export default DireccionamientoFAQ;