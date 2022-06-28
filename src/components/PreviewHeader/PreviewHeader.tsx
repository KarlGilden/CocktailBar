import React from 'react'
import MenuButton from '../Buttons/MenuButton/MenuButton'

interface IProps{
    drinkName:string
}

const PreviewHeader = ({drinkName}:IProps) => {
  return (
    <div className='text-center flex flex-col items-center justify-between sm:items-end sm:text-right odd:bg-black sm:odd:items-start'>
    <h1 className='text-4xl my-5'>{drinkName}</h1>
    <MenuButton text="See Recipe"/>
    </div>
  )
}

export default PreviewHeader