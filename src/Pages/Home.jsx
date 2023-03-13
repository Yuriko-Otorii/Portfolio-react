import { lazy, useState } from 'react'

import lightModeImg from '../images/blue-sky.jpg'
import darkModeImg from '../images/night-sky.jpg'

const Header = lazy(() => import('../Components/Header'))
const ProjectsSection = lazy(() => import('../Components/ProjectsSection'))
const AboutSection = lazy(() => import('../Components/AboutSection'))
const ContactSection = lazy(() => import('../Components/ContactSection'))
const TopPageIcon = lazy(() => import('../Components/TopPageIcon'))
const Footer = lazy(() => import('../Components/Footer'))
const HeaderNavigation = lazy(() => import('../Components/HeaderNavigation'))

const Home = () => {
  const [mode, setMode] = useState(false)

  return (
    <div className='text-white font-poorStory h-fit'>
      <div
        style={{ backgroundImage: mode? `url(${darkModeImg})`: `url(${lightModeImg})` }}
        className={mode
        ? "bg-cover blur-none -z-50 h-full w-screen fixed"
        : "bg-cover blur-sm -z-50 h-full w-screen fixed"
        }        
      ></div>

      <Header setMode={setMode} mode={mode}/>
      <HeaderNavigation mode={mode}/>

      <ProjectsSection mode={mode} />
      <AboutSection mode={mode} />
      <ContactSection mode={mode} />
      <TopPageIcon mode={mode} />
      
      <Footer />
    </div>
  )
}

export default Home
