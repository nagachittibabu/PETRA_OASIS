"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const HomeCarousel = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:min-h-[850px] md:min-h-[950px] lg:min-h-screen overflow-hidden flex flex-col justify-between Z-0">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/carouselVideo.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-orange-900/50 z-10"></div>

      {/* Logo + Text Section */}
      <div className="w-full h-screen flex flex-col justify-center items-center text-center relative z-30">
        {/* Logo */}
        <div className="w-[220px] h-[220px] relative mb-6">
          <Image
            src="/images/logopng.png"
            alt="Company Logo"
            fill
            className="object-contain rounded-full border border-white/20 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(135,206,250,0.7),0_0_45px_rgba(255,165,0,0.6)]"
            priority
          />
        </div>

        {/* Text Section */}
        <div
          className={`transition-all duration-1000 ease-in-out ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600
                       text-[28px] sm:text-[40px] md:text-[52px] lg:text-[68px] xl:text-[76px]
                       tracking-wide drop-shadow-md"
          >
            PETRA OASIS
          </h1>

          <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent tracking-[2px] sm:tracking-[4px]">
            ELECTROMECHANICAL WORKS L.L.C
          </h2>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-gradient-to-r from-orange-400 via-orange-500 to-blue-600 z-30"></div>
    </div>
  );
};

export default HomeCarousel;