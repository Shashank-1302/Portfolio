import React from 'react'
import { AiOutlineGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram , AiOutlineInstagram } from 'react-icons/ai'

const Social = () => {
  return (
    <div >
        <div className="flex flex-row  space-x-2 mb-1 ">
          <a href="https://github.com/Shashank-1302" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black rounded-lg  ease-in duration-150  "
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/shashanks_twt"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className=" hover:-translate-y-1 transition-transform cursor-pointer text-black rounded-full hover:text-[#00acee]  ease-in duration-150 "
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shashank1302/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin
              className=" hover:-translate-y-1 transition-transform cursor-pointer text-black  hover:text-[#0072b1]  ease-in duration-200"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/shashank1302/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className=" hover:-translate-y-1 transition-transform cursor-pointer rounded-lg hover:text-white text-black  hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  ease-in duration-150"
              size={30}
            />
          </a>
          
        </div>
    </div>
  )
}

export default Social