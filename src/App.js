
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart';
import Header from './component/Header';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path = '/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
