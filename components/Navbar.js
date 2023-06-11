import React,{useState} from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Social from './Social'
const Navbar = () => {
  const [nav, setNav] = useState(false)
const handleNAv = () => {
  setNav(!nav)
}

  return (
    <div className='fixed w-full h-20 z-[100] bg-white/90 '>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <h1 className='font-bold text-2xl font-sans '></h1>
        <div>
          <ul className='hidden md:flex'>
          <li className='ml-10 text-lg  hover:-translate-y-1 transition-transform cursor-pointer'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-lg hover:-translate-y-1 transition-transform cursor-pointer'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-lg   hover:-translate-y-1 transition-transform cursor-pointer'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-lg   hover:-translate-y-1 transition-transform cursor-pointer'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-lg   hover:-translate-y-1 transition-transform cursor-pointer'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 text-lg   hover:-translate-y-1 transition-transform cursor-pointer'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNAv} className='md:hidden cursor-pointer hover:scale-[11hover:-translate-y-1 transition-transform cursor-pointer0%] ease-in duration-150'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-full bg-black/70':''}>
        <div className={nav ? 'fixed left 0 top-0 translate-x-0 w-full h-screen bg-white ease-in duration-200':' fixed right-[-100%] top-0 translate-x-1 ease-in duration-500'}>
          <div className='mx-2'>
            <div className='flex w-[100%] items-center justify-between my-2'>
            <h1 className='font-bold text-2xl font-sans px-2 '></h1>
            <div onClick={handleNAv} className=' shadow-gray-400 p-3 cursor-pointer hover:scale-[110%] ease-in duration-150 hover:text-red-700 '>
              <AiOutlineClose size={30} />
            </div>
           </div>
            </div>
          <div className='py-4 flex flex-col justify-center items-center px-4'>
            <ul className=' '>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-lg hover:scale-105 ease-in duration-200'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-lg hover:scale-105 ease-in duration-200'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-lg hover:scale-105 ease-in duration-200'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-lg hover:scale-105 ease-in duration-200'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-lg hover:scale-105 ease-in duration-200'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-lg hover:scale-105 ease-in duration-200'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className=' border-b border-gray-300 my-4  text-blue-400'>
              <p>
                Let's Connect
              </p>
              

            </div>
            <div className='flex items-center justify-between'>
            <Social/>
            </div>
           

          </div>

          
           
        </div>
      </div>
      
    </div>
  )
}

export default Navbar