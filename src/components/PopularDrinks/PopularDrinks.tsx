import React, { useEffect, useState } from 'react'
import { getDrinks } from '../../api/GetDrinks'
import DrinkPreview from '../DrinkPreview/DrinkPreview'

const PopularDrinks = () => {  

    const [drinks, setDrinks] = useState<any>()

    useEffect(()=>{
        getData()
    },[])

    const getData = async () => {
        const d = await getDrinks('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setDrinks(d.drinks)
        console.log(d)
    }

  return (
    <div className='w-[100%] h-[100vh] px-10 py-10'>
        <h1 className='text-5xl font-poppins mb-[50px]'>Popular Drinks</h1>
        <div className='box-border sm:flex sm:justify-center'>
            {drinks?.map((value:any)=>{
                return (
                    <DrinkPreview key={value.idDrink} drink={value}/>
                )
            })}

        </div>
    </div>
  )
}

export default PopularDrinks