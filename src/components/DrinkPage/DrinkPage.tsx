import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDrinks } from '../../api/GetDrinks'

const DrinkPage = () => {

    let {id} = useParams<any>()

    const [drink, setDrink] = useState<any>("")
    useEffect(()=>{
        getData()
    })

    const getData = async () => {
        const data =  await getDrinks('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id)
        console.log(data)
        setDrink(data.drinks[0])
    
    }

  return (
    <div className='w-full min-h-[70vh] px-[5%] py-5 sm:flex'>

        <img className='w-[100%] sm:w-[300px] sm:h-[300px] md:w-[300px] sm:mr-5' src={drink?.strDrinkThumb} alt="" />

        <div>
            <h1 className='text-3xl'>{drink?.strDrink}</h1>
            <br />
            <p><i>{drink?.strMeasure1}</i> {drink?.strIngredient1}</p>
            <p><i>{drink?.strMeasure2}</i> {drink?.strIngredient2}</p>
            <p><i>{drink?.strMeasure3}</i> {drink?.strIngredient3}</p>
            <p><i>{drink?.strMeasure4}</i> {drink?.strIngredient4}</p>
            <p><i>{drink?.strMeasure5}</i> {drink?.strIngredient5}</p>
            <p><i>{drink?.strMeasure6}</i> {drink?.strIngredient6}</p>
            <p><i>{drink?.strMeasure7}</i> {drink?.strIngredient7}</p>
            <br />
            <p>{drink?.strInstructions}</p>
        </div>

    </div>
  )
}

export default DrinkPage