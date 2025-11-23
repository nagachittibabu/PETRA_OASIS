"use client"
import { useState } from 'react';
import HomePage from './home/page';

const Home = () => {

  const [introHide,setIntroHide]=useState(true);

  setTimeout(() => {
    setIntroHide(false)
  }, 5000);

  return (
<div className={`relative w-full h-screen ${introHide ? "overflow-hidden" :"overflow-none"}`}>
      <div className="absolute inset-0 z-0 zoomIn" >
        <div className="w-full h-full bg-white">
          <HomePage />
        </div>
      </div>        
      {introHide && (
        <div className="absolute w-full h-screen  z-[999] flex items-center justify-center animate-zoomOutFade ">
          <svg className="w-full h-full " viewBox="0 0 965 440" preserveAspectRatio="none">
            <defs>
              <mask id="text-mask">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="55%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className='text-[50px] font-bold xl:text-[100px] lg:text-[90px] md:text-[85px] sm:text-[70px]'
                  fill="black"
                  letterSpacing={10}
                >
                  PETRA OASIS
                </text>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="black" mask="url(#text-mask)" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default Home;
