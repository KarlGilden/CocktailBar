import React, { useState } from 'react'
import Logo from '../../images/Cocktail-logo.svg'
import {BiMenuAltRight} from 'react-icons/bi'
import {GrFormClose} from 'react-icons/gr'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className='w-screen bg-white flex items-center justify-between px-5 py-5 sm:px-10 sm:justify-start'>

        {/* Logo */}
        <div className='flex items-center mr-6'>
            <img className='w-[50px] 2xl:w-[75px]' src={Logo} alt="" />
            <p className='text-2xl font-logo 2xl:text-4xl'>Cocktail Bar</p>
        </div>

        {/* Menu Button */}
        <div className='block sm:hidden'>
            <BiMenuAltRight onClick={()=>{setMenuOpen(!menuOpen)}} className='text-5xl'/>
        </div>

        {/* Links */}
        <div className='hidden sm:flex'>
            <div className='mr-6'>
                <a className='text-black text-1xl 2xl:text-3xl' href="">Home</a>
            </div>
            <div className='mr-6'>
                <a className='text-black text-1xl 2xl:text-3xl' href="">Cocktails</a>
            </div>
        </div>

        {/* Mobile Menu */}
        <div className={` absolute ${menuOpen ? 'left-0 top-0' : 'left-[-10000px] '} w-screen h-screen bg-white p-5 transition-all ease-in-out delay-300`}>
            <div className='w-screen '>
                <GrFormClose onClick={()=>{setMenuOpen(!menuOpen)}} className='text-5xl'/>
            </div>
            <div className='p-6 flex justify-center'>
                <a className='text-black text-1xl 2xl:text-3xl' href="">Home</a>
            </div>
            <div className='p-6 flex justify-center'>
                <a className='text-black text-1xl 2xl:text-3xl' href="">Cocktails</a>
            </div>
        </div>

    </nav>
  )
}

export default Navbar