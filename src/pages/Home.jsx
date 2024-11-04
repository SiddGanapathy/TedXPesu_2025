import React from 'react'
import LandingPage from './LandingPage'
import Speakers from '../components/Speakers'
import About from '../components/About'
import Tickets from '../components/Tickets'
import Footer from '../components/Footer'
import Header from './Header'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='bg'>
        <div className="land">
        <Header/>
        <LandingPage/>
        </div>
        <Speakers/>
        <About/>
        <Tickets/>
        <Footer/>
    </div>
  )
}

export default Home