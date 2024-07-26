
import React, { useRef }  from 'react'
import { useNavigate } from 'react-router-dom'
import './ExploreMore.css'
import user1 from '../../assets/user1.png'

function About() {
  const navigate = useNavigate(); // Move the hook inside the functional component

  

  return (
    <div className="Next-About">
      <div className="Title-About">
      <h1>TRAUMA HELP RWANDA (THR)</h1>
        <p>
      Trauma Help Rwanda (THR) is a <span> NATIONAL NON-GOVERNMENTAL ORGANISATION recognized
       by Rwanda Government Board (RGB),<br></br> registered by on</span> No   85/RGB/ NGO/2017.<br></br>
      Trauma Help -Rwanda was initiated by A Rwandan Mr. MUHAYIMANA Jamuel who is Mental 
      Health Nurse,<br></br> Bachelor degree in Demography and Master’s degree in Counselling Psychology.<br></br>
      Furthermore, the initiator of Trauma Help Rwanda is trained in EMDR
       (Eye Movement Desensitization and Reprocessing) therapy,<br></br> he did an international 
       training and supervision in Haiti, Thailand and Kenya organized by Trauma Aid Germany.  
      </p>
      
      <p><br></br>
      As a Counselor Psychologist, most of the time he treats people presenting<br></br> symptoms of Trauma
       and other psychological trauma related disorders.
     From its foundation received<br></br> advice and finance support of Trauma Aid Germany through
      Dr. Wolfgang Woeller specialized in mental health domain.<br></br> Later,
       other 14 members joined the initiator in his vision and mission. 

      </p><br></br>

      <h2>TRAUMA HELP RWANDA FONDER</h2 >
      <div className='card'>
                <div className="slide">
                    <div className="user-move">
                        <img src={user1} alt="" />
                        <div>
                            <h3>MUHAYIMANA Jamuel</h3>
                            <span>founder and managing director </span>
                        </div>
                    </div>
                    <p> 
                    Position at THR, Executive Secretary and Coordinator of Project. <br></br>
                    The previous roles as, Counselling psychology (Raster), BCH in Demography (A0), 
                    Advanced Diploma in Rerilal Health (A1), Certificate in EMDR Training, 
                    Supervisor and trainer in Trauma psychosocial support plus resource trented 
                    therapy with element of EMAR.
                      </p>
                </div>
          

      </div>

      <button onClick={() => navigate(-1)} className="btn">Back to Home</button>
      </div>
     
    </div>
  );
}

export default About;
