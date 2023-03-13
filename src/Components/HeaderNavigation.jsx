import { useEffect, useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

import { navbarAnimation } from './animations/navbarAnimation';

const HeaderNavigation = ({ mode }) => {
  const [isVisible, setIsVisible] = useState(false)
  const navElem = useRef(null)

  useEffect(() => {
    navbarAnimation(navElem)
    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const toggleVisibility = () => {
    window.scrollY > 450
      ? setIsVisible(true)
      : setIsVisible(false)
  }

  const upMoveLight = "animation-upMove flex justify-around md:justify-start md:gap-10 pl-5 text-lg md:text-2xl font-bold fixed top-0 w-full py-3 bg-gradient-to-b from-[#4072ae] transition duration-400 hidden"
  const downMoveLight = "animation-downMove flex justify-around md:justify-start md:gap-10 pl-5 text-lg md:text-2xl font-bold fixed top-0 w-full py-3 bg-gradient-to-b from-[#4072ae] transition duration-400 opacity-100"
  const upMoveDark = "animation-upMove flex justify-aroundmd:justify-start md:gap-10 pl-5 text-lg md:text-2xl font-bold fixed top-0 w-full py-3 bg-gradient-to-b from-[#222f68] transition duration-400 hidden"
  const downMoveDark = "animation-downMove flex justify-aroundmd:justify-start md:gap-10 pl-5 text-lg md:text-2xl font-bold fixed top-0 w-full py-3 bg-gradient-to-b from-[#222f68] transition duration-400 opacity-100"


  return (
    <>
    {mode
      ? <nav ref={navElem} className={isVisible? downMoveDark: upMoveDark}>
          <HashLink smooth to='/home#projects' className="main-nav-item">Projects</HashLink>
          <HashLink smooth to='/home#about-me' className="main-nav-item">About me</HashLink>
          <HashLink smooth to='/home#contacts' className="main-nav-item">Contact</HashLink>
        </nav>
      : <nav ref={navElem} className={isVisible? downMoveLight: upMoveLight}>
          <HashLink smooth to='/home#projects' className="main-nav-item">Projects</HashLink>
          <HashLink smooth to='/home#about-me' className="main-nav-item">About me</HashLink>
          <HashLink smooth to='/home#contacts' className="main-nav-item">Contact</HashLink>
        </nav>
    }
    </>
  )
}

export default HeaderNavigation



// https://zenn.dev/thetalemon/articles/f759b1acd0053a

// https://dev.to/detoner777/react-tailwind-custom-transform-animations-30e4
// https://blog.avneesh.tech/create-an-animated-sidebar-with-tailwindcss-in-react
// https://johnckealy.medium.com/how-to-create-slide-in-on-scroll-animations-in-a-react-app-127eae92ee16