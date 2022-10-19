import React from 'react'
import { useNavigate } from 'react-router-dom'
import useApiAxios from '../../hooks/useApiAxios'
import '../../assets/styles/cardpoke.css'

const CardPoke = ({ url }) => {

  const { response, } = useApiAxios({ url: `${url}` })

  const navigate = useNavigate()
  let id = response?.id

  const handleClick = () => {
    navigate(`/pokedex/${id}`)
  }
  return (
    <article className={`card-poke border-${response?.types[0].type.name}`} onClick={handleClick}>
      <header className={`card-poke__header bg-${response?.types[0].type.name}`}>
        <img className='card__poke-sprite' src={response?.sprites.other['official-artwork'].front_default} alt={response?.name} />
      </header>
      <section className="card-poke__body">
        <h3 className={`card-poke__name letter-${response?.types[0].type.name}`}>
          {response?.name}
        </h3>
        <ul className="card-poke__types-container">
          {
            response?.types.map(type => (
              <li key={type.slot} className="card-poke__type">
                {type.type.name}
              </li>
            ))
          }
        </ul>
        <p className="card-poke__type-label">Type</p>
        <ul className="card-poke__stats-container">
          {
            response?.stats.map(stat => (
              <li key={stat.stat.name} className='card-poke-stat' >
                <span className='card-poke__stat-label'>{stat.stat.name}</span>
                <span className={`card-poke-number letter-${response?.types[0].type.name}`}> {stat.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default CardPoke