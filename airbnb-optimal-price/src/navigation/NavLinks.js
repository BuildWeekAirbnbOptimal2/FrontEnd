import React from 'react'
import { Link } from 'react-router-dom'



const NavLinks = () => {

    return(
        <div>
        <div className='logo'>Logo</div>
        <ul className='nav-links'>
            <li>
                <Link to='/' className='link'>Home</Link>
            </li>
            <li>
                <Link to='/' className='link'>Add</Link>
            </li>
            <li>
                <Link to='/' className='link'>View</Link>
            </li>
            <li>
                <Link to='/' className='link'>Sign up</Link>
            </li>
        </ul>
        
        </div>
    )
}

export default NavLinks