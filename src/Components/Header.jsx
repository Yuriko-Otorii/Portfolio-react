import { useContext, useLayoutEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

import { setHeaderAnimation } from './animations/headerAnimation';

import { TransitionState } from '../App';

const Header = ({ mode, setMode }) => {
    const nameElem = useRef(null)
    const occupationElem = useRef(null)
    const linketinIcon = useRef(null)
    const githubIcon = useRef(null)
    const navItem1 = useRef(null)
    const navItem2 = useRef(null)
    const navItem3 = useRef(null)
    const downArrow = useRef(null)
    const { isTransition, setIsTransition } = useContext(TransitionState)
    
    useLayoutEffect(() => {
        console.log(isTransition);
        if(isTransition){
            setHeaderAnimation(nameElem, occupationElem, linketinIcon, githubIcon, navItem1, navItem2, navItem3, downArrow, 4.0)
            setIsTransition(false)
        }else{
            setHeaderAnimation(nameElem, occupationElem, linketinIcon, githubIcon, navItem1, navItem2, navItem3, downArrow, 0.5)
        }
    }, [])

    const handleChangeMode= () => {
        setMode(!mode)
    }

  return (
      <>
        <div className="absolute top-1 right-3 md:top-2 right-5" id="top">
            <div className='flex flex-col justify-center items-center'>
                <p className='md:text-2xl'>Mode</p>
                <div onClick={handleChangeMode}>
                    {mode
                     ? <i className="fas fa-lg fa-moon md:text-3xl hover:text-gray-400"></i>
                     : <i className="fas fa-lg fa-sun md:text-3xl hover:text-gray-400"></i>
                    }                    
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-around pt-10 h-screen">
            <div className="flex flex-col items-center">
                <h1 ref={nameElem} className="text-6xl md:text-8xl font-bold">Yuriko Otorii</h1>
                <h4 ref={occupationElem} className="text-3xl md:text-5xl font-bold my-3 mb-8 md:mb-12">Full-stack developer</h4>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/Yuriko-Otorii"
                        className="github-link"
                        target="_blank"
                    >
                        <i ref={githubIcon} className="cursor-pointer fa-brands fa-github fa-lg title-github-icon text-3xl md:text-5xl dulation-100 hover:text-gray-400"></i>
                    </a>
                    <a href="https://linkedin.com/in/yuriko-127381256" target="_blank">
                        <i ref={linketinIcon} className="cursor-pointer fa-brands fa-linkedin fa-lg title-linkedin-icon text-3xl md:text-5xl dulation-100 hover:text-gray-400"></i>
                    </a>
                </div>  
            </div>
            <nav className="flex flex-col items-center gap-5 my-4 text-2xl md:text-4xl md:mb-10 cursor-pointer font-bold">
                <HashLink ref={navItem1} smooth to='#projects' className="hover:text-gray-400">Projects</HashLink>
                <HashLink ref={navItem2} smooth to='#about-me' className="hover:text-gray-400">About me</HashLink>
                <HashLink ref={navItem3} smooth to='#contacts' className="hover:text-gray-400">Contact</HashLink>
            </nav>
            <HashLink ref={downArrow} smooth to='#projects' className='animate-bounce mt-5 hover:text-gray-400'>
                <i className="fa-solid fa-arrow-down fa-2xl md:text-5xl md:mb-5"></i>
            </HashLink>
        </div>
      </>
  )
}

export default Header


