import React from 'react';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import PopularDrinks from './components/PopularDrinks/PopularDrinks';

function App() {
  return (
    <div className='box-border'>
        <Navbar/>
        <Hero/>
        <PopularDrinks/>
        <Footer/>

    </div>
  );
}

export default App;
