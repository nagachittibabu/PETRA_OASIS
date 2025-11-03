"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const HomeCarousel = () => {
    const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true)
    }, 3000) // Delay before switching to video

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-[300px] xl:h-screen lg:h-screen md:h-[400px] sm:h-[300px] relative overflow-hidden flex items-center justify-center bg-blue-900">
    <div className='w-full h-full '>
      {/* Static Image */}
      <div
        className={`absolute top-0 left-0 w-[35%] h-full z-0 transition-opacity duration-1000 z-100`}
      >
        <div>
        <Image
          src="/images/logopng.png"
          alt="logo Image"
          className='z-100 object-contain slide-up'
          fill
        />
        </div>
      </div>

      {/* Background Video */}
      <div className='w-full h-full relative overflow-hidden '>
        <div className='absolute w-full h-full bg-gray-900 z-50 opacity-80'></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute top-0 right-0 w-full h-[90%] object-cover z-0 transition-opacity duration-1000 rounded-br-[300px] border`}
      >
        <source src="/images/companyvideo.mp4" type="video/mp4" />
      </video>
      </div>
      <div className='xl:w-[40%] lg:w-[41%] md:w-[50%] sm:w-[50%] h-max absolute xl:left-[50%] xl:top-[30%]  lg:left-[50%] lg:top-[30%] md:left-[45%]  md:top-[30%] sm:left-[45%] sm:top-[20%] text-white  text-left p-2  z-100'>
        <div className='slide-right h-max '>
          <div className='w-max space-y-0 xl:space-y2 lg:space-y-2 md:space-1.5 sm:space-y-1'>
            <h1 className='xl:h-[50px] lg:h-[42px] md:h-[34px] sm:h-[29px]  xl:text-[50px] lg:text-[42px] md:text-[36px] sm:text-[30px] font-bold titleText height22'><span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600  bg-clip-text text-transparent titleHeight">
              PETRA OASIS
            </span></h1>
            <h2 className='w-full text-right xl:text-[13px] 
                  lg:text-[12px] md:text-[11px] sm:text-[8px] font-semibold subtitle'><span className="bg-gradient-to-r from-orange-200  to-orange-200 bg-clip-text text-transparent ">
                TECHNICAL SERVICES L.L.C
              </span></h2>
          </div>
        </div>
        <div className='w-full h-max bg-black/10 backdrop-blur-[4px] p-3 pl-1 rounded-md  xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] paragraph text-gray-100 pt-2 slide-down '>
          <p className='leading-[13px] xl:leading-[23px] lg:leading-[22px] md:leading-[18px] sm:leading-[16px] tracking-wide  p8'>Our mission is that with our credibility, commitment, quality, cost efficiency,
            capability and financial soundness, with abundant resources of highly skilled and
            self-motivated engineers and staff make us a perfect choice for solving any kind of
            electro-mechanical work requirements in major projects.....</p>
        </div>
        <div className='w-full'>
          <button className="xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[11px] xl:px-6 xl:py-2 lg:px-5 lg:py-1.5  md:px-3 md:py-1 sm:px-2.5 sm:py-0.5  font-medium rounded-sm transition duration-300 cursor-pointer slide-right font12 bg-blue-800 hover:scale-105" >
            learn More -
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeCarousel