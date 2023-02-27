import React from 'react'

import {HashLink} from 'react-router-hash-link';


const Header = ({ mode, setMode }) => {
    const handleChangeMode= () => {
        setMode(!mode)
    }

  return (
      <>
        <div className="absolute top-1 right-3 md:top-2 right-5">
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
        <div className="flex flex-col items-center pt-16">
            <div className="flex flex-col items-center">
                <h1 className="text-6xl md:text-9xl font-bold">Yuriko Otorii</h1>
                <h4 className="text-3xl md:text-6xl font-bold my-3 md:mb-8">Front-end developer</h4>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/Yuriko-Otorii"
                        className="github-link"
                        target="_blank"
                    >
                        <i className="fa-brands fa-github fa-lg title-github-icon text-3xl md:text-5xl"></i>
                    </a>
                    <a href="" target="_blank">
                        <i className="fa-brands fa-linkedin fa-lg title-linkedin-icon text-3xl md:text-5xl"></i>
                    </a>
                </div>  
            </div>
            <nav className="flex flex-col items-center mt-10 text-2xl md:text-4xl md:mb-10">
                <HashLink to='/home#projects' className='my-2 font-bold'>Projects</HashLink>
                <HashLink to='/home#about-me' className='my-2 font-bold'>About me</HashLink>
                <HashLink to='/home#contacts' className='my-2 font-bold'>Contact</HashLink>
            </nav>
            <HashLink to='/homeprojects' className='mt-5'>
                <i className="fa-solid fa-arrow-down fa-2xl md:text-6xl"></i>
            </HashLink>
        </div>
      </>
  )
}

export default Header


