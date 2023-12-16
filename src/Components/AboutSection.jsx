import { useEffect, useRef } from "react"

import resumeImg from '../images/Resume.png'
import resumePdf from '../images/resume-pdf.pdf'
import typescriptIcon from '../images/icons8-typescript.svg'
import mongodbIcon from '../images/mongodb-icon.svg'

import { sectionAnimation } from './animations/sectionAnimation'


const AboutSection = ({ mode }) => {
  const sectionwrapper = useRef(null)

  useEffect(() => {
    sectionAnimation(sectionwrapper.current)
  }, [])

  return (
    <section
      className="flex flex-col justify-center items-center mt-20"
      id="about-me"
    >
      <h1 className="text-4xl font-bold mb-4 lg:text-5xl">About me</h1>
      <div
        ref={sectionwrapper}
        className={
          mode
            ? 'w-11/12 h-auto bg-gray-500 bg-opacity-50 rounded-lg p-5'
            : 'w-11/12 h-auto bg-white bg-opacity-20 rounded-lg p-5'
        }
      >
        <div className="flex flex-col items-center justify-center lg:w-full lg:flex-row lg:py-10 lg:mx-auto">
          <div className="flex flex-col justify-between lg:w-[70%] lg:pr-10 lg:mx-5 max-w-[700px]">
            <h3 className="text-2xl lg:text-4xl font-bold text-center">
              Hi, I am Yuriko!
            </h3>
            <p className="text-lg lg:text-2xl my-4 lg:my-20">
              I am a full-stack developer with a passion for user experience and
              interaction design. If you are looking for a full-stack developer,
              who is confident in self-management and has a wonderful work
              ethic, you are in the right place. Learning and growing as a
              developer is important to me and I will put all my knowledge into
              your project. I am currently working on a project as a full-stack
              developer. I am excellent at working in teams and enjoy
              collaboration with peers.
            </p>

            <div className="flex flex-col items-center lg:w-full mb-5">
              <h3 className="text-xl mt-5 lg:mt-0 lg:text-3xl lg:mb-2">
                Skill sets
              </h3>
              <div className="flex items-center justify-center gap-1 lg:gap-3 lg:gap-2">
                <i className="fa-brands fa-lg lg:text-4xl fa-html5"></i>
                <i className="fa-brands fa-lg lg:text-4xl fa-css3-alt"></i>
                <i className="fa-brands fa-lg lg:text-4xl fa-sass"></i>
                <i className="fa-brands fa-lg lg:text-4xl fa-square-js"></i>
                <img
                  alt="Typescript icon"
                  src={`${typescriptIcon}`}
                  className="lg:w-11 lg:h-11"
                />
                <i className="fa-brands fa-lg lg:text-4xl fa-python"></i>
                <i className="fa-brands fa-lg lg:text-4xl fa-react"></i>
                <i className="fa-brands fa-lg lg:text-4xl fa-angular"></i>
                <i className="fa-brands fa-lg lg:text-4xl fa-node-js"></i>
                <img
                  alt="mongoDB icon"
                  src={`${mongodbIcon}`}
                  className="w-5 h-5 lg:w-11 lg:h-11"
                />
                <i className="fa-brands fa-lg lg:text-4xl fa-git-alt"></i>
                <i className="fa-brands fa-lg lg:text-4xl fa-github"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:w-[40%] ">
            <a
              href={resumePdf}
              target="_blank"
              className="cursor-pointer flex justify-center lg:w-full transition transform hover:-translate-y-1"
            >
              <img
                className="lg:w-[80%] lg:h-auto"
                src={resumeImg}
                alt="Resume image"
              />
              <div className="read-resume-bottom"></div>
            </a>
            <a
              href={resumePdf}
              className="hidden lg:block cursor-pointer flex justify-center mt-5 transition transform hover:-translate-y-1"
              target="_blank"
            >
              <button className=" border-2 rounded-lg py-1 px-4 mt-2 text-3xl hover:bg-white hover:text-gray-500 duration-200">
                Read resume
              </button>
            </a>
            <a
              href={resumePdf}
              className="cursor-pointer flex justify-center"
              target="_blank"
            >
              <button className="border-2 rounded-lg py-.5 px-3 mt-2 text-lg lg:hidden">
                Read resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
