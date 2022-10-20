import React from 'react'
import '../../assets/styles/header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__rectangle-red'></div>
      <div className='header__rectangle-black'></div>
      <div>
        <div><h1>Donde me muestro</h1></div>
      </div>
    </div>
  )
}

export default Header