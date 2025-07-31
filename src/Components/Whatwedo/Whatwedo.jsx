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
        <h1>Our MISSION</h1>
        <p>To provide professional counseling services to Rwandan society, which has experienced trauma related
           to the<br /> 1994 Genocide against the Tutsi and its consequences. The focus is on preventing new causes of<br />
            psychological trauma, offering treatment for existing trauma, stress management and <br /> burnout,
            and other trauma-related disorders such as depression,<br /> grief, drug abuse etc.   <br />

          <br />
       </p>
       <h1>Our VISION </h1>
       <p>
        A Rwandan society that is aware of mental health issues especially psychological trauma 
        actively<br /> addresses them and has access to high-quality professional services
       </p>
    </div>

   <div className='What-we-do'>
      <div className='What-wedo'>
        <img src={picture1} alt="" />
        <p></p>Our efforts focus on raising awareness about mental health issues particularly 
        psychological trauma, providing basic psychosocial counseling services, and encouraging 
        individuals to access available mental health services, especially 
        those offered at health centers.
      </div>
      <div className='What-wedo'>
        <img src={picture3} alt="" />
        <p>At the community level, we work closely with community actors from the seven administrative 
          sectors of Nyanza District, including:<br />
          Representatives of community health workers (Abajyanama bubuzima), Religious Leaders (Abahagarariye amadini n’amatorero), 
          </p>
      </div>
      <div className='What-wedo'>
        <img src={picture2} alt="" />
        <p>
        Trauma Help Rwanda (THR) enhances the effectiveness of psychological trauma counseling by 
        increasing skills of mental health providers in trauma treatment. It also offers InterVision 
        sessions and clinical supervision to mental health professionals in 10 health centers across 
        Nyanza District.
        </p>
      </div>
      <div className='What-wedo'>
        <img src={picture4} alt="" />
        <p>THR supports mental health in schools through the following initiatives:<br />
           Training teachers and student leaders on the symptoms of trauma and the basics of trauma counseling including active listening.
        </p>
      </div>
    </div>
    <div className='Title'>
      <h2> Objectives </h2>
      <ul>
        <li>•	Deliver psychosocial counseling, stress management, and burnout prevention services.</li>
        <li>•	Combat psychological trauma and raise awareness across Rwanda.</li>
        <li>• Build local capacity through training and supervision on trauma-informed care</li>
        <li>•	Promote Alternative Dispute Resolution (ADR) in conflict management.</li>
        <li>•	Foster community unity and reconciliation.</li>
        <li>•	Prevent the transmission of trauma across generations.</li>
      </ul>
    </div>
    <div>
    <button onClick={() => navigate('./Report')} className='btn black-btn'>Report</button>
    </div>
    </div>
    
    
  )
}

export default Whatwedo
