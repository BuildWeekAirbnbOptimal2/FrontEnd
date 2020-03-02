import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'


const NavLinks = () => {

    return(
        <div>
        <Link to='/src/components/' className='logo'>Airbnb Pricer<img src={logo}   alt="logo-img"/></Link>
        <ul className='nav-links'>
            
            <li>
                <Link to='/src/components/' className='link'>Add Props</Link>
            </li>
            <li>
                <Link to='/src/components/' className='link'>View Props</Link>
            </li>
            <li>
            <Link to='/src/components/' className='link'>About Us</Link>
        </li>
            <li>
                <Link to='/src/components/Login' className='link'>LogOut</Link>
            </li>
           
        </ul>
        
        </div>
    )
}

export default NavLinks