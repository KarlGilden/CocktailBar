import React from 'react'

interface IProps{
    text:string,
    secondary:boolean,
    func: ()=>void
}

const HeroButton = ({text, secondary, func}:IProps) => {
  return (
    <button onClick={()=>{func()}} className={`p-6 z-1 text-2xl font-poppins ${secondary ? 'border-[5px] border-l-primary border-b-primary border-r-secondary border-t-secondary transition-all' : 'bg-gradient-to-r'} hover:bg-gradient-to-r transition-all from-secondary to-primary rounded-sm w-full h-[85px] first:mb-[25px] sm:first:mb-0 sm:mr-5 sm:w-[300px]`}>{text}</button>
  )
}

export default HeroButton