import React from 'react'
import { useNavigate } from 'react-router-dom'

const ImputSearch = () => {

  const navigate = useNavigate()
  //Capturando valor de formulario para ir a esa ruta
  const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form className='pokedex__form' onSubmit={submit}>
      <input className='pokedext__input-search' id='search' type="text" placeholder='Search a pokemon' />
      <button className='btn-search'>Search</button>
    </form>
  )
}

export default ImputSearch