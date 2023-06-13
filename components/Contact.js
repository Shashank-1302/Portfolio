import React from 'react'
import { AiOutlineGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram , AiOutlineInstagram } from 'react-icons/ai'

const Contact = () => {
  return (
    <section id="contact">
        <div class="  max-w-5xl bg-gradient-to-br from-teal-400 via-yellow-400 to-pink-500 p-4 rounded-lg sm:px-8 sm:py-6 ">
    <h1 class="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Hi, Lets Connect</h1>
    <div className='mt-2 '>

    <div className="flex flex-row  space-x-2 mb-1 ">
          <a href="https://github.com/Shashank-1302" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-white hover:text-black rounded-lg  ease-in duration-150  "
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/shashanks_twt"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className=" hover:-translate-y-1 transition-transform cursor-pointer text-white rounded-full hover:text-[#00acee]  ease-in duration-150 "
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shashank1302/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin
              className=" hover:-translate-y-1 transition-transform cursor-pointer text-white  hover:text-[#0072b1]  ease-in duration-200"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/shashank1302/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className=" hover:-translate-y-1 transition-transform cursor-pointer rounded-lg hover:text-white text-white  hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  ease-in duration-150"
              size={30}
            />
          </a>
        

          
        </div>
 
    </div>
    <div className='flex flex-col justify-between items-start mt-3'>
    <button class="bg-black text-white py-2 px-4 rounded-lg text-base sm:text-lg md:text-xl lg:text-2xl hover:bg-slate-800 ">
  Contact Me
</button>
    </div>
    
    
  </div></section>
  )
}

export default Contact