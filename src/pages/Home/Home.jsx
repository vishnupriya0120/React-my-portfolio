import React from 'react'
import Navbar from '../Header/Navbar'
import  "./home.scss"

function Home() {
  return (
    <div className='home'>
      <Navbar/>
        <div className='home-content'>
          <h2>HELLO MY NAME IS</h2>
          <h1>VISHNUPRIYA.</h1>
          <p>Creative UI/UX Developer Based in india</p>
          <button type='button'>Button</button>
        </div>
    </div>
  )
}

export default Home

