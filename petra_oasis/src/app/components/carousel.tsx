'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const HomeCarousel = () => {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true)
    }, 3000) // Delay before switching to video

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-[550px] relative overflow-hidden flex items-center justify-center ">
      <div className='w-[90%] h-full '>
        {/* Static Image */}
        <div
          className={`absolute top-0 left-0 w-[40%] h-[600px] z-0 transition-opacity duration-1000 z-50`}
        >
          <Image
            src="/images/logopng.png"
            alt="Hero Image"
            className='z-100'
            width={600}
            height={600}
          />
        </div>

        {/* Background Video */}
        <div className='w-full h-full relative'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute top-0 right-0 w-[80%] h-full object-cover z-0 transition-opacity duration-1000 rounded-br-[300px] border`}
        >
          <source src="/images/companyvideo.mp4" type="video/mp4" />
          
        </video>
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel