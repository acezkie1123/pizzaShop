import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }} >
      <div className='headerContainer'>
        <h1> Ace's Pizza Shop</h1>
        <p> Pizza To Fit Your Taste</p>
        <Link to="/menu">
          <button> ORDER NOW!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home