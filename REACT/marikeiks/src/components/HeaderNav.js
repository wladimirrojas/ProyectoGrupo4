import React from 'react';
import '../styles/estilosHeader.css'
import logo1 from '../img/logo1.png';

const HeaderNav = () => {
    return (
        <header>
    <a href="/" className="logo">
        <img src={logo1} alt="logo de empresa"/>
        <h2 className="nombre-marikeiks"></h2>
    </a>
    <nav className='nav'> 
        <a href="/" className="nav-link">Inicio</a>
        <a href="/productos" className="nav-link">Productos</a>
        <a href="/carrito" className="nav-link">Carrito</a>
        <a href="/faq" className="nav-link">Faq</a>
        <a href="/contacto" className="nav-link">Contacto</a>
    </nav>
    </header>

    );
};

export default HeaderNav;