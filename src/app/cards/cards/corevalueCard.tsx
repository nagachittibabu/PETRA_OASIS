import Image from 'next/image';
import React, { useState } from 'react';

interface CoreValueCardProps {
  imageurl: string;
  title: string;
  description: string;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ imageurl, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full bg-white rounded-xl shadow-xl flex flex-col items-center justify-start text-center overflow-hidden cursor-pointer transform transition-all duration-500 ease-out 
        hover:shadow-2xl hover:shadow-orange-200 ${isHovered ? 'h-[400px]' : 'h-[400px]'} p-6 sm:p-8
      `}>
     
      {/* Title */}
      <div>
      <h2
        className={`relative z-10 text-xl sm:text-2xl font-bold text-gray-900 mb-2
          transform transition-transform duration-500 ease-out
          ${isHovered ? '-translate-y-1' : 'translate-y-20 xl:translate-y-20  lg:translate-y-20 md:translate-y-10 sm:translate-y-8 '}`}
      >
        {title}
      </h2>
      </div>
      
       {/* Image */}
      <div
        className={`relative z-10 mb-4 transform transition-transform duration-500 ease-out
          ${isHovered ? '-translate-y-2' : 'translate-y-20 xl:translate-y-20  lg:translate-y-20 md:translate-y-10 sm:translate-y-8'}`}
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
          ${isHovered ? 'opacity-100 translate-y-0 max-h-[200px]' : 'opacity-0 translate-y-4 max-h-0'}
        `}
      >
        {description}
      </p>
      </div>
    </div>
  );
};

export default CoreValueCard;
