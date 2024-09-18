import React, { useState } from 'react'
import './Home.css'
import Introd from '../../Components/Introd/Introd'
import Whatwedo from '../../Components/Whatwedo/Whatwedo'
import About from '../../Components/About/About'
//import Instractor from '../../Components/Instractors/Instractors'
import Contactus from '../../Components/Contactus/Contactus'
import Footer from '../../Components/Footer/Footer'
import Videoplayer from '../../Components/Videoplayer/Videoplayer'

const Home = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
    <div>
      <Introd/>
      <Whatwedo/>
      <About setPlayState={setPlayState}/>
      
      <Contactus/>
      <Footer/>
    </div>
  <Videoplayer playState={playState} setPlayState={setPlayState}/>
   </div>

  )
}

export default Home
