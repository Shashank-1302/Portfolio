import React from 'react';
import Image from 'next/image';
import Social from './Social';
import Link from 'next/link';
import { HiArrowDown } from "react-icons/hi"

const HomePage = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse justify-between '>
      <div className='overflow-hidden mt-20 rounded-3xl object-cover md:w-2/3'>
        <div className='animate-fadeInRight flex flex-col justify-center p-4 md:p-8'>
          <h1 className='text-black text-5xl font-medium'>Hi, I am </h1>
          <h1 className='text-black text-5xl font-medium hover:text-blue-500 ease-in duration-300'>Shashank Shekhar</h1>
          <p className='text-2xl mt-3 text-[#707070]'>Final Year Computer Science Student and</p>
          <p className='text-2xl text-[#707070]'>a full stack developer. </p>
          <div className='mt-3'>
            <Social />
            <div className='mt-3'>
            <button
      className="relative -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 pt-3"
     
    >
      Resume
    </button>
            </div>

   
          </div>
          <div >
        <Link
          href="#about"
        >
          

          <HiArrowDown size={40} className='mt-10 hover:translate-y-4 transition-transform cursor-pointer ease-in duration-200 hover:scale-[110%] '/>
        </Link>
      </div>
        </div>
      </div>

      <div className='mx-auto md:mx-4 mt-10 md:mt-20 w-full md:w-1/3'>
        <div className='animate-fadeInLeft '>
          <Image className='rounded-full shadow-xl' src='/profile1.jpg' width={400} height={400} alt='Picture of the author' />
        </div>
         
        
      </div>
     
    </div>
    
  );
};

export default HomePage;
