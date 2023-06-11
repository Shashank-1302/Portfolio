import React from 'react'
import Image from 'next/image'
const HomePage = () => {
  return (
    <div className='flex flex-row justify-between ' >
      <div >
      <Image className='rounded-3xl my-20' src="/card_hover.jpg" width={700}
      height={300}/>
        
      </div>

      <div className=' mx-6  shadow-xl rounded-3xl items-center justify-between '>
      <Image className='rounded-3xl my-20 left-2 ' src="/profile.jpg" width={400}
      height={700}
      alt="Picture of the author"
        />
      </div>
    </div>
  )
}

export default HomePage