import React from 'react';
import Logo from '../assets/tedxpesu-logo-white.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header-main" id='header'>
        <div className="header">
          <img src={Logo} alt="" className='ted-logo'/>
          <div className="items">
            <ul className='list-items'>
              <li className='list-home'><a href="/">Home</a></li>
              <li className='list-about'><a href="#about">About</a></li>
              <li className='list-speakers'><a href="#speakers">Speakers</a></li>
              <li className='list-team'><a href="/team">Team</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Header