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
            <p>Trauma Help Rwanda (THR) is a NATIONAL NON-GOVERNMENTAL ORGANISATION 
                recognized by Rwanda Government Board (RGB), registered by on No 
                  85/RGB/ NGO/2017.</p>
                  <button onClick={() => navigate('./ExploreMore')} className='btn'>Explore More</button>
        </div>
      
    </div>
  )
}

export default Introd
