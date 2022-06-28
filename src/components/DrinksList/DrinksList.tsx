import React, { useEffect, useState } from 'react'
import { getDrinks } from '../../api/GetDrinks'
import DrinkPreview from '../DrinkPreview/DrinkPreview'

const DrinksList = () => {

    const [drinks, setDrinks] = useState<any>()

    useEffect(()=>{
        getData()
    },[])

    const getData = async () => {
        const d = await getDrinks('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        setDrinks(d.drinks.slice(1, 10))
    }
    
  return (
    <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
    {drinks?.map((value:any)=>{
        return (
            <DrinkPreview key={value.idDrink} drink={value}/>
        )
    })}
    </div>
  )
}

export default DrinksList