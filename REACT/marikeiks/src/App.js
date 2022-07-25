import React from 'react';
import Inicio from './components/Inicio';
//por comentario los siguientes 3 para la prueba 
import ProductoListado from './components/ProductoListado';
import Faq from './components/Faq';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import CarritoUsuarioComponent from './testing/CarritoUsuarioComponent';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/productos' element={<ProductoListado/>}></Route>
      <Route path='/faq' element={<Faq/>}></Route>
    </Routes>
    </BrowserRouter>
    //<CarritoUsuarioComponent/>
  );
};

export default App;