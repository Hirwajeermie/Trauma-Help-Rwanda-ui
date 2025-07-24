/* eslint-disable no-unused-vars */
import React from 'react'
import './Contactus.css'
import Massage from '../../assets/Massage.png'
import Imail from '../../assets/Imail.png'
import Phone from '../../assets/Phone.png'
import Locations from '../../assets/Locations.png'
import AArrow from '../../assets/AArrow.png'

const Contactus = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3ad05130-052d-4d81-8883-0ab770c193f7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div>
    <div className='Title'>
        <h1>Contact Us</h1>
    </div>
    <div className='Contact' id='Contactus'>
      
        <div className='contact-col'>
            <h3>Send us a message <img src={Massage} alt="" /></h3>
            <p>Feel free to reach out via our contact form, or find our contact information below. Your feedback, questions, 
                and suggestions are important to us as we strive to provide 
                exceptional help to our Organisation
            </p>
            <ul>
                <li><img src={Imail} alt="" />traumahelpr@gmail.com </li>
                <li><img src={Phone} alt="" />+250 788 410 349</li>
                <li><img src={Locations} alt="" /> Rwanda , Kigali City <br />Nyarugenge District <br />P.O.BOX : 4687 Kigali - Rwanda</li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label> Your Name</label>
            <input type="text" name='Name' placeholder='Enter your name' required/>
            <label >Phone Number</label>
            <input type="Tel" name='Phone' placeholder='Enter your mobile number' required/>
            <label >Write your messeges here</label>
            <textarea name="Message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={AArrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
      
    </div>
    </div>
  )
}

export default Contactus
