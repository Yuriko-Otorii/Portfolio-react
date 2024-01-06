import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import moonIcon from '../images/moon-icon.png'

const TopPageIcon = ({ mode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const toggleVisibility = () => {
    window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false)
  }

  const defaultStyle = 'flex flex-col justify-center fixed right-3 md:right-5'
  const hiddenLightMode = '-bottom-28'
  const visibleLightMode = 'bottom-5'
  const hiddenDarkMode = '-bottom-28'
  const visibleDarkMode = 'bottom-5'

  return (
    <>
      {mode ? (
        <div
          className={`${defaultStyle} ${
            isVisible ? visibleDarkMode : hiddenDarkMode
          }`}
          style={{ transition: 'all .5s ease-out' }}
        >
          <HashLink smooth to="#top">
                <p className="mb-2 md:text-xl">Page Top</p>
                <img
                  className="animate-floating moon-icon w-9 h-9 md:w-12 md:h-12 mx-auto"
                  alt="Moon icon"
                  src={moonIcon}
                />
          </HashLink>
        </div>
      ) : (
        <div
          className={`${defaultStyle} ${
            isVisible ? visibleLightMode : hiddenLightMode
          }`}
          style={{ transition: 'all .5s ease-out' }}
        >
          <HashLink smooth to="#top">
                <p className="mb-2 md:text-2xl">Page Top</p>
                <div className="animate-floating flex flex-col justify-center items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-sky-300 rounded-full mx-auto"></div>
                    <div className="clip-balloon-tail w-1 h-1 md:w-2 md:h-2 bg-sky-300"></div>
                    <div className="h-3 md:h-5 bg-sky-300 border border-sky-300"></div>
                </div>
          </HashLink>
        </div>
      )}
    </>
  )
}

export default TopPageIcon
