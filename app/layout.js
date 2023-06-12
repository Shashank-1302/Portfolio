'use client'

import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import Social from '@/components/Social'
import { useEffect } from 'react'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  useEffect(() => {
    document.body.style.fontFamily = 'DM Sans, sans-serif';
  },[]);
  return (
    <html lang="en">
      
      
   
   <body >
   
   <Navbar />
      <main>{children}  </main>
     
      <Footer/>
   </body>
    </html>
  )
}