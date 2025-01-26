import React from 'react';
import './NavBar.css'
import logo from './reactMovie_logo.png'
import tmdbLogo from './tmdb_logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const NavBar = (props) => {
    const navigate = useNavigate()
    
    const onImageClick = (ev) => {
        ev.preventDefault()
        navigate("/")
    }
    return (
        <>
        <div className='header'>
            <div className='left-logo'>
                <img src={logo} alt="rmdb-logo" className="rmdb-logo" />
            </div>

            <div className="navbar-menu">
                <ul className="flex space-x-6 text-white">
                    <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                    <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                </ul>
            </div>

            <div className='right-logo'>
                <img onClick={onImageClick} src={tmdbLogo} alt="rmdb-logo" className="rmdb-logo" />
            </div>
        </div>
        {props.children}
        </>

    );
};

export default NavBar;