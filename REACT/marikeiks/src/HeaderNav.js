import React from 'react';
import '../styles/estilosHeader.css'
import logo1 from './img/logo1';

const HeaderNav = () => {
    return (
        <header>
    <a href="#" class="logo">
        <img src={logo1} alt="logo de empresa"/>
        <h2 class="nombre-marikeiks"></h2>
    </a>
    <nav>
        <a href="" class="nav-link">Inicio</a>
        <a href="" class="nav-link">Productos</a>
        <a href="" class="nav-link">Carrito</a>
        <a href="" class="nav-link">Contacto</a>
    </nav>
    </header>

    );
};

export default HeaderNav;