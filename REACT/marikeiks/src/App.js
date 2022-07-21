import React from 'react';
import Inicio from './components/Inicio';
import ProductoListado from './components/ProductoListado';
import {BrowserRouter, Routes, Route} from 'react-router-dom';




const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/productos' element={<ProductoListado/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;