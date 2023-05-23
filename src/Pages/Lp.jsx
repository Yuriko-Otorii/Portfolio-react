import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'

const Lp = () => {
  const [leftRotationDegrees, setLeftRotateDegrees] = useState(0)
  const [rightRotationDegrees, setRighttRotateDegrees] = useState(0)
  const leftEye = useRef(null)
  const rightEye = useRef(null)
  const hoveredLeftEye = useRef(null)
  const hoveredRightEye = useRef(null)
  const balloonBody = useRef(null)

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [leftRotationDegrees, rightRotationDegrees]);


  const handleMouseOver = () => {
    leftEye.current.style.display = "none"
    rightEye.current.style.display = "none"
    hoveredLeftEye.current.style.display = "block"
    hoveredRightEye.current.style.display = "block"
  }

  const handleMouseOut = () => {
    leftEye.current.style.display = "block"
    rightEye.current.style.display = "block"
    hoveredLeftEye.current.style.display = "none"
    hoveredRightEye.current.style.display = "none"
  }

  const handleMouseMove = (event) => {
    const eyeX = (leftEye.current.getBoundingClientRect().left) + (leftEye.current.clientWidth/2)
    const eyeY = (leftEye.current.getBoundingClientRect().top) + (leftEye.current.clientHeight/2)
    const mouseX = event.clientX
    const mouseY = event.clientY
    let radian = Math.atan2(mouseX - eyeX, mouseY - eyeY);
    setLeftRotateDegrees(radian * (180 / Math.PI) * -1 + 80)
    setRighttRotateDegrees(radian * (180 / Math.PI) * -1 + 250)
  };  



  return (
    <>
      <div id="cursor" className="cursor"></div>
      <div className="w-screen h-screen flex flex-col items-center justify-center" onMouseMove={handleMouseMove}>
        {/* <Link to="/"> */}
          <div ref={balloonBody} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="cursor-pointer w-36 h-36 rounded-full bg-sky-300 relative opacity-60">
            <div className="flex gap-[.1rem] absolute top-[2rem] left-[1.15rem]">
              <div ref={leftEye} className="flex w-[3.3rem] h-[3.3rem] bg-[#fff] rounded-full" style={{ transform: `rotate(${leftRotationDegrees}deg)`}}>
                <div className={`absolute rounded-full w-[1.7rem] h-[1.7rem] top-[.7rem] right-[.2rem] bg-gray-900`}></div>
                <div className={`absolute top-[.7rem] right-[.2rem]`}></div>
              </div>
              <div ref={hoveredLeftEye} className="flex w-[3.3rem] h-[3.3rem] bg-[#fff] rounded-full" style={{ display: 'none'}}>
                <div className={`absolute top-[.4rem] right-[.7rem]`} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-900">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                </div>
              </div>
              <div ref={rightEye} className="flex w-[3.3rem] h-[3.3rem] bg-[#fff] rounded-full" style={{ transform: `rotate(${rightRotationDegrees}deg)`}}>
                <div className={`absolute rounded-full w-[1.7rem] h-[1.7rem] top-[.7rem] left-[.2rem] bg-gray-900`}></div>
                <div className={`absolute top-[.7rem] left-[.2rem]`}></div>
              </div>
              <div ref={hoveredRightEye} className="flex w-[3.3rem] h-[3.3rem] bg-[#fff] rounded-full" style={{ display: 'none'}}>
                <div className={`absolute top-[.4rem] left-[.7rem]`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-900">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                </div>
              </div>
            </div>
          </div>
        {/* </Link> */}
        <div className="w-6 h-4 opacity-60 bg-sky-300 clip-balloon-tail"></div>
        <div className="h-16 border border-sky-300 bg-sky-300 opacity-60"></div>
      </div>
      <div className="absolute top-[24%] right-2">
        <div className="w-28 h-16 border border-gray-700 rounded-full relative flex justify-center items-center">
          <p className="text-2xl">Pop me!</p>
        </div>
        <div className="w-6 h-6 border border-gray-700 rounded-full absolute top-[100%] left-[-10%]"></div>
        <div className="w-4 h-4 border border-gray-700 rounded-full absolute top-[140%] left-[-25%]"></div>
      </div>
    </>
  )
}

export default Lp