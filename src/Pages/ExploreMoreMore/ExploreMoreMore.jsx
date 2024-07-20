
import React from "react";
import { useNavigate } from 'react-router-dom';
import './ExploreMoreMore.css'

function About() {
  const navigate = useNavigate(); // Move the hook inside the functional component
  return (
    <div className="Next-About">
      <div className="Title-About">
      <h1>Our Activities at community level.</h1>
        <p>
        Organization of trainings to the representatives of churches, 
        authorities at village level, people with <br/>&nbsp; disabilities and health
         based at community level.<br/><br/> Topics of training includes:<br/>
         <br/>

         1.	Psychological Trauma and illnesses related to psychological Trauma 
         (depression, post-traumatic stress disorders).<br/>&nbsp; We fucus on causes,
         symptoms and treatment (the preventions and curatives) <br/>
         2.	Active listening as a principal skill of Counseling<br/>
         3.	 Introduction to epilepsy (cause, Symptoms and treatment) <br/>
         4.	We motivate the community to consult the existing mental health services in health 
         facilities in order to decrease<br/>&nbsp; the high incidence rate of new
         psychological trauma and decrease the number of chronic cases. <br/>
         5.	Organizing group discussion on family conflict that might be the causes of trauma 
         among family <br/>&nbsp;members and its consequences on the family development.<br/>
         6.	We organize the regular supervision sessions   of trained actors in community. 

      </p>
      <h1>Our Activities at  Health Centers level </h1>

      <p><br/>
      Here we do capacity building in terms of training and supervision.<br/><br/>
      The principal activities at this level includes:<br/><br/>

      1.	Training on Psych traumatology (theories and practices)<br/>
      2.	Teaching them Techniques used in treatment of trauma focusing on resources activation techniques.<br/>
      3.	Teaching them skills needed in Trauma counseling / therapy and selfcare just for prevention of Secondary traumatization. <br/>
      4.	Regular supervision and InterVision <br/>
      </p>

      <h1>Our Activities in Schools  </h1>

      <p>
      Here we work on capacity building in terms of training on trauma Counseling<br/>&nbsp;
      at school, we do the supervision of teachers and Creation clubs against Trauma in schools to prevent tauma and treating Yourth presenting symptoms of trauma. <br/><br/>
      We organize teacher trainings on: <br /><br/>

      1.	Active listening at schools as major skill of counseling;<br /> 
      2.	Psychological Trauma (definitions, causes, symptoms and treatments) 
          and other trauma<br />&nbsp;related disorders (depression, suicidal tendances ….);<br />
      3.	Psychoeducation on different challenges at school’s  
         (drogues, substances abuses, sexual violences,<br />&nbsp; conflict in families, and unplanned pregnancies for teneger ….);<br />
      4.	Domestic violences <br />
      5.	Stress and burnout management at schools’ settings;<br />
      6.	Creation of club against psychological trauma and others mental related disorders <br />
      7.	Training of representatives of students in each partner’s school. 


      </p><br /><br />
      
      <button onClick={() => navigate(-1)} className="btn">Back to About</button>
      </div>
     
    </div>
  );
}

export default About;
