import React from 'react';

interface CoreValueCardProps {
  description: string;
}

const CommitmentCard: React.FC<CoreValueCardProps> = ({ description }) => {
  return (
    <div className="flex flex-col items-center bg-gray-500 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 transition-transform duration-300 hover:scale-105">
      <p className="text-center text-sm sm:text-base md:text-lg text-white">
        {description}
      </p>
    </div>
  );
};

export default CommitmentCard;