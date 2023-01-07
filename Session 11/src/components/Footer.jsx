import React from 'react'
import logo from '../images/logo-light.svg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
        <div className='container'>
          <div className='row' style={{paddingTop: '5rem', paddingBottom: '5rem'}}>
            <div className='col first'>
              <img src={logo} alt="logo" />
              <p>Learn about Web accessibility, Web performance, and Database management.</p>
            </div>
            <div className='col'>
              <h3>Quick Links</h3>
              <ul>
                <li>Advertise With Us</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='col'>
            <h3>Legal Stuff</h3>
              <ul>
                <li>Privacy</li>
                <li>Cookie</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className='footer-last'>
          © Copyright code with rohit
        </div>
    </>
  )
}

export default Footer