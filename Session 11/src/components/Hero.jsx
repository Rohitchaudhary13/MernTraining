import React from 'react'
import girl from '../images/hero.png';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className='container' style={{paddingBottom: '6rem'}}>
        <div className='row-hero'>
            <div className='col-hero'>
                <h1 className='michroma'>I'm Rohit!</h1>
                <h2 className='orbitron'>Web Developer.</h2>
                <p>I'm specialised in nothing!</p>
                <div style={{display: 'flex'}}>
                <button className='btn btn-primary'>Contact Me</button>
                <button className='btn btn-secondary'>About Me</button>
                </div>
            </div>
            <div className='col-hero'>
                <img src={girl} alt="girl" />
            </div>
        </div>
        
    </div>
  )
}

export default Hero