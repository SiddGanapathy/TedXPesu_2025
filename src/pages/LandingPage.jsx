import React from 'react'
import '../styles/LandingPage.css'
import Banner from '../assets/banner.jpg';
import MobileBanner from '../assets/mobile-banner.jpg';

const LandingPage = () => {
  return (
    <div className='landing-main' id='home'>
      <div className="landing">
        <div className="tagline">
          <h4>TEDXPESU Club Presents</h4>
        </div>
        <div className="theme">
          <div className='theme-heading'>
            <h1>Mosaics <br/>of Modernity</h1>
          </div>
          <div className='theme-button'>
            <button className='buy-tickets'><a href="#tickets">Buy Tickets</a></button>
          </div>
        </div>
        <div className="banner">
          <img src={Banner} alt="Desktop Banner" className='banner-img desktop-banner'/>
          <img src={MobileBanner} alt="Mobile Banner" className='banner-img mobile-banner'/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage