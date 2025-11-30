import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface CoreValueCardProps {
  imageurl: string;
  title: string;
  description: string;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ imageurl, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 792);
      setIsHovered(false);

      setIsHovered(false)
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full bg-white rounded-xl shadow-xl flex flex-col items-center justify-start text-center overflow-hidden cursor-pointer transform transition-all duration-500 ease-out 
        hover:shadow-2xl hover:shadow-orange-200 ${isHovered ? 'h-[450px]' : 'h-[450px] xl:h-[450px] lg:h-[450px] md:h-[450px] sm:h-[500px]'} p-6 sm:p-8
      `}>
     
      {/* Title */}
      <div>
      <h2
        className={`relative z-10 text-xl sm:text-2xl font-bold text-gray-900 mb-2
          transform transition-transform duration-500 ease-out
          ${isHovered && !isMobile ? '-translate-y-1' : 'translate-y-2 xl:translate-y-20  lg:translate-y-20 md:translate-y-10 sm:translate-y-8 '}`}
      >
        {title}
      </h2>
      </div>
      
       {/* Image */}
      <div
        className={`relative z-10 mb-4 transform transition-transform duration-500 ease-out
          ${isHovered && !isMobile ? 'translate-y-2' : 'translate-y-2 xl:translate-y-20  lg:translate-y-20 md:translate-y-10 sm:translate-y-8'}`}
      >
        <Image
          src={imageurl}
          alt={title}
          width={96}
          height={96}
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
        />
      </div>

      {/* Description */}
      <div>
      <p
        className={`relative z-10 text-[14px] xl:text-[13px] lg:text-[13px] md:text-[15px] sm:Text-[13px]  text-gray-600 leading-relaxed 
          transition-all duration-500 ease-out delay-100
          px-2 overflow-hidden
          ${isHovered && !isMobile ? 'opacity-100 translate-y-0 max-h-[300px]' : 'opacity-100 translate-y-4 max-h-[200px] xl:max-h-0 lg:max-h-0 md:max-h-0 sm:max-h-[200px]'}
        `}
      >
        {description}
      </p>
      </div>
    </div>
  );
};

export default CoreValueCard;
