import React from 'react'
import FormHome from '../components/home/FormHome'
import '../assets/styles/home.css'

const Home = () => {
  return (
    <article className='pokedex'>
      <img src="/img/pokedex.png" alt='logo pokedex' className='pokedex__img' />
      <header className="pokedex__header">
        <h2 className='pokedex__subtitle'>Hi trainer!</h2>
        <p className='pokedex__text'>Give me your name to see the pokemon</p>
      </header>
      <FormHome />
    </article>
  )
}

export default Home