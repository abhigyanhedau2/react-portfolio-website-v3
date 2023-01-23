import React, { useState } from 'react';
import './Navbar.css';
import myResume from '../../assets/Resume.pdf';

const Navbar = () => {

    const [menuIsOpen, setmenuIsOpen] = useState(false);

    const menuOpenHandler = () => {
        setmenuIsOpen(prev => !prev);
    }

    return (
        <header id="navbar">
            <div className="hamburger-menu" onClick={menuOpenHandler}><i className='fa-solid fa-bars'></i></div>
            <nav className='responsive-nav'>
                <ul className={menuIsOpen ? `responsive-ul` : ''}>
                    <li onClick={menuOpenHandler}><a href="#navbar">Home</a></li>
                    <li onClick={menuOpenHandler}><a href="#about">About</a></li>
                    <li onClick={menuOpenHandler}><a href="#skills">Skills</a></li>
                    <li onClick={menuOpenHandler}><a href="#projects">Projects</a></li>
                    <li onClick={menuOpenHandler}><a href="#contacts">Contact</a></li>
                    <li onClick={menuOpenHandler}><a href={myResume}>Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;