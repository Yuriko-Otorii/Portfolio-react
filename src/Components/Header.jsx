import React from 'react'

import {HashLink} from 'react-router-hash-link';


const Header = ({ mode, setMode }) => {
    const handleChangeMode= () => {
        setMode(!mode)
    }

  return (
      <>
        <div className="absolute top-1 right-3">
            <div className='flex flex-col justify-center items-center'>
                <p>Mode</p>
                <div onClick={handleChangeMode}>
                    {mode
                     ? <i className="fas fa-lg fa-moon"></i>
                     : <i className="fas fa-lg fa-sun"></i>
                    }                    
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center pt-16">
            <div className="flex flex-col items-center">
                <h1 className="text-6xl font-bold">Yuriko Otorii</h1>
                <h4 className="text-3xl font-bold my-3">Front-end developer</h4>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/Yuriko-Otorii"
                        className="github-link"
                        target="_blank"
                    >
                        <i className="fa-brands fa-github fa-lg title-github-icon text-3xl"></i>
                    </a>
                    <a href="" target="_blank">
                        <i className="fa-brands fa-linkedin fa-lg title-linkedin-icon text-3xl"></i>
                    </a>
                </div>  
            </div>
            <nav className="flex flex-col items-center mt-10 text-xl">
                <HashLink to='/home#projects' className='my-2 text-2xl font-bold'>Projects</HashLink>
                <HashLink to='/home#about-me' className='my-2 text-2xl font-bold'>About me</HashLink>
                <HashLink to='/home#contacts' className='my-2 text-2xl font-bold'>Contact</HashLink>
            </nav>
            <HashLink to='/homeprojects' className='mt-5'>
                <i className="fa-solid fa-arrow-down fa-2xl"></i>
            </HashLink>
        </div>
      </>
  )
}

export default Header


