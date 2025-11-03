import {Link,NavLink} from 'react-router-dom'  

// Link and Navlink are built-in ,
// i.e., Link is used for Dynamic updations and NavLink is used for Dynamic updations + Styling (Navigating it through design)  

import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
       
            {/* <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/dashboard">Dashboard</a>
            </li>  -> this faces a problem i.e., dynamic updations won't done here*/} 



            {/* To make dynamic Updations we need to use react special cases */}

         <ul>
            <li>
                <Link to = "/" className={({isActive}) => isActive ? "active-link": ""}>
                Home 
                </Link>
            </li>
            <li>
                <Link to = "/about" className={({isActive}) => isActive ? "active-link": ""}>
                About
                </Link>
            </li>
            <li>
                <Link to="/dashboard" className={({isActive}) => isActive ? "active-link": ""}>
                Dashboard
                </Link>
            </li>  

                    {/* Hence Using of Link-to i just made dynamic Updations Successfull */}
        </ul>
    </div>
  )
}

export default Navbar
