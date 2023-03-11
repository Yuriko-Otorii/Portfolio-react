import React from 'react'
import { HashLink } from 'react-router-hash-link'

import moonIcon from '../images/moon-icon.png'

const TopPageIcon = ({ mode }) => {
  return (
    <div className="flex flex-col justify-center fixed bottom-5 right-3 md:right-5">
        <HashLink smooth to='#top' className=''>
            {mode 
            ?   <>
                    <p className="mb-2 md:text-2xl">Page Top</p>
                    <img className="animate-floating moon-icon w-9 h-9 md:w-16 md:h-16 mx-auto" alt="Moon icon" src={moonIcon} />            
                </>  
            :   <>
                    <p className="mb-2 md:text-2xl">Page Top</p>
                    <div className="animate-floating flex flex-col justify-center items-center">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-sky-400 rounded-full mx-auto"></div>
                        <div className="clip-balloon-tail w-2 h-2 md:w-3 md:h-3 bg-sky-400"></div>
                        <div className="h-3 md:h-5 bg-sky-400 border border-sky-400"></div>
                    </div>
                </>   
            }

        </HashLink>        
    </div>
  )
}

export default TopPageIcon