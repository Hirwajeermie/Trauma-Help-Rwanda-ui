/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useRef }  from 'react'
import './Instractors.css'
import next from '../../assets/next.png'
import back from '../../assets/back.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'
import Welt from '../../assets/Welt.svg.png'


const testimony = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }

  return (
    <div className='Instractors'>
        <div className='Title'>
           <h3>Instractor</h3>
           <h1>TRAUMA HELP RWANDA BOARD</h1>
       </div>

      <img className='new1-btn' src={next} alt="" onClick={slideForward} />
      <img className='new2-btn' src={back} alt="" onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
            
            
            <li>
                <div className="slide">
                    <div className="user-move">
                        <img src={user2} alt="" />
                        <div>
                            <h3>HIRWA Jeremie</h3>
                            <span>umuyobizi</span>
                        </div>
                    </div>
                    <p>In my previous roles as, I have spearheaded 
                        comprehensive social media strategies for 
                        diverse clients, ranging from startups to 
                        established brands. I have a proven track 
                        record </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-move">
                        <img src={user3} alt="" />
                        <div>
                            <h3>HIRWA Jeremie</h3>
                            <span>umuyobizi</span>
                        </div>
                    </div>
                    <p>In my previous roles as, I have spearheaded 
                        comprehensive social media strategies for 
                        diverse clients, ranging from startups to 
                        established brands. I have a proven track 
                        record </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-move">
                        <img src={user4} alt="" />
                        <div>
                            <h3>HIRWA Jeremie</h3>
                            <span>umuyobizi</span>
                        </div>
                    </div>
                    <p>In my previous roles as, I have spearheaded 
                        comprehensive social media strategies for 
                        diverse clients, ranging from startups to 
                        established brands. I have a proven track 
                        record </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-move">
                        <img src={user4} alt="" />
                        <div>
                            <h3>HIRWA Jeremie</h3>
                            <span>umuyobizi</span>
                        </div>
                    </div>
                    <p>In my previous roles as, I have spearheaded 
                        comprehensive social media strategies for 
                        diverse clients, ranging from startups to 
                        established brands. I have a proven track 
                        record </p>
                </div>
            </li>
        </ul>
      </div>
      <div className='Title'>
      <h1>Partners</h1>
      <li><img className='Welt-img' src={Welt} alt="" /></li>
      </div>
    </div>
  )
}

export default testimony
