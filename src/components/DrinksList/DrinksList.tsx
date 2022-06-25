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
    <div className='flex-col'>
    {drinks?.map((value:any)=>{
        return (
            <DrinkPreview key={value.idDrink} drink={value}/>
        )
    })}
    </div>
  )
}

export default DrinksList