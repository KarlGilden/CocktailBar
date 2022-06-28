import React from 'react'

interface IProps{
    text:string
}

const MenuButton = ({text}:IProps) => {
  return (
    <button className='p-5 font-button border-2 border-zinc-800 text-2xl hover:text-white hover:bg-zinc-800 w-[200px] my-5'>{text}</button>
  )
}

export default MenuButton