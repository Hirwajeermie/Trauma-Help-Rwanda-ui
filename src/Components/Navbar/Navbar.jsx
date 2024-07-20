/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll'




const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu =()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  


  return (
   <nav className={`container ${sticky? 'dark-nav' : ''} `}>
    <img className="logo" src={logo} alt="" />
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
      
        <li><Link to='Introd' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='Whatwedo' smooth={true} offset={-260} duration={500}>What we do</Link></li>
        <li><Link to='About' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='Instractors' smooth={true} offset={-260}   duration={500}>Instractors</Link></li>
        <li><Link to='Contactus' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
    </ul>
    <img className='menu-icon' src={menu} alt="" onClick={toggleMenu} />
   </nav>
  )
}

export default Navbar
