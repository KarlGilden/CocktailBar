import React from 'react'
import HeroButton from '../Buttons/HeroButton/HeroButton'
import Logo from '../../images/Cocktail-logo.svg'
const Hero = () => {
  return (
    <div className='h-[550px] sm:h-[400px] px-10 py-5 sm:px-20 font-poppins flex flex-col justify-between items-center sm:items-start relative overflow-hidden'>
        <h1 className='text-[#278281] text-5xl sm:text-6xl font-bold lg:w-[65%]'>The best cocktail recipes to liven up <span className='text-[#F4607F]'>your next event</span></h1>
          <div className='sm:flex'>
            <HeroButton secondary={false} text="See whats on offer"/>
            <HeroButton secondary={true} text="Random drink"/>
          </div>
          <img className='w-[150px] absolute right-[-10px] bottom-[125px] sm:w-[175px] sm:right-[25px] sm:bottom-[1.25rem] md:right-[75px] md:w-[200px] lg:w-[350px] lg:right-[100px]' src={Logo} alt=""  />
    </div>
  )
}

export default Hero