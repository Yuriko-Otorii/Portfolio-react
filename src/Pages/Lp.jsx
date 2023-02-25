import React from 'react'

const Lp = () => {
  return (
    <>
      <div id="cursor" className="cursor"></div>
      <div className="balloon-wrapper">
        <a href="./home.html">
          <div className="balloon-body">
            <div className="eyes-wrapper">
              <div className="left-eye-outline">
                <div className="left-eyeball eyeballs"></div>
                <div className="changed-left-eyeball changed-eyeballs"></div>
              </div>
              <div className="right-eye-outline">
                <div className="right-eyeball eyeballs"></div>
                <div className="changed-right-eyeball changed-eyeballs"></div>
              </div>
            </div>
          </div>
        </a>
        <div className="balloon-tail"></div>
        <div className="balloon-string"></div>
      </div>
      <div className="bubble-wrapper">
        <div className="bubble">
          <p className="bubble-text">Pop me!</p>
        </div>
        <div className="small-bubbles"></div>
      </div>
    </>
  )
}

export default Lp