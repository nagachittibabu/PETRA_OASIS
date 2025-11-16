"use client"
import React, { useEffect, useState } from 'react'
import PromiseSection from '../components/promiseSection';
import CoreValueSection from '../components/corevalueSection';
import ProjectSection from '../components/projectSection';
import HomeCarousel from '../components/HomeCarousel';
import ClientSection from '../components/clientSection';
import TeamSection from '../components/teamSection';
import Header from '../components/header';
import Footer from '../components/footer';



const HomePage = () => {
  const [introHide,setIntroHide]=useState(true);
  setTimeout(() => {
    setIntroHide(false)
  }, 5000);

  return (
<div className={`relative w-full h-screen ${introHide ? "overflow-hidden" :"overflow-none"}`}>
  {/* Homepage layer */}
  <div className="absolute inset-0 z-0 zoomIn" >
    <div className="w-full h-full bg-white">
      <Header />
      <HomeCarousel />
      <PromiseSection />
      <CoreValueSection />
      <ProjectSection />
      <TeamSection />
      <ClientSection />
      <Footer />
      </div>
  </div>

  {/* Black overlay with transparent text window */}
  {introHide && (
  <div className="absolute w-full h-screen  z-10 flex items-center justify-center animate-zoomOutFade">
    <svg className="w-full h-full" viewBox="0 0 965 440" preserveAspectRatio="none">
      <defs>
        <mask id="text-mask">
          <rect width="100%" height="100%" fill="white" />
          <text
            x="55%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="100"
            fontWeight="bold"
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

export default HomePage;