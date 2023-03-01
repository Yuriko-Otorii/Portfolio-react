import React from 'react'

import resumeImg from '../images/Resume.png'
import resumePdf from '../images/resume-pdf.pdf'
import typescriptIcon from "../images/icons8-typescript.svg";


const AboutSection = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-20" id="about-me">
      <h1 className='text-4xl font-bold mb-4 md:text-5xl'>About me</h1>
      <div className="w-11/12 h-auto bg-gray-100 bg-opacity-20 rounded-lg p-5">
        <div className='flex flex-col items-stretch md:flex-row md:py-10'>
          <div className="md:order-2 flex flex-col justify-between md:pt-10 md:pb-28">
            <h3 className='text-2xl md:text-4xl font-bold text-center'>Hi, I am Yuriko!</h3>
            <p className='text-xl md:text-3xl my-4'>
              A co-op student who is eager to work as a front-end developer.
              Passionate about making people's lives or works easier through
              technology. Love to work with other developers to share
              interesting ideas.
            </p>

            <div className="flex flex-col items-center mb-5">
              <h3 className='text-xl md:text-3xl md:mb-2'>Skill sets</h3>
              <div className="flex items-center justify-center gap-1 md:gap-2">
                  <i className="fa-brands fa-lg md:text-4xl fa-html5"></i>
                  <i className="fa-brands fa-lg md:text-4xl fa-css3-alt"></i>
                  <i className="fa-brands fa-lg md:text-4xl fa-sass"></i>
                  <i className="fa-brands fa-lg md:text-4xl fa-square-js"></i>
                  <img
                    alt="Typescript icon"
                    src={`${typescriptIcon}`}
                    className="md:w-11 md:h-11"
                  />
                  <i className="fa-brands fa-lg md:text-4xl fa-python"></i>
                  <i className="fa-brands fa-lg md:text-4xl fa-react"></i>
                  <i className="fa-brands fa-lg md:text-4xl fa-angular"></i>
                  <i className="fa-brands fa-lg md:text-4xl fa-node-js"></i>
                  <i className="fa-brands fa-lg md:text-4xl fa-git-alt"></i>
                  <i className="fa-brands fa-lg md:text-4xl fa-github"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:order-1">
            <a
              href={resumePdf}
              target="_blank"
              className="cursor-pointer flex justify-center"
            >
              <img
                className="md:w-1/2 md:h-auto"
                src={resumeImg}
                alt="Resume image"
              />
              <div className="read-resume-bottom"></div>
            </a>
            <a
              href={resumePdf}
              className="hidden md:block cursor-pointer flex justify-center mt-5"
              target="_blank"
              ><button className=" border-2 rounded-lg py-1 px-4 mt-2 text-3xl hover:bg-white hover:text-gray-500 duration-300">Read resume</button>
            </a>
            <a
              href={resumePdf}
              className="cursor-pointer flex justify-center"
              target="_blank"
              ><button className="border-2 rounded-lg py-.5 px-3 mt-2 text-lg md:hidden">Read resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection