import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'

const HeaderNavigation = ({ mode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const toggleVisibility = () => {
    window.scrollY > 450 ? setIsVisible(true) : setIsVisible(false)
  }

  const defaultStyle =
    'flex justify-around md:justify-start md:gap-10 pl-5 text-lg md:text-2xl font-bold fixed w-full py-3 bg-gradient-to-b z-50'
  const hiddenLightMode = '-top-10 from-[#4072ae]'
  const visibleLightMode = 'top-0 from-[#4072ae]'
  const hiddenDarkMode = '-top-10 from-[#222f68]'
  const visibleDarkMode = 'top-0 from-[#222f68]'

  return (
    <>
      {mode ? (
        <nav
          className={`${defaultStyle} ${
            isVisible ? visibleDarkMode : hiddenDarkMode
          }`}
          style={{ transition: 'all .2s ease-out' }}
        >
          <HashLink smooth to="#projects" className="main-nav-item">
            Projects
          </HashLink>
          <HashLink smooth to="#about-me" className="main-nav-item">
            About me
          </HashLink>
          <HashLink smooth to="#contacts" className="main-nav-item">
            Contact
          </HashLink>
        </nav>
      ) : (
        <nav
          className={`${defaultStyle} ${
            isVisible ? visibleLightMode : hiddenLightMode
          }`}
          style={{ transition: 'all .2s ease-out' }}
        >
          <HashLink smooth to="#projects" className="main-nav-item">
            Projects
          </HashLink>
          <HashLink smooth to="#about-me" className="main-nav-item">
            About me
          </HashLink>
          <HashLink smooth to="#contacts" className="main-nav-item">
            Contact
          </HashLink>
        </nav>
      )}
    </>
  )
}

export default HeaderNavigation
