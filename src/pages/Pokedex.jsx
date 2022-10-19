import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import ImputSearch from '../components/pokedex/ImputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import useApiAxios from '../hooks/useApiAxios'
import Loading from './Loading'

const Pokedex = () => {

  const { response, setTypeSelected, isLoading } = useApiAxios({
    URL: 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'
  })
  //Total de pokemon 1126
  const userName = useSelector(state => state.userName)

  //Logica de paginación
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage


  return (
    <div>
      <header className='pokedex__header'>
        <h1 className='pokedex__title'>Pokedex</h1>
        <p className='pokedex__text'>Welcome <span className='pokedex__user-name'>{userName}</span>, hare you con find your favorite pokemon.</p>
      </header>
      <aside className='pokedex__aside'>
        <ImputSearch />
        <SelectByType setTypeSelected={setTypeSelected} setPage={setPage} />
      </aside>
      {
        response?.length !== 0 &&
        <Pagination
          page={page}
          pagesLength={response && Math.ceil(response.length / pokePerPage)}
          setPage={setPage}
          setPokePerPage={setPokePerPage}
        />
      }
      <main>
        <div className="card-container">
          {isLoading ? (
            <Loading />
          ) : (
            response?.slice(initialPoke, finalPoke).map(pokemon => (
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}
              />
            )))
          }
        </div>
      </main>
      {
        response?.length !== 0 &&
        <Pagination
          page={page}
          pagesLength={response && Math.ceil(response.length / pokePerPage)}
          setPage={setPage}
          setPokePerPage={setPokePerPage}
        />
      }
    </div>
  )
}

export default Pokedex