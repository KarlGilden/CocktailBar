import React from 'react'
import MenuButton from '../MenuButton/MenuButton'

interface IProps{
    drink: any
}

const DrinkPreview = ({drink}:IProps) => {
  return (
    <div className='flex flex-col items-center text-center sm:flex-row sm:justify-between sm:w-full sm:max-w-[800px]  mb-[100px] sm:even:flex-row-reverse sm:odd:flex-row'>
            <img className='w-[200px]' src={drink.strDrinkThumb} alt="Unavailable" />
            <div className='w-full'>
              <h1 className='text-4xl my-5'>{drink.strDrink}</h1>
              <MenuButton text="See Recipe"/>
            </div>

    </div>
  )
}

export default DrinkPreview