import React from 'react';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='box-border'>
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  );
}

export default App;
