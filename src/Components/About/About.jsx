/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './About.css'
import logo from '../../assets/logo.png'
import playicon from '../../assets/playicon.png'

const About = ({setPlayState}) => {

  const navigate = useNavigate()
  return (
    <div className='About'>
        <div className='About-left'>
            <img className='logooo' src={logo} alt="" />
            <img className='playicon' src={playicon} alt="" onClick={()=> {setPlayState(true)}} />
        </div>
        <div className='Abaut-right'>
        <h3>About Us</h3>
        <h1>Our values</h1> <br />
        <span className='ai-list-2'> 

         I.	Professionalism <br />
         II.Confidentiality <br />
         III.Active listening <br />
         IV.Empathy<br/><br/>

        </span>
        <h2>THE PURPOSES OF ORGANIZATION TRAUMA HELP RWANDA.  </h2><br/>
        <p>To fight against trauma, post-traumatic stress disorder (PTSD)
          and trauma related disorders in Rwanda community by increasing   it awareness,
          knowledge that relating to mental health issues   and encouraging people
          to consult counseling and mental health services available in the Country.</p>

        <h2>TRAUMA HELP RWANDA ‘S ACTIVITIES </h2>
        <h4>Our activities are focused   at three levels </h4> <br />
        <span className='ai-list'>
          I.	In Community <br />
          II.	 At Health centers levels <br />
          III.	   At Schools levels <br /><br/>
          <button onClick={() => navigate('./ExploreMoreMore')} className='btn'>Explore More</button>

        </span>
        </div>
      
    </div>
  )
}

export default About
