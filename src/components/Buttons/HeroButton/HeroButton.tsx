import React from 'react'

interface IProps{
    text:string
}

const HeroButton = ({text}:IProps) => {
  return (
    <button className='p-6 z-1 text-2xl font-poppins bg-gradient-to-r from-[#f4607f] to-[#71C6C4] rounded-sm w-full h-[85px] sm:w-[300px]'>{text}</button>
  )
}

export default HeroButton