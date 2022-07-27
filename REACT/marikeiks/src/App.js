import React from 'react';
import Inicio from './components/Inicio';
import ProductoListado from './components/ProductoListado';
import Faq from './components/Faq';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditarTComponent from './components/EditarTComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ContactoPagina from './components/ContactoPagina';
import CarritoComponent from './components/CarritoComponent';

const App = () => {
  return (
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/productos' element={<ProductoListado/>}></Route>
      <Route path='/faq' element={<Faq/>}></Route>
      <Route path='/productos/editarorden' element={<EditarTComponent/>}></Route>
      <Route path='/productos/editarorden/carrito' element={<CarritoComponent/>}></Route>
      <Route path='/contacto' element={<ContactoPagina/>}></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
  );
};

export default App;