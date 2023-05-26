import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { setLpAnimation } from "../Components/animations/lpAnimation";
import { TransitionState } from "../App";

const Lp = () => {
  const [leftRotationDegrees, setLeftRotateDegrees] = useState(0);
  const [rightRotationDegrees, setRighttRotateDegrees] = useState(0);
  const leftEye = useRef(null);
  const rightEye = useRef(null);
  const hoveredLeftEye = useRef(null);
  const hoveredRightEye = useRef(null);
  const cloudElem = useRef(null);
  const nameElem = useRef(null);
  const positionElem = useRef(null);
  const balloonWrapper = useRef(null);
  const popme = useRef(null);
  const navigate = useNavigate()
  const { setIsTransition } = useContext(TransitionState)


  useLayoutEffect(() => {
    setLpAnimation(cloudElem, nameElem, positionElem, balloonWrapper, popme);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [leftRotationDegrees, rightRotationDegrees]);

  const handleMouseOver = () => {
    leftEye.current && (leftEye.current.style.display = "none");
    rightEye.current && (rightEye.current.style.display = "none");
    hoveredLeftEye.current && (hoveredLeftEye.current.style.display = "block");
    hoveredRightEye.current && (hoveredRightEye.current.style.display = "block");
  };

  const handleMouseOut = () => {
    leftEye.current && (leftEye.current.style.display = "block");
    rightEye.current && (rightEye.current.style.display = "block");
    hoveredLeftEye.current && (hoveredLeftEye.current.style.display = "none");
    hoveredRightEye.current && (hoveredRightEye.current.style.display = "none");
  };

  const handleMouseMove = (event) => {
    const eyeX =
      leftEye.current.getBoundingClientRect().left +
      leftEye.current.clientWidth / 2;
    const eyeY =
      leftEye.current.getBoundingClientRect().top +
      leftEye.current.clientHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    let radian = Math.atan2(mouseX - eyeX, mouseY - eyeY);
    setLeftRotateDegrees(radian * (180 / Math.PI) * -1 + 80);
    setRighttRotateDegrees(radian * (180 / Math.PI) * -1 + 270);
  };

  const handleClick = (e) => {
    e.preventDefault()
    setIsTransition(true)
    navigate('/home')
  }

  return (
    <>
      <div
        ref={cloudElem}
        className={`flex justify-center items-center w-screen h-[20rem] bg-gradient-to-b from-sky-300 to-white`}
      >
        <div className="flex flex-col items-center justify-end pb-[1rem] w-[20rem] h-[5rem] rounded-full relative bg-white">
          <div className="w-[8rem] h-[8rem] rounded-full bg-gray-600 bg-white absolute top-[-80%] left-[10%] z-10"></div>
          <div className="w-[10rem] h-[10rem] rounded-full bg-gray-600 bg-white absolute top-[-120%] left-[40%] z-10"></div>
          <div className="flex flex-col items-center">
            <div
              ref={nameElem}
              className="text-[2.8rem] font-bold font-poorStory text-sky-700 z-20"
            >
              Yuriko Otorii
            </div>
            <div
              ref={positionElem}
              className="text-[1.7rem] font-bold font-poorStory text-sky-700 z-20"
            >
              Full-stack developer
            </div>
          </div>
        </div>
      </div>
      <div id="cursor" className="cursor"></div>
      <div
        ref={balloonWrapper}
        className="animate-floating z-50 flex flex-col items-center justify-center absolute top-[60%] md:top-[50%] left-[31.5%] md:left-[43%]"
        onMouseMove={handleMouseMove}
      >
        <div className="relative">
          <div onClick={handleClick}>
            <div
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className="cursor-pointer w-[8rem] h-[8rem] rounded-full bg-sky-300 opacity-60"
            >
              <div className="flex gap-[.1rem] absolute top-[2rem] left-[.95rem]">
                <div
                  ref={leftEye}
                  className="flex w-[3rem] h-[3rem] bg-[#fff] rounded-full"
                  style={{ transform: `rotate(${leftRotationDegrees}deg)` }}
                >
                  <div
                    className={`absolute rounded-full w-[1.7rem] h-[1.7rem] top-[.7rem] right-[.2rem] bg-gray-900`}
                  ></div>
                  <div className={`absolute top-[.7rem] right-[.2rem]`}></div>
                </div>
                <div
                  ref={hoveredLeftEye}
                  className="flex w-[3rem] h-[3rem] bg-[#fff] rounded-full"
                  style={{ display: "none" }}
                >
                  <div className={`absolute top-[.4rem] right-[.4rem]`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-gray-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  ref={rightEye}
                  className="flex w-[3rem] h-[3rem] bg-[#fff] rounded-full"
                  style={{ transform: `rotate(${rightRotationDegrees}deg)` }}
                >
                  <div
                    className={`absolute rounded-full w-[1.7rem] h-[1.7rem] top-[.7rem] left-[.2rem] bg-gray-900`}
                  ></div>
                  <div className={`absolute top-[.7rem] left-[.2rem]`}></div>
                </div>
                <div
                  ref={hoveredRightEye}
                  className="flex w-[3rem] h-[3rem] bg-[#fff] rounded-full"
                  style={{ display: "none" }}
                >
                  <div className={`absolute top-[.4rem] left-[.4rem]`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-gray-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div
              ref={popme}
              className="absolute top-[-70%] md:top-[-20%] left-[90%] md:left-[130%] right-2"
            >
              <div className="relative">
                <div className="w-28 h-[3.5rem] border border-gray-700 rounded-full flex justify-center items-center">
                  <p className="text-2xl">Pop me!</p>
                </div>
                <div className="w-6 h-6 border border-gray-700 rounded-full absolute top-[105%] left-[0%]"></div>
                <div className="w-4 h-4 border border-gray-700 rounded-full absolute top-[150%] right-[0%]"></div>
              </div>
            </div>
          </div>
        <div className="w-6 h-4 opacity-60 bg-sky-300 clip-balloon-tail"></div>
        <div className="h-16 border border-sky-300 bg-sky-300 opacity-60"></div>
      </div>
    </>
  );
};

export default Lp;
