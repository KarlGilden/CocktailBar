import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import PopularDrinks from './components/PopularDrinks/PopularDrinks';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>


  );
}

export default App;
