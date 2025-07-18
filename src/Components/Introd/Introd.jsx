/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Introd.css'

const Introd = () => {

  const navigate = useNavigate()
  return (
    <div className='Introd'>
        <div className='Introd-text'>
            <h1>TRAUMA HELP RWANDA </h1>
            <p>Trauma Help Rwanda (THR) is a legally registered non-governmental organization recognized by the Rwanda 
              Governance Board (RGB) under Law No 85/RGB/NGO/2017. THR is committed to addressing the silent of 
              psychological trauma across communities affected by the tragic history of the 1994 
              Genocide against the Tutsi, intergenerational trauma as well as post-conflict experiences..</p>
                  <button onClick={() => navigate('./ExploreMore')} className='btn'>Explore More</button>
        </div>
      
    </div>
  )
}

export default Introd
