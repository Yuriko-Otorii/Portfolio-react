import { useEffect, useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

import { ScrollTrigger } from 'gsap/all';


const HeaderNavigation = () => {
  const [isVisible, setIsVisible] = useState(false)
  const navElem = useRef(null)
  const didEffect = useRef(false);


  const toggleVisibility = () => {
    window.scrollY > 450
      ? setIsVisible(true)
      : setIsVisible(false)
  }

  const upMoveCss = "animation-upMove flex justify-around text-lg font-bold fixed top-0 w-full mt-3 hidden"
  const downMoveCss = "animation-downMove flex justify-around text-lg font-bold fixed top-0 w-full mt-3"

  useEffect(() => {
    // if(didEffect.current) return
    // didEffect.current = true;




    // toggleVisibility()
    // window.addEventListener('scroll', toggleVisibility)

    // return () => {
    //   return () => window.removeEventListener('scroll', toggleVisibility)
    // }
  }, [])

  const setNavAnimation = (navElem) => {
    gsap.to()
  }

  return (
    <nav ref={navElem} className={isVisible? downMoveCss: upMoveCss}>
      <HashLink smooth to='/home#projects' className="main-nav-item">Projects</HashLink>
      <HashLink smooth to='/home#about-me' className="main-nav-item">About me</HashLink>
      <HashLink smooth to='/home#contacts' className="main-nav-item">Contact</HashLink>
    </nav>
  )
}

export default HeaderNavigation



// https://zenn.dev/thetalemon/articles/f759b1acd0053a
// https://qiita.com/takeshima_14/items/4b53d590ab209040b052