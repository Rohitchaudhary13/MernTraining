import React from 'react'
import main from '../assets/one.jpg'
import '../styles/LandingPage.css'
import Marquee from "react-fast-marquee";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const LandingPage = () => {
  return (
    <div>
      <Navbar />
        <div className='landing-page-img-container'>
            <img src={main} alt="main" className='landing-page-img' />
            <div className='text-over-img'>
              <h1 className='unbounded'>One secure destination for all of your notes</h1>
              <div className='landing-btn-cover'>
                <button className='unbounded primary'>Login</button>
                <button className='unbounded secondary'>SignUp</button>
              </div>
            </div>
        </div>
        <div>
        <Marquee speed={150}>
          <h1 style={{padding: '2rem'}}>React</h1>
          <h1 style={{padding: '2rem'}}>Express</h1>
          <h1 style={{padding: '2rem'}}>NodeJs</h1>
          <h1 style={{padding: '2rem'}}>MongoDB</h1>
          <h1 style={{padding: '2rem'}}>Material UI</h1>
          <h1 style={{padding: '2rem'}}>Framer Motion</h1>
          <h1 style={{padding: '2rem'}}>Bootstrap</h1>
        </Marquee>
        </div>
        <Footer />
    </div>
  )
}

export default LandingPage