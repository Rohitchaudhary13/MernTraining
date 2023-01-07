import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
        <div className='nav-container'>
            <Link to="/"><h1 className='unbounded'>Nothing.</h1></Link>
            <div className='nav-list-container'>
                <Link to='/mynotes'><div>My Notes</div></Link>
                <div>Name</div>
                <div>Logout</div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar