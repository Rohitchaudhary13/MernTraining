import React from 'react'
import logo from '../images/logo-light.svg';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>
        <nav className='row-navbar'>
            <div>
                <img src={logo} alt="Logo" className='logo' />
            </div>
            <div className='nav-items'>
                <div>Home</div>
                <div>About Me</div>
                <div>Contact Me</div>
                <div>Icon</div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar