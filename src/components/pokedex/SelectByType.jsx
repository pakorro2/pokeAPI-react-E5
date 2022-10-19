import React from 'react'

import useApiAxios from '../../hooks/useApiAxios'

const SelectByType = ({ setTypeSelected, setPage }) => {

  const { response } = useApiAxios({ url: 'https://pokeapi.co/api/v2/type' })

  const handleChange = e => {
    setTypeSelected(e.target.value)
    setPage(1)
  }

  return (
    <div className='select__content'>
      <select className='pokedex__select' onChange={handleChange} id="type-select">
        <option value="All pokemons">All Pokemons</option>
        {
          response?.results.map(type => (
            <option key={type.url} value={type.url}>{type.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectByType