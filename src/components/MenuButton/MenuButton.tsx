import React from 'react'

interface IProps{
    text:string
}

const MenuButton = ({text}:IProps) => {
  return (
    <button className='p-6 border-2 border-black w-[200px] my-5'>{text}</button>
  )
}

export default MenuButton