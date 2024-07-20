import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Report.css'


const Report = () => {
    const navigate = useNavigate(); 
  return (
    <div className='Report'>
      
      <div>
       <button onClick={() => navigate(-1)} className="btn">Back to <Page></Page></button>
    </div>
    </div>
    
   
  )
}

export default Report
