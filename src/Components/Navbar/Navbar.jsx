/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll'


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

;

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img className="logo" src={logo} alt="Logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='Introd' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='Whatwedo' smooth={true} offset={-260} duration={500}>What we do</Link></li>
        <li><Link to='About' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='Instractors' smooth={true} offset={-260} duration={500}>Instructors</Link></li>
        <li><Link to='Contactus' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        
      </ul>
      <img className='menu-icon' src={menu} alt="Menu Icon" onClick={toggleMenu} />
    </nav>
  )
}

export  {Navbar}
