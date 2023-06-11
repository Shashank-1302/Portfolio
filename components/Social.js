import React from 'react'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

const Social = () => {
  return (
    <div >
        <div className="flex flex-row items-center justify-center space-x-2 mb-1 ">
          <a href="https://github.com/Shashank-1302" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black rounded-lg shadow-inner hover:text-gray-800 ease-in duration-150  "
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/shashanks_twt"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black rounded-lg shadow-inner hover:text-gray-800 ease-in duration-150"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shashank1302/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black rounded-lg shadow-inner hover:text-gray-800 ease-in duration-150"
              size={30}
            />
          </a>
          
        </div>
    </div>
  )
}

export default Social