import React from 'react'
import '../../assets/styles/pagination.css'

const Pagination = ({ page, pagesLength, setPage, setPokePerPage }) => {

  const pagesPerBlock = 6
  const currentBlock = Math.ceil(page / pagesPerBlock)
  const blockLength = Math.ceil(pagesLength / pagesPerBlock)

  const arrPages = []
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1
  const limitePage = currentBlock === blockLength ? pagesLength : currentBlock * pagesPerBlock


  for (let i = initialPage; i <= limitePage; i++) {
    arrPages.push(i)
  }

  const handlePrev = () => {
    setPage(page - 1)
  }
  const handleNext = () => {
    setPage(page + 1)
  }
  const handlePage = currentPage => {
    setPage(currentPage)
  }
  const handlePokeXPage = e => {
    setPokePerPage(e.target.value)
  }


  return (
    <div className='pagination'>
      <select className='pokedex__select' onChange={handlePokeXPage} id="type-select">
        <option key='default' value='8'>Select items per page</option>
        <option key='4' value='4'>4</option>
        <option key='8' value='8'>8</option>
        <option key='12' value='12'>12</option>
        <option key='16' value='16'>16</option>
        <option key='20' value='20'>20</option>
      </select>
      {
        page > 1 &&
        <div onClick={handlePrev} className='pagination__prev pagination__active'>◀</div>
      }
      {
        currentBlock > 1 &&
        <div>...</div>
      }
      <ul className='pagination__list'>
        {
          arrPages.map(e => (

            <li className={`pagination__page ${page == e && 'pagination__active'}`}
              onClick={() => handlePage(e)}
              key={e}>{e}</li>
          ))
        }
      </ul>
      {
        currentBlock < blockLength &&
        <div>...</div>
      }
      {
        page < pagesLength &&
        <div onClick={handleNext} className='pagination__next pagination__active'>▶</div>
      }
    </div>
  )
}

export default Pagination