import React from 'react'
import MenuButton from '../Buttons/MenuButton/MenuButton'

interface IProps{
    drink: any
}

const DrinkPreview = ({drink}:IProps) => {
  return (
    <div className='w-[300px] h-[300px] relative group'>
            <div className='bg-black absolute w-full h-full'></div>
            <img className='w-full absolute top-0 left-0 group-hover:opacity-30' src={drink.strDrinkThumb} alt="Unavailable" />
            <div className='w-full h-full grid grid-cols-1 justify-items-center content-center absolute'>
              <button onClick={()=>alert("hello")} className='hidden group-hover:block hover:bg-black transition w-[50%] h-[50px] text-white border-[2px] border-white'>See Recipe</button>
            </div>
    </div>
  )
}

export default DrinkPreview