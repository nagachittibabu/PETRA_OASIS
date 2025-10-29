import Image from 'next/image';
import React from 'react';

interface CoreValueCardProps {
  imageurl: string;
  title: string;
  description: string;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ imageurl, title, description }) => {
  return (
    <div
      className="
        relative w-full h-full p-6 sm:p-8 bg-white rounded-xl shadow-xl 
        flex flex-col items-center justify-center text-center 
        overflow-hidden cursor-pointer group // Added 'group' for hover effects
        transform transition-all duration-700 ease-out // Smooth entry and hover
        hover:shadow-2xl hover:scale-[1.03]
      "
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white 
                   transform -skew-y-6 scale-150 group-hover:skew-y-0 group-hover:scale-100 
                   transition-all duration-700 ease-out opacity-70"
      ></div>

      <div className="relative z-10 mb-6 
                      transform translate-y-0 group-hover:-translate-y-4 
                      transition-transform duration-500 ease-out">
        <Image
          src={imageurl}
          alt={title}
          width={96}
          height={96}
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-md"
        />
      </div>

      <h2 className="relative z-10 text-xl sm:text-2xl font-bold text-gray-900 mb-3 
                     transform translate-y-0 group-hover:-translate-y-2 
                     transition-transform duration-500 ease-out">
        {title}
      </h2>

      <p className="
        relative z-10 text-sm sm:text-base text-gray-600 leading-relaxed 
        max-h-0 opacity-0 group-hover:max-h-full group-hover:opacity-100 
        transform translate-y-4 group-hover:translate-y-0 
        transition-all duration-500 ease-out delay-100 // Delayed transition for reveal effect
        flex-grow max-w-xs
      ">
        {description}
      </p>

      <div className="
        absolute bottom-6 opacity-0 group-hover:opacity-100 
        transform translate-y-4 group-hover:translate-y-0
        transition-all duration-500 ease-out delay-200
      ">
      </div>
    </div>
  );
}

export default CoreValueCard;