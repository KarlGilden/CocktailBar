import React from 'react'
import MenuButton from '../MenuButton/MenuButton'

interface IProps{
    drink: any
}

const DrinkPreview = ({drink}:IProps) => {
  return (
    <div className='flex flex-col items-center text-center sm:odd:text-right sm:even:text-left sm:flex-row sm:justify-between sm:w-full sm:max-w-[700px] 2xl:max-w-[800px] mb-[100px]  sm:mb-[150px] sm:even:flex-row-reverse sm:odd:flex-row'>
            <img className='w-[200px]' src={drink.strDrinkThumb} alt="Unavailable" />
            <div className='w-full'>
              <h1 className='text-4xl md:text-5xl my-5'>{drink.strDrink}</h1>
              <MenuButton text="See Recipe"/>
            </div>

    </div>
  )
}

export default DrinkPreview