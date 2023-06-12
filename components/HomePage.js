import React from 'react';
import Image from 'next/image';
import Social from './Social';
import Link from 'next/link';
import { HiArrowDown } from "react-icons/hi"

const HomePage = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse justify-between'>
      <div className='overflow-hidden mt-20 rounded-3xl object-cover md:w-2/3'>
        <div className='animate-fadeInRight flex flex-col justify-center p-4 md:p-8'>
          <h1 className='text-black text-5xl font-medium'>Hi, I'm </h1>
          <h1 className='text-black text-5xl font-medium'>Shashank Shekhar</h1>
          <p className='text-xl mt-3 text-[#707070]'>2nd Year Computer Science Student and</p>
          <p className='text-xl text-[#707070]'>a full stack developer. </p>
          <div className='mt-3'>
            <Social />

   
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
        <div className='animate-fadeInLeft'>
          <Image className='rounded-3xl' src='/profile (2).jpg' width={400} height={700} alt='Picture of the author' />
        </div>
         
        
      </div>
     
    </div>
    
  );
};

export default HomePage;
