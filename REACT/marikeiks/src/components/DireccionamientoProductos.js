import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

const DireccionamientoProductos = () => {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/productos', { replace: true }, [navigate]))
    
    return (
        <div>
            <div>
                <div className="d-grid gap-2 justify-content-md-end mb-3">
                    <button type='button' className='btn btn-outline-dark' onClick={handleOnClick}>Seguir Comprando</button>
                </div>
            </div>
        </div>
    );
};

export default DireccionamientoProductos;