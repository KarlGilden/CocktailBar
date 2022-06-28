import React, { useEffect, useState } from 'react'
import { getDrinks } from '../../api/GetDrinks'
import DrinkPreview from '../DrinkPreview/DrinkPreview'
import DrinksList from '../DrinksList/DrinksList'

const PopularDrinks = () => {  



  return (
    <div className='bg-white w-[100%] min-h-[100vh] px-10 py-10 text-center' >
        <h1 className='text-5xl font-poppins mb-[50px] p-6'>Find the right drink for you</h1>
        <div className='box-border sm:flex sm:justify-center'>
            <DrinksList/>
        </div>
    </div>
  )
}

export default PopularDrinks