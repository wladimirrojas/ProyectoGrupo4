import React
//, {useCallback} 
from "react";
// import {useNavigate} from 'react-router-dom';
// import '../styles/Carrito.css';
// import { useCallback } from 'react';

// const navigate = useNavigate();
// const handleOnClick = useCallback(() => navigate('/productos', { replace: true }, [navigate]))

const TCarritoComponent = () => {
    return (
        <div className="uno">
            <div className="Tcarrito titulos">
                Carrito de Compras
            </div>
            {/* <div className="text-center">
                <div className="col-md-6 offset-md-3">
                    <button type='button' className='btn btn-outline-primary me-2' onClick={handleOnClick}>Seguir comprando </button>
                </div>
            </div> */}
        </div>
    );
};

export default TCarritoComponent;