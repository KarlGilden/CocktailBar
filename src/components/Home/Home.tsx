import React from 'react'
import Categories from '../Categories/Categories'
import Hero from '../Hero/Hero'
import PopularDrinks from '../PopularDrinks/PopularDrinks'

const Home = () => {
  return (
    <div>
        <Hero/>
        <PopularDrinks/>
        <Categories/>
    </div>
  )
}

export default Home