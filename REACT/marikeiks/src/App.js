import React from 'react';
<<<<<<< HEAD
// import Inicio from './components/Inicio';
// import ProductoListado from './components/ProductoListado';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
=======
import Inicio from './components/Inicio';
import ProductoListado from './components/ProductoListado';
import Faq from './components/Faq';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
>>>>>>> main

import CarritoUsuarioComponent from './testing/CarritoUsuarioComponent';

const App = () => {
  return (
<<<<<<< HEAD
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Inicio/>}></Route>
    //   <Route path='/productos' element={<ProductoListado/>}></Route>
    // </Routes>
    // </BrowserRouter>
    <CarritoUsuarioComponent/>
=======
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/productos' element={<ProductoListado/>}></Route>
      <Route path='/faq' element={<Faq/>}></Route>
    </Routes>
    </BrowserRouter>
>>>>>>> main
  );
};

export default App;