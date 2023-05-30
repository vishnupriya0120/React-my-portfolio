import React from 'react'
import  "./home.scss"
import Navbar from '../Header/Navbar';
function Home() {
  return (
    <div className='home'>
      <Navbar/>
        <div className='home-content'>
          <h2>HELLO MY NAME IS</h2>
          <h1>VISHNUPRIYA.</h1>
          <p>Creative UI/UX Developer Based in india</p>
        </div>
    </div>
  )
}

export default Home

