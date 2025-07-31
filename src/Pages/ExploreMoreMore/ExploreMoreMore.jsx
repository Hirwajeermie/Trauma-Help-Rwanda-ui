
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

          We organize trainings for church representatives, village chiefs, people with<br/>&nbsp;
          disabilities, and community actors.<br/><br/> Training Topics Include:<br/>
         <br/>

         1.	Psychological Trauma and Related Disorders
          (e.g., depression, post-traumatic stress disorder)<br/>&nbsp;
          We focus on the causes, symptoms, and treatment both preventive and curative.<br/>
          2.	Active Listening A key skill in counseling.<br/>
        3.	Introduction to Epilepsy
        Causes, symptoms, and treatment.<br/>
        4.	Mental Health Awareness
        We encourage the community to utilize existing mental health services at health facilities<br/>&nbsp; in order to reduce the high incidence of psychological trauma and chronic mental health cases.<br/>
        5.	Group Discussions on Family Conflict<br/>
        We facilitate discussions on family conflicts,<br/>&nbsp; their role in causing trauma, and their impact on family development.
        6.	Supervision of Trained Community Actors<br/>
        We conduct regular supervision sessions for individuals trained to work in the community.

      </p>
      <h1>Our Activities at  Health Centers level </h1>

      <p><br/>
      We support capacity building through training and supervision.<br/><br/>
      Key Activities Include:<br/><br/>

     1.	Training in Psycho-Traumatology
         both theoretical and practical components.<br/>
     2.	Trauma Treatment Techniques
        We teach techniques focused on resource activation.<br/>
     3.	Trauma Counseling and Self-Care
        Training on trauma counseling/therapy and self-care practices to prevent secondary traumatization.<br/>
     4.	Regular Supervision and InterVision
       Ongoing support through structured follow-up

      </p>

      <h1>Our Activities in Schools  </h1>

      <p>
        We focus on capacity building through training in trauma counseling,<br/>&nbsp; teacher supervision, and the creation 
        of anti-trauma clubs. These activities aim to prevent trauma and support youth exhibiting trauma symptoms.<br /><br/>
      We Organize Teacher Trainings On: <br /><br/>

      1.	Active Listening
      A key counseling skill in schools.<br /> 
      2.	Psychological Trauma
      Definitions, causes, symptoms, treatments,<br />&nbsp; and related issues such as depression and suicidal tendencies.<br /> 
      3.	Psychoeducation on School-Related Challenges
      Topics include drug and substance abuse, sexual violence,<br />&nbsp; family conflict, and unplanned teenage pregnancies.<br /> 
      4.	Domestic Violence
      5.	Stress and Burnout Management<br /> 
      Strategies for managing stress and preventing burnout among teachers.
      6.	Creation of Anti-Trauma Clubs
      Establishing student-led clubs that address psychological trauma and other mental health concerns.<br /> 
      7.	Training Student Representatives
      We train student leaders in each partner school to promote trauma awareness among their peers.<br /> 


      </p><br /><br />
      
      <button onClick={() => navigate(-1)} className="btn">Back to About</button>
      </div>
     
    </div>
  );
}

export default About;
