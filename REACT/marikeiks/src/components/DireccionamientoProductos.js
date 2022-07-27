import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const DireccionamientoProductos = () => {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/productos', { replace: true }, [navigate]))
    
    return (
        <div className='botonComprar'>
            <div className="col-md-6 mt-5 offset-md-3">
                <div className="col-md-6 offset-md-3 mb-5">
                    <button type='button' className='btn btn-outline-dark' onClick={handleOnClick}>Seguir Comprando</button>
                </div>
            </div>
        </div>
    );
};

export default DireccionamientoProductos;