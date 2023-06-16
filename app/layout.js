'use client'

import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import Social from '@/components/Social'
import { useEffect } from 'react'

export default function RootLayout({ children }) {
  useEffect(() => {
    document.body.style.fontFamily = 'DM Sans, sans-serif';
  },[]);
  return (
    <html lang="en">
      
      
   
   <body className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
   
   <Navbar />
      <main>{children}  </main>
      
      <Footer/>
   </body>
    </html>
  )
}