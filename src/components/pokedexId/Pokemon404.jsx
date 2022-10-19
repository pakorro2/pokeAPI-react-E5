import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/pokemon-404.css'

const Pokemon404 = () => {
  return (
    <div className='content_404'>
      <h2 className='title__404'>Pokemon not found 😥</h2>
      <img className='img__404' src="/img/error-404.gif" alt="error" />
      <Link className='link__return' to='/pokedex'>⬅ Return to pokedex and try again</Link>
    </div>
  )
}

export default Pokemon404