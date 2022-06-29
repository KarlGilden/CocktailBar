import React from 'react'
import { useNavigate } from 'react-router-dom'
import MenuButton from '../Buttons/MenuButton/MenuButton'

interface IProps{
    drink: any
}

const DrinkPreview = ({drink}:IProps) => {
  const navigate = useNavigate()

  const toDrinkPage = () => {
    navigate("/drink/"+drink.idDrink)
  }
  return (
    <div className='w-[300px] h-[300px] relative group'>
            <div className='bg-black absolute w-full h-full'></div>
            <img className='w-full absolute top-0 left-0 group-hover:opacity-30' src={drink.strDrinkThumb} alt="Unavailable" />
            <div className='w-full h-full grid grid-cols-1 justify-items-center content-center absolute'>
              <button onClick={()=>toDrinkPage()} className='hidden group-hover:block hover:bg-black hover:text-white transition w-[50%] h-[50px] text-white border-[4px] border-l-primary border-b-primary border-r-secondary border-t-secondary'>See Recipe</button>
            </div>
    </div>
  )
}

export default DrinkPreview