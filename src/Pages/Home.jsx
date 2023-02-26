import { useState } from 'react'
import Footer from '../Components/Footer'

import Header from '../Components/Header'
import lightModeImg from '../images/blue-sky.jpg'
import darkModeImg from '../images/night-sky.jpg'

const Home = () => {
  const [mode, setMode] = useState(false)

  return (
    <div className='text-white font-poorStory'>
      <div
        style={{ backgroundImage: mode? `url(${darkModeImg})`: `url(${lightModeImg})` }}
        className={mode
        ? "bg-cover blur-none -z-50 h-screen w-screen absolute"
        : "bg-cover blur-sm -z-50 h-screen w-screen absolute"
        }        
      ></div>
      <Header setMode={setMode} mode={mode}/>


      <Footer />
    </div>
  )
}

export default Home
