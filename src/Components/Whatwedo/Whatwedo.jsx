/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Whatwedo.css'
import picture1 from '../../assets/picture1.png'
import picture2 from '../../assets/picture2.png'
import picture3 from '../../assets/picture3.png'
import picture4 from '../../assets/picture4.png'

const Whatwedo = () => {
  const navigate = useNavigate()
  return (
    <div id='Whatwedo'>
       <div className='Title'>
      <h3>What We Do</h3>
        <h1>Our VISION And MISSION</h1>
        <p>Rwandan society is aware of mental health issues, especially psychological 
          Trauma problems, <br /> takes care of them and receives high quality professional services. <br />

          <br />

          Doing counseling services for Rwandese people presenting symptoms of psychological
           trauma in which <br /> the most time are caused by genocide against Tutsis of 1994 as well 
           as its consequences and preventing the <br /> new causes of Psychological Trauma in Rwanda community.
       </p>
    </div>

   <div className='What-we-do'>
      <div className='What-wedo'>
        <img src={picture1} alt="" />
        <p>Conversations</p>
      </div>
      <div className='What-wedo'>
        <img src={picture2} alt="" />
        <p>Conversations</p>
      </div>
      <div className='What-wedo'>
        <img src={picture3} alt="" />
        <p>Conversations</p>
      </div>
      <div className='What-wedo'>
        <img src={picture4} alt="" />
        <p>Conversations</p>
      </div>
    </div>
    <div>
    <button onClick={() => navigate('./Report')} className='btn black-btn'>Report</button>
    </div>
    </div>
    
    
  )
}

export default Whatwedo
