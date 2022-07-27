import React from 'react';
import Inicio from './components/Inicio';
//por comentario los siguientes 3 para la prueba 
import ProductoListado from './components/ProductoListado';
import Faq from './components/Faq';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
<<<<<<< HEAD

//import CarritoUsuarioComponent from './testing/CarritoUsuarioComponent';


=======
import EditarTComponent from './components/EditarTComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ContactoPagina from './components/ContactoPagina';
>>>>>>> main

const App = () => {
  return (
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/productos' element={<ProductoListado/>}></Route>
      <Route path='/faq' element={<Faq/>}></Route>
      <Route path='/productos/editarorden' element={<EditarTComponent/>}></Route>
      <Route path='/contacto' element={<ContactoPagina/>}></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
<<<<<<< HEAD
    //<CarritoUsuarioComponent/>
=======
>>>>>>> main
  );
};

export default App;