import React from 'react'

interface IProps{
    drink: any
}

const DrinkPreview = ({drink}:IProps) => {
  return (
    <div className='sm:flex sm:justify-between sm:w-[500px]'>
        <div>
            <h1 className='text-4xl my-2'>{drink.strDrink}</h1>
            <p className='my-1 italic'>{drink.strIngredient1}</p>
            <p className='my-1 italic'>{drink.strIngredient2}</p>
            <p className='my-1 italic'>{drink.strIngredient3}</p>
        </div>

        <img className='w-[200px] my-3' src={drink.strDrinkThumb} alt="Unavailable" />
    </div>
  )
}

export default DrinkPreview