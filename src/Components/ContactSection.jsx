import React, { useState } from 'react'

const ContactSection = () => {
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <section className="flex flex-col justify-center items-center mt-20" id="contacts">
        <h1 className='text-4xl font-bold mb-4 md:text-5xl'>Contact</h1>
        <div className="w-11/12 h-auto bg-gray-100 bg-opacity-20 rounded-lg p-5">
          <p className="text-2xl md:text-4xl font-bold text-center mb-5">I look forwad to hering from you!</p>
          <div className="contact-section-container">
            <form action="mailto:snnp.ad.pnts@gmail.com" className="flex flex-col items-center">
              <label className="block mb-5 w-full md:w-2/3 flex flex-col items-center">
                <span className='mr-auto ml-4 md:ml-7 md:text-2xl'>First name</span>
                <input
                  type="text"
                  className="block w-11/12 mt-1 p-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                  required
                />
              </label>
              <label className="block mb-5 w-full md:w-2/3 flex flex-col items-center">
                <span className='mr-auto ml-4 md:ml-7 md:text-2xl'>Last name</span>
                <input
                  type="text"
                  className="block w-11/12 mt-1 p-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                  required
                />
              </label>
              <label className="block mb-5 w-full md:w-2/3 flex flex-col items-center">
                <span className='mr-auto ml-4 md:ml-7 md:text-2xl'>Email address</span>
                <input
                  type="email"
                  className="block w-11/12 mt-1 p-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="block mb-5 w-full md:w-2/3 flex flex-col items-center">
                <span className='mr-auto ml-4 md:ml-7 md:text-2xl'>Message</span>
                <textarea
                  className="block w-11/12 mt-1 p-1 bord  er-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="bg-gray-500 border-2 border-gray-300 rounded-lg py-0.5 px-8 mt-2 text-xl hover:bg-gray-400"
                >
                  Send
                </button>
              </div>
            </form>
            {/* <div className="btn-container">
              <p>or</p>
              <a href="mailto:snnp.ad.pnts@gmail.com">
                <button className="mailer-open-btn">
                  <i className="fa-regular fa-envelope"></i> Open your mailer
                </button>
              </a>
            </div> */}
            {/* <div className="email-copy-container">
                <p className="email-title-msg">Copy email from here.</p>
                <input
                  className="email-address"
                  type="text"
                  id="email"
                  value="snnp.ad.pnts@gmail.com"
                />
                <button className="email-copy-btn email-address">Copy email</button>
              </div> */}
          </div>
        </div>
      </section>
  )
}

export default ContactSection