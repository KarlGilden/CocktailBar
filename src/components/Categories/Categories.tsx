import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <div id="categories" className='w-[100%] px-10 py-10'>
        <h1 className='text-5xl text-center p-5 mb-[50px]'>Categories</h1>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
            <CategoryCard text="Cocktails"/>
            <CategoryCard text="Non-alcoholic"/>
            <CategoryCard text="Beer"/>
            <CategoryCard text="Soothies"/>
            <CategoryCard text="Shots"/>
            <CategoryCard text="Liqueur"/>
        </div>
    </div>
  )
}

export default Categories