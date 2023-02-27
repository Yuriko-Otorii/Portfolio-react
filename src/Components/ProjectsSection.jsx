import React from 'react'

import tsIcon from '../images/typescript-icon.png'

const ProjectsSection = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-20" id="projects">
      <h1 className='text-4xl font-bold mb-4'>Projects</h1>
      <div className="w-11/12 h-auto bg-gray-100 bg-opacity-20 rounded-lg p-5">
        <ul className="project-list">
          <li className="mb-10">
            <div className="display-description">
              <div className="description-container">
                <div className="project-title-container">
                  <h3 className="text-3xl font-bold text-center mb-3">Dog picture collection</h3>
                </div>

                <div className="flex justify-center items-center bg-white h-40">
                  <a href="https://bookmark-app-theta.vercel.app/Home">
                    <p className="text-black">App</p>
                  </a>
                </div>

                <div className="discription-container">
                  <p className="my-6 text-xl">
                    SNS-ish React app which users can post and find dog's
                    pictures. In finding page, the state is managed by React
                    tool kit and the picture data is fetched from Dog API.
                    Posted data are managed by Supabase. Managing API by using
                    redux thunk with RTK was quite challenging.
                  </p>
                  <div className="flex justify-center gap-2">
                    <i className="fa-brands fa-react text-2xl"></i>
                    <img
                      alt="Typescript icon"
                      src={`${tsIcon}`}
                      className="text-sm"
                    />
                    <i className="fa-brands fa-sass text-2xl"></i>
                  </div>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://github.com/Yuriko-Otorii"
                    className="github-link flex justify-center items-center gap-4 my-3"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github fa-lg title-icon text-4xl"></i>
                    <p className="check-github text-xl">Check the code!</p>
                  </a>
                </div>
              </div>
              <div className="hidden md:display-block">
                <a href="https://bookmark-app-theta.vercel.app/Home">
                  <p className="ptoject-title">App</p>
                </a>
              </div>
            </div>
          </li>
          <li className="mb-10">
            <div className="display-description">
              <div className="project-img-container">
                <a href="https://bookmark-app-theta.vercel.app/Home">
                  <p className="text-2xl font-bold text-center mb-3">Bookmark manager</p>
                </a>
              </div>
              <div className="description-container">
                <div className="hidden md:display-block">
                  <h3 className="project-title">Bookmark manager</h3>
                </div>

                <div className="flex justify-center items-center bg-white h-40">
                  <a href="https://bookmark-app-theta.vercel.app/Home">
                    <p className="text-black">Bookmark manager</p>
                  </a>
                </div>

                <div className="discription-container">
                  <p className="my-6 text-xl">
                    My first React App which organizes web articles you like.
                    This App uses Hasura to store the data and fully
                    implemented CRUD functions. I learned how the graphQL
                    works through making this app.
                  </p>
                  <div className="flex justify-center gap-2">
                    <i className="fa-brands fa-react text-2xl"></i>
                    <i className="fa-brands fa-square-js text-2xl"></i>
                    <i className="fa-brands fa-sass text-2xl"></i>
                  </div>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://github.com/Yuriko-Otorii"
                    className="github-link flex justify-center items-center gap-4 my-3"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github fa-lg title-icon text-4xl"></i>
                    <p className="check-github text-xl  ">Check the code!</p>
                  </a>
                </div>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  )
}

export default ProjectsSection