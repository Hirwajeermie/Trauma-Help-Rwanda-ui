/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import Welt from '../../assets/Welt.svg.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <p>@ 2024 THR.Org </p>
      <p><li><img className='Welt-img' src={Welt} alt="" /></li></p>
      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        
        <li></li>
      </ul>
    </div>
  )
}

export default Footer
