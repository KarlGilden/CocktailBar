import React from 'react'

interface IProps{
    text:string
}

const CategoryCard = ({text}:IProps) => {
  return (
    <div className='w-full max-w-[300px] h-[150px] text-center'>
        <div className='w-full h-[80%] bg-gradient-to-r from-[#71C6C4] to-[#f4607f]'>

        </div>
        <h2 className='text-3xl h-20%'>{text}</h2>
    </div>
  )
}

export default CategoryCard