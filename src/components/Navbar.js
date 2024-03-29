import React from 'react'
import { Link, Navigate } from 'react-router-dom';


import "../styles/Navbar.css";
import LogoutAlert from './LogoutAlert';

function Navbar() {

  return (
    <nav className="nav">
        <Link to="/home" className="site-title"> <i className="fas fa-tasks"></i>To-Do App</Link>
            <ul className='navbar'>
                <li>
                    <Link to="/home">ToDos</Link>
                </li>
                <li>
                    <Link to="/dashboard">Profile</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/resources">Resources</Link>
                </li>
                <li>
                    <LogoutAlert> 
                    </LogoutAlert>
                </li>
            </ul>

    </nav>

  )
}

export default Navbar