import React from 'react';
import Inicio from './components/Inicio';
import ProductoListado from './components/ProductoListado';
import Faq from './components/Faq';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditarTComponent from './components/EditarTComponent';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/productos' element={<ProductoListado/>}></Route>
      <Route path='/faq' element={<Faq/>}></Route>
      <Route path='/productos/editarorden' element={<EditarTComponent/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;