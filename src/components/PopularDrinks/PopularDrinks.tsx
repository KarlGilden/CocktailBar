import React, { useEffect, useState } from 'react'
import { getDrinks } from '../../api/GetDrinks'
import DrinkPreview from '../DrinkPreview/DrinkPreview'
import DrinksList from '../DrinksList/DrinksList'

const PopularDrinks = () => {  



  return (
    <div className='w-[100%] min-h-[100vh] px-10 py-10'>
        <h1 className='text-5xl font-poppins mb-[50px]'>Popular Drinks</h1>
        <div className='box-border sm:flex sm:justify-center'>
            <DrinksList/>

        </div>
    </div>
  )
}

export default PopularDrinks