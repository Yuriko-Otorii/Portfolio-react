import { useState, useEffect, useRef } from 'react'
import { init, send } from 'emailjs-com'

import { sectionAnimation } from './animations/sectionAnimation'


const { VITE_MAILJS_ACOUNT_KEY: accountKey,
        VITE_MAILJS_SERVICE_KEY: serviceKey,
        VITE_MAILJS_TEMPATE_KEY: templateKey
      } = import.meta.env

const ContactSection = ({ mode }) => {
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const sectionwrapper = useRef(null)
  
  useEffect(() => {
    sectionAnimation(sectionwrapper.current)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    sendMessage()
  }

  const sendMessage = () => {
    if (
      accountKey !== undefined &&
      serviceKey !== undefined &&
      templateKey !== undefined
      ) {
      init(accountKey);
  
      const param = {
        fName: fName,
        lName: lName,
        email: email,
        message,
      };

      send(serviceKey, templateKey, param).then(() => {
        window.alert('Your message is successfully sent!');
    
        setFName('');
        setLName('');
        setEmail('');
        setMessage('');
      });
    }
  }

  const disableCondition = fName === '' || lName === '' || email === '' || message === '';


  return (
    <section className="flex flex-col justify-center items-center mt-20" id="contacts">
        <h1 className='text-4xl font-bold mb-4 md:text-5xl'>Contact</h1>
        <div ref={sectionwrapper} className={mode? "w-11/12 h-auto bg-gray-500 bg-opacity-50 rounded-lg p-5": "w-11/12 h-auto bg-white bg-opacity-20 rounded-lg p-5"}>
          <p className="text-2xl md:text-4xl font-bold text-center mb-5">I look forwad to hering from you!</p>
          <div className="contact-section-container">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <label className="block mb-5 w-full md:w-2/3 text-lg flex flex-col items-center">
                <span className='mr-auto ml-4 md:ml-7 md:text-2xl'>First name</span>
                <input
                  type="text"
                  className="block w-11/12 mt-1 p-1 border-gray-300 text-gray-900 text-lg md:text-2xl rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                  required
                />
              </label>
              <label className="block mb-5 w-full md:w-2/3 text-lg flex flex-col items-center">
                <span className='mr-auto ml-4 md:ml-7 md:text-2xl'>Last name</span>
                <input
                  type="text"
                  className="block w-11/12 mt-1 p-1 border-gray-300 text-gray-900 text-lg md:text-2xl rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                  required
                />
              </label>
              <label className="block mb-5 w-full md:w-2/3 text-lg flex flex-col items-center">
                <span className='mr-auto ml-4 md:ml-7 md:text-2xl'>Email address</span>
                <input
                  type="email"
                  className="block w-11/12 mt-1 p-1 border-gray-300 text-gray-900 text-lg md:text-2xl rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="block mb-5 w-full md:w-2/3 text-lg flex flex-col items-center">
                <span className='mr-auto ml-4 md:ml-7 md:text-2xl'>Message</span>
                <textarea
                  className="block w-11/12 mt-1 p-1 border-gray-300 text-gray-900 text-lg md:text-2xl rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  disabled={disableCondition}
                  className="border-2 border-white rounded-lg py-0.5 px-8 md:py-1 md:px-16 mt-2 text-xl md:text-3xl bg-white text-gray-500 duration-200 disabled:bg-transparent disabled:text-gray-500 disabled:border-gray-500 hover:translate hover:duration-100 transition transform disabled:translate-y-0 hover:-translate-y-0.5"
                >
                  Send
                </button>
              </div>
            </form>
            <div className='flex flex-col items-center'>
              <div className='text-2xl'>Or</div>
              <a href="mailto:yuriko.otorii@gmail.com">
                <button className="border-2 border-white rounded-lg py-0.5 px-6 md:py-1 md:px-16 mt-2 text-xl md:text-3xl hover:bg-white hover:text-gray-500 duration-200">
                  <i className="fa-regular fa-envelope"></i> Open your mailer
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactSection