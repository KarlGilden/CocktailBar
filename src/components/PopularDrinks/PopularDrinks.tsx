import React, { useEffect, useState } from 'react'
import { getDrinks } from '../../api/GetDrinks'

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
        <h1 className='text-3xl font-poppins'>Popular Drinks</h1>
        <div>
            {drinks?.map((value:any)=>{
                return (
                    <h3 key={value.idDrink}>{value.strDrink}</h3>
                )
            })}

        </div>
    </div>
  )
}

export default PopularDrinks