import React from 'react'

import typescriptIcon from "../images/icons8-typescript.svg";


const ProjectsSection = ({ mode }) => {
  return (
    <section className="flex flex-col justify-center items-center mt-20" id="projects">
      <h1 className='text-4xl font-bold mb-4 md:text-5xl'>Projects</h1>
      <div className={mode? "w-11/12 h-auto bg-gray-500 bg-opacity-50 rounded-lg p-5": "w-11/12 h-auto bg-white bg-opacity-20 rounded-lg p-5"}>
        <ul className="project-list">
          <li className="mb-10">
            <div className="flex flex-col md:flex-row">

              <div className="cursor-pointer flex justify-center items-center bg-white hidden md:block md:flex-1 w-64 md:m-5">
                <a href="https://bookmark-app-theta.vercel.app/Home" className='flex justify-center items-center'>
                  <p className="text-black">App</p>
                </a>
              </div>

              <div className='flex flex-col md:flex-1 md:p-10'>
                <div className="project-title-container">
                  <h3 className="text-3xl md:text-4xl font-bold text-center mb-3">Dog picture collection</h3>
                </div>

                <div className="cursor-pointer flex justify-center items-center bg-white h-40 md:hidden">
                  <a href="https://bookmark-app-theta.vercel.app/Home">
                    <p className="text-black">App</p>
                  </a>
                </div>

                <div className="discription-container">
                  <p className="my-8 text-xl md:text-3xl">
                    SNS-ish React app which users can post and find dog's
                    pictures. In finding page, the state is managed by React
                    tool kit and the picture data is fetched from Dog API.
                    Posted data are managed by Supabase. Managing API by using
                    redux thunk with RTK was quite challenging.
                  </p>
                  <div className="flex justify-center gap-2">
                    <i className="fa-brands fa-react text-2xl md:text-4xl"></i>
                    <img
                      alt="Typescript icon"
                      src={typescriptIcon}
                      className="w-8 h-8 md:w-11 md:h-11"
                    />
                    <i className="fa-brands fa-sass text-2xl md:text-4xl"></i>
                  </div>
                </div>
                <div className="cursor-pointer flex justify-center mt-5">
                  <a
                    href="https://github.com/Yuriko-Otorii"
                    className="github-link flex justify-center items-center gap-4 my-3"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github fa-lg title-icon text-4xl md:text-5xl"></i>
                    <p className="check-github text-xl md:text-3xl">Check the code!</p>
                  </a>
                </div>
              </div>
            </div>
          </li>
          
          <li className="mb-10">
            <div className="flex flex-col md:flex-row">

              <div className='flex flex-col md:flex-1 md:p-10'>
                <div className="project-title-container">
                  <h3 className="text-3xl md:text-4xl font-bold text-center mb-3">Bookmark manager</h3>
                </div>

                <div className="cursor-pointer flex justify-center items-center bg-white h-40 md:hidden">
                  <a href="https://bookmark-app-theta.vercel.app/Home">
                    <p className="text-black">App</p>
                  </a>
                </div>

                <div className="discription-container">
                  <p className="my-8 text-xl md:text-3xl">
                    My first React App which organizes web articles you like.
                    This App uses Hasura to store the data and fully
                    implemented CRUD functions. I learned how the graphQL
                    works through making this app.
                  </p>
                  <div className="flex justify-center gap-2">
                    <i className="fa-brands fa-react text-2xl md:text-4xl"></i>
                    <i className="fa-brands fa-square-js text-2xl md:text-4xl"></i>
                    <i className="fa-brands fa-sass text-2xl md:text-4xl"></i>
                  </div>
                </div>
                <div className="cursor-pointer flex justify-center mt-5">
                  <a
                    href="https://github.com/Yuriko-Otorii"
                    className="github-link flex justify-center items-center gap-4 my-3"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github fa-lg title-icon text-4xl md:text-5xl"></i>
                    <p className="check-github text-xl md:text-3xl">Check the code!</p>
                  </a>
                </div>
              </div>

              <div className="cursor-pointer flex justify-center items-center bg-white hidden md:block md:flex-1 w-64 md:m-5">
                <a href="https://bookmark-app-theta.vercel.app/Home" className='flex justify-center items-center'>
                  <p className="text-black">App</p>
                </a>
              </div>
            </div>
          </li>          
        </ul>
      </div>
    </section>
  )
}

export default ProjectsSection