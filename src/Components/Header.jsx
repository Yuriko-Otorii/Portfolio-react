import { useLayoutEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

import { setHeaderAnimation } from './animations/headerAnimation';


const Header = ({ mode, setMode }) => {
    const nameElem = useRef(null)
    const occupationElem = useRef(null)
    const linketinIcon = useRef(null)
    const githubIcon = useRef(null)
    const navItem1 = useRef(null)
    const navItem2 = useRef(null)
    const navItem3 = useRef(null)
    const downArrow = useRef(null)
    
    useLayoutEffect(() => {
        setHeaderAnimation(nameElem, occupationElem, linketinIcon, githubIcon, navItem1, navItem2, navItem3, downArrow)
    }, [])  

    const handleChangeMode= () => {
        setMode(!mode)
    }

  return (
      <>
        <div className="absolute top-1 right-3 md:top-2 right-5" id="top">
            <div className='flex flex-col justify-center items-center'>
                <p className='md:text-3xl'>Mode</p>
                <div onClick={handleChangeMode}>
                    {mode
                     ? <i className="fas fa-lg fa-moon md:text-4xl"></i>
                     : <i className="fas fa-lg fa-sun md:text-4xl"></i>
                    }                    
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center pt-10">
            <div className="flex flex-col items-center">
                <h1 ref={nameElem} className="text-6xl md:text-9xl font-bold">Yuriko Otorii</h1>
                <h4 ref={occupationElem} className="text-3xl md:text-6xl font-bold my-3 mb-8 md:mb-8">Front-end developer</h4>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/Yuriko-Otorii"
                        className="github-link"
                        target="_blank"
                    >
                        <i ref={githubIcon} className="cursor-pointer fa-brands fa-github fa-lg title-github-icon text-3xl md:text-5xl dulation-100 hover:text-gray-700"></i>
                    </a>
                    <a href="https://linkedin.com/in/yuriko-127381256" target="_blank">
                        <i ref={linketinIcon} className="cursor-pointer fa-brands fa-linkedin fa-lg title-linkedin-icon text-3xl md:text-5xl dulation-100 hover:text-gray-700"></i>
                    </a>
                </div>  
            </div>
            <nav className="flex flex-col items-center my-4 text-2xl md:text-4xl md:mb-10">
                <HashLink ref={navItem1} smooth to='#projects' className='cursor-pointer my-2 font-bold hover:text-gray-700'>Projects</HashLink>
                <HashLink ref={navItem2} smooth to='#about-me' className='cursor-pointer my-2 font-bold hover:text-gray-700'>About me</HashLink>
                <HashLink ref={navItem3} smooth to='#contacts' className='cursor-pointer my-2 font-bold hover:text-gray-700'>Contact</HashLink>
            </nav>
            <HashLink ref={downArrow} smooth to='#projects' className='animate-bounce mt-5'>
                <i className="fa-solid fa-arrow-down fa-2xl md:text-6xl"></i>
            </HashLink>
        </div>
      </>
  )
}

export default Header


