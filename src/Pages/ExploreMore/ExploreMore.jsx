
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
          Trauma Help Rwanda (THR) is a national non-governmental organization (NGO) recognized
           by the Rwanda Governance Board (RGB), and registered under No. 85/RGB/NGO/2017.<br></br>

           THR was founded by Mr. Jamuel Muhayimana, a Rwandan national who is a Mental 
           Health Nurse<br></br> with a Bachelor’s degree in Demography and a Master’s degree in Counseling Psychology.<br></br>

           He is also trained in EMDR (Eye Movement Desensitization and Reprocessing) Therapy, having completed international
           <br></br>training and supervision in Haiti, Thailand, and Kenya, organized by Trauma Aid Germany.<br></br>

           

           

      </p>
      
      <p><br></br>
      As a Counseling Psychologist, he primarily supports individuals suffering from 
       <br></br>trauma-related disorders and other psychological challenges.<br></br>

       Since its founding, THR has received both technical and financial support from<br></br>
       Trauma Aid Germany, particularly through Dr. Wolfgang Wöller, a specialist in the mental health field. 

       Later, 14 members joined the founder to support and contribute to the organization's vision and mission.
      

      </p><br></br>

      <h2>FOUNDER OF TRAUMA HELP RWANDA </h2 >
      <div className='card'>
                <div className="slide">
                    <div className="user-move">
                        <img src={user1} alt="" />
                        <div>
                            <h3>MUHAYIMANA Jamuel</h3>
                            <span>Initiatol of Trauma Help-Rwanda 
                             <br></br> Executive secretary, Trauma Help Rwanda
                               </span>
                        </div>
                    </div>
                    <h3>Qualification</h3>
                    <p> 
                   •	Master’s Degree in Counseling Psychology – Bugema University<br></br>
•	Bachelor’s Degree in Demography – Kigali Independent University (ULK)<br></br>
•	Advanced Diploma in Mental Health – Kigali Health Institute (KHI)<br></br>
•	Trainer and Supervisor in TPSS+ / ROTATE (Trauma Psycho-Social Support Plus / Resource-Oriented Trauma Therapy with Elements of EMDR), certified by Trauma Aid Germany<br></br>
•	Trained in EMDR Levels 1 and 2, currently undergoing supervision training through Trauma Aid <br></br>
•	Mental Health Practitioner since 1999



                      </p>
                </div>
          

      </div>

      <button onClick={() => navigate(-1)} className="btn">Back to Home</button>
      </div>
     
    </div>
  );
}

export default About;
