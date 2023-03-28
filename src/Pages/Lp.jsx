import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'

const Lp = () => {
  const [rotationDegrees, setRotateDegrees] = useState(80)
  const leftEye = useRef(null)
  const rightEye = useRef(null)


  const handleMouseMove = (event) => {
    const eyeX = (leftEye.current.getBoundingClientRect().left) + (leftEye.current.clientWidth/2)
    const eyeY = (leftEye.current.getBoundingClientRect().top) + (leftEye.current.clientHeight/2)

    const mouseX = event.clientX
    const mouseY = event.clientY
    let radian = Math.atan2(mouseX - eyeX, mouseY - eyeY);
    setRotateDegrees(radian * (180 / Math.PI) * -1 + 180)
    // console.log(rotationDegrees);
  };

  return (
    <>
      <div id="cursor" className="cursor"></div>
      <div className="w-screen h-screen flex flex-col items-center justify-center" onMouseMove={handleMouseMove}>
      {/* <div className="w-screen h-screen animate-floating flex flex-col items-center justify-center" onMouseMove={handleMouseMove}> */}
        <Link to="/home">
          <div className="cursor-pointer w-36 h-36 rounded-full bg-sky-300 relative opacity-60">
            <div className="flex absolute top-[43%] left-1/2 -translate-x-1/2	-translate-y-1/2">
              <div ref={leftEye} className={`w-12 h-[3.1rem] rounded-full bg-gray-100 relative rotate-[${rotationDegrees}deg]`}>
              {/* <div ref={leftEye} className={`w-12 h-[3.1rem] rounded-full bg-gray-100 relative rotate-[${rotationDegrees}deg]`}> */}
                <div className={`w-[1.4rem] h-[1.4rem] rounded-full bg-black z-50`}></div>
                {/* <div ref={leftEye} className={`w-[1.4rem] h-[1.4rem] rounded-full bg-black z-50 absolute top-[20%] left-[40%] rotate-[${rotationDegrees}deg]`}></div> */}
                {/* <div className={`w-[1.4rem] h-[1.4rem] rounded-full bg-black z-50 absolute top-[${leftEyePosition.y}] left-[${leftEyePosition.x}]`}></div> */}
                <div className="changed-left-eyeball changed-eyeballs"></div>
              </div>
              <div ref={rightEye} className={`w-12 h-[3.1rem] rounded-full bg-gray-100 relative rotate-[${rotationDegrees}deg]`}>
                <div className={`w-[1.4rem] h-[1.4rem] rounded-full bg-black z-50 `}></div>
                {/* <div ref={rightEye} className={`w-[1.4rem] h-[1.4rem] rounded-full bg-black z-50 absolute top-[20%] right-[40%] rotate-[${rotationDegrees}deg]`}></div> */}
                {/* <div className={`w-[1.4rem] h-[1.4rem] rounded-full bg-black z-50 absolute top-[${rightEyePosition.y}] right-[${rightEyePosition.x}]`}></div> */}
                <div className="changed-right-eyeball changed-eyeballs"></div>
              </div>
            </div>
          </div>
        </Link>
        <div className="w-6 h-4 opacity-60 bg-sky-300 clip-balloon-tail"></div>
        <div className="h-16 border border-sky-300 bg-sky-300 opacity-60"></div>
      </div>
      <div className="absolute top-[10%] right-2">
        <div className="w-28 h-16 border-2 border-gray-400 rounded-full relative flex justify-center items-center">
          <p className="text-2xl">Pop me!</p>
        </div>
        <div className="w-6 h-6 border-2 border-gray-400 rounded-full absolute top-[80%] left-[-15%]"></div>
        <div className="w-4 h-4 border-2 border-gray-400 rounded-full absolute top-[115%] left-[-25%]"></div>
      </div>
    </>
  )
}

export default Lp