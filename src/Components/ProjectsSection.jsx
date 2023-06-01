import { useEffect, useRef } from "react";

import typescriptIcon from "../images/icons8-typescript.svg";
import tailwindIcon from "../images/tailwindcss-icon.svg";
import mongodbIcon from "../images/mongodb-icon.svg";
import postgresIcon from "../images/postgres-icon.png";

import mtgAppAvailabilityImg from "../images/Appointly-availability-page.png";
import mtgAppGuestCalendarImg from "../images/Appointly-guest-calendar.png";
import trelloCloneImg from "../images/Task-Manager-board.jpg";
import trelloHomeImg from "../images/Task-manager-home.jpg";
import jobHuntImg from "../images/Job-Hunt-Manager-applied-list.jpg";
import jobHuntDetailImg from "../images/Job-Hunt-Manager-detail.jpg";
import dogPicFindImg from "../images/dog-app-find.jpg";
import dogPicProfileImg from "../images/dog-app-profile.jpg";

import { sectionAnimation } from "./animations/sectionAnimation";

const ProjectsSection = ({ mode }) => {
  const sectionwrapper = useRef(null);
  useEffect(() => {
    sectionAnimation(sectionwrapper.current);
  }, []);

  return (
    <section
      className="flex flex-col justify-center items-center mt-20"
      id="projects"
    >
      <h1 className="text-4xl font-bold mb-4 lg:text-5xl">Projects</h1>
      <div
        ref={sectionwrapper}
        className={
          mode
            ? "w-11/12 h-auto bg-gray-500 bg-opacity-50 rounded-lg p-5"
            : "w-11/12 h-auto bg-white bg-opacity-20 rounded-lg p-5"
        }
      >
        <ul className="project-list">
          <li className="mb-10">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col lg:flex-1 lg:p-10">
                <div className="flex items-center justify-center mb-3">
                  <h3 className="text-3xl lg:text-4xl font-bold text-center">
                    Appointly
                  </h3>
                  <a
                    href="https://github.com/Yuriko-Otorii/Appointly"
                    className="cursor-pointer github-link flex justify-center items-center gap-4 my-3"
                    target="_blank"
                  >
                    <i className="animate-swaing fa-brands fa-github fa-lg title-icon text-3xl ml-2 lg:text-5xl lg:hover:text-gray-800"></i>
                  </a>
                </div>
                <a
                  className="cursor-pointer flex items-center justify-center mb-5 text-xl md:text-3xl hover:text-blue-500"
                  href="https://appointly-mtg.vercel.app"
                  target="_blank"
                >
                  <p className="underline">#Demo</p>
                  <i className="fa-solid fa-arrow-pointer ml-2 text-[1rem] md:text-[1.35rem]"></i>
                </a>

                <a
                  className="cursor-pointer flex justify-center items-center lg:hidden"
                  href="https://appointly-mtg.vercel.app"
                  target="_blank"
                >
                  <div className="flex flex-col gap-4">
                    <img
                      alt="Appointly app image"
                      src={mtgAppAvailabilityImg}
                    />
                    <img
                      alt="Appointly app image"
                      src={mtgAppGuestCalendarImg}
                    />
                  </div>
                </a>

                <div className="discription-container">
                  <p className="my-8 text-xl lg:text-3xl">
                    A MERN app that manages all your meeting schedules. Users
                    can set the availability to weekly and daily so that clients
                    are only allowed to select the date within the user s
                    availability. Users can also check all the meetings. There
                    are rescheduled functions and cancel functions as well. 
                  </p>
                  <p className="my-8 text-xl lg:text-3xl">
                    The Challenging part was implemented showing the host's
                    availability on the calendar for invitees. I needed to
                    consider numerous things such as coloring the dates that are
                    available, already booked dates and times, and so on.
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    <i className="fa-brands fa-react text-3xl lg:text-4xl"></i>
                    <i className="fa-brands fa-square-js text-3xl lg:text-4xl"></i>
                    <i className="fa-brands fa-lg text-3xl lg:text-4xl fa-node-js"></i>
                    <img
                      alt="Tailwind icon"
                      src={tailwindIcon}
                      className="w-[2.2rem] h-[2.2rem] lg:w-11 lg:h-11"
                    />
                    <img
                      alt="mongoDB icon"
                      src={mongodbIcon}
                      className="w-[2rem] h-[2rem] lg:w-11 lg:h-11"
                    />
                  </div>
                </div>
              </div>

              <a
                className="cursor-pointer flex justify-center items-center my-auto items-stretch hidden lg:block lg:flex-1 transition transform hover:-translate-y-1"
                href="https://appointly-mtg.vercel.app"
                target="_blank"
              >
                <div className="flex flex-col gap-4">
                  <img alt="Appointly app image" src={mtgAppAvailabilityImg} />
                  <img alt="Appointly app image" src={mtgAppGuestCalendarImg} />
                </div>
              </a>
            </div>
            <hr className="mt-5" />
          </li>

          <li className="mb-10">
            <div className="flex flex-col lg:flex-row">
              <a
                className="cursor-pointer hidden lg:block lg:flex-1 transition transform hover:-translate-y-1 my-auto"
                href="https://trello-clone-mern.vercel.app"
                target="_blank"
              >
                <div className="flex flex-col gap-4">
                  <img alt="Trello app image" src={trelloCloneImg} />
                  <img alt="Trello app image" src={trelloHomeImg} />
                </div>
              </a>

              <div className="flex flex-col lg:flex-1 lg:p-10">
                <div className="flex items-center justify-center mb-3">
                  <h3 className="text-3xl lg:text-4xl font-bold text-center">
                    Task manager app
                  </h3>
                  <a
                    href="https://github.com/Yuriko-Otorii/Trello-clone"
                    className="cursor-pointer github-link flex justify-center items-center gap-4 my-3"
                    target="_blank"
                  >
                    <i className="animate-swaing fa-brands fa-github fa-lg title-icon text-3xl ml-2 lg:text-5xl lg:hover:text-gray-800"></i>
                  </a>
                </div>

                <a
                  className="cursor-pointer flex items-center justify-center mb-5 text-xl md:text-3xl hover:text-blue-500"
                  href="https://trello-clone-mern.vercel.app"
                  target="_blank"
                >
                  <p className="underline">#Demo</p>
                  <i className="fa-solid fa-arrow-pointer ml-2 text-[1rem] md:text-[1.35rem]"></i>
                </a>

                <a
                  className="cursor-pointer flex justify-center items-center lg:hidden"
                  href="https://trello-clone-mern.vercel.app"
                  target="_blank"
                >
                  <div className="flex flex-col gap-4">
                    <img alt="Job hunt app image" src={trelloCloneImg} />
                    <img alt="Job hunt app image" src={trelloHomeImg} />
                  </div>
                </a>

                <div className="discription-container">
                  <p className="my-8 text-xl lg:text-3xl">
                    A MERN stack app which Trello-ish task management app. You
                    can create task cards on each board and organize those tasks
                    by drag and drop. Setting a due date and priority for each
                    card and you can check near-due date tasks and high-priority
                    tasks on my page section.
                  </p>
                  <p className="my-8 text-xl lg:text-3xl">
                    Implementing the delete project
                    function was one of the tough part. Each projects contain
                    boards list, each board contain task list, tasks, each task
                    contains comment list, I need to handle one by one
                    asynchronously.
                  </p>
                  <div className="flex justify-center gap-2">
                    <i className="fa-brands fa-react text-3xl lg:text-4xl"></i>
                    <i className="fa-brands fa-square-js text-3xl lg:text-4xl"></i>
                    <i className="fa-brands fa-lg text-3xl lg:text-4xl fa-node-js"></i>
                    <img
                      alt="Tailwind icon"
                      src={tailwindIcon}
                      className="w-[2.2rem] h-[2.2rem] lg:w-11 lg:h-11"
                    />
                    <img
                      alt="mongoDB icon"
                      src={mongodbIcon}
                      className="w-[2rem] h-[2rem] lg:w-11 lg:h-11"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-5" />
          </li>

          <li className="mb-10">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col lg:flex-1 lg:p-10">
                <div className="flex items-center justify-center mb-3">
                  <h3 className="text-3xl lg:text-4xl font-bold text-center">
                    Job hunt organizer app
                  </h3>
                  <a
                    href="https://github.com/Yuriko-Otorii/Job-hunt-manager-postgres"
                    className="cursor-pointer github-link flex justify-center items-center gap-4 my-3"
                    target="_blank"
                  >
                    <i className="animate-swaing fa-brands fa-github fa-lg title-icon text-3xl ml-2 lg:text-5xl lg:hover:text-gray-800"></i>
                  </a>
                </div>
                <a
                  className="cursor-pointer flex items-center justify-center mb-5 text-xl md:text-3xl hover:text-blue-500"
                  href="https://job-hunt-manager-pg.vercel.app/"
                  target="_blank"
                >
                  <p className="underline">#Demo</p>
                  <i className="fa-solid fa-arrow-pointer ml-2 text-[1rem] md:text-[1.35rem]"></i>
                </a>

                <a
                  className="cursor-pointer flex justify-center items-center lg:hidden"
                  href="https://job-hunt-manager-pg.vercel.app/"
                  target="_blank"
                >
                  <div className="flex flex-col gap-4">
                    <img alt="Job hunt app image" src={jobHuntImg} />
                    <img alt="Job hunt app image" src={jobHuntDetailImg} />
                  </div>
                </a>

                <div className="discription-container">
                  <p className="my-8 text-xl lg:text-3xl">
                    Full stack app by Express.js, EJS, and Postgres. Using this
                    app, you can track which company you applied for and record
                    the status of the process with a simple and beautiful UI.
                    This app has many features like filtering records by status,
                    sharing application status for motivating, and so on. The
                    difficulty of this app was the deployment part.
                  </p>
                  <p className="my-8 text-xl lg:text-3xl">
                    In the begging, I use MySql which is a database service provided by
                    Railway. I used the free tier so that I used up all the
                    usage in the middle of the month. it means I could not allow
                    to use the app until next month. To resolve this problem, I
                    migrated to Postgres provided by Neon.
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    <i className="fa-brands fa-square-js text-3xl lg:text-4xl"></i>
                    <i className="fa-brands fa-lg text-3xl lg:text-4xl fa-node-js"></i>
                    <img
                      alt="Tailwind icon"
                      src={tailwindIcon}
                      className="w-[2.2rem] h-[2.2rem] lg:w-11 lg:h-11"
                    />
                    <img
                      alt="Postgres icon"
                      src={postgresIcon}
                      className="w-[2rem] h-[2rem] lg:w-10 lg:h-10"
                    />
                  </div>
                </div>
              </div>

              <a
                className="cursor-pointer flex justify-center items-center my-auto items-stretch hidden lg:block lg:flex-1 transition transform hover:-translate-y-1"
                href="https://job-hunt-manager-pg.vercel.app/"
                target="_blank"
              >
                <div className="flex flex-col gap-4">
                  <img alt="Job hunt app image" src={jobHuntImg} />
                  <img alt="Job hunt app image" src={jobHuntDetailImg} />
                </div>
              </a>
            </div>
            <hr className="mt-5" />
          </li>

          <li className="mb-10">
            <div className="flex flex-col lg:flex-row">
              <a
                className="cursor-pointer hidden lg:block lg:flex-1 transition transform hover:-translate-y-1 my-auto"
                href="https://dog-pictures.vercel.app"
                target="_blank"
              >
                <div className="flex flex-col gap-4">
                  <img alt="Job hunt app image" src={dogPicFindImg} />
                  <img alt="Job hunt app image" src={dogPicProfileImg} />
                </div>
              </a>

              <div className="flex flex-col lg:flex-1 lg:p-10">
                <div className="flex items-center justify-center mb-3">
                  <h3 className="text-3xl lg:text-4xl font-bold text-center">
                    Dog picture collection app
                  </h3>
                  <a
                    href="https://github.com/Yuriko-Otorii/Dog-picture-collection"
                    className="cursor-pointer github-link flex justify-center items-center gap-4 my-3"
                    target="_blank"
                  >
                    <i className="animate-swaing fa-brands fa-github fa-lg title-icon text-3xl ml-2 lg:text-5xl lg:hover:text-gray-800"></i>
                  </a>
                </div>

                <a
                  className="cursor-pointer flex items-center justify-center mb-5 text-xl md:text-3xl hover:text-blue-500"
                  href="https://dog-pictures.vercel.app"
                  target="_blank"
                >
                  <p className="underline">#Demo</p>
                  <i className="fa-solid fa-arrow-pointer ml-2 text-[1rem] md:text-[1.35rem]"></i>
                </a>
                <a
                  className="cursor-pointer flex justify-center items-center lg:hidden"
                  href="https://dog-pictures.vercel.app"
                  target="_blank"
                >
                  <div className="flex flex-col gap-4">
                    <img alt="Job hunt app image" src={dogPicFindImg} />
                    <img alt="Job hunt app image" src={dogPicProfileImg} />
                  </div>
                </a>

                <div className="discription-container">
                  <p className="my-8 text-xl lg:text-3xl">
                    SNS-ish React app which users can post and find dog's
                    pictures. In finding page, the state is managed by React
                    tool kit and the picture data is fetched from Dog API.
                    Posted data are managed by Supabase. Managing API by using
                    redux thunk with RTK was quite challenging.
                  </p>
                  <p className="my-8 text-xl lg:text-3xl">
                    *There is a issue on Supabase GitHub related to sign up and
                    login methods. I am currently migrating to other services.
                  </p>
                  <div className="flex justify-center gap-2">
                    <i className="fa-brands fa-react text-3xl lg:text-4xl"></i>
                    <img
                      alt="Typescript icon"
                      src={typescriptIcon}
                      className="w-9 h-9 lg:w-11 lg:h-11"
                    />
                    <i className="fa-brands fa-sass text-3xl lg:text-4xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
