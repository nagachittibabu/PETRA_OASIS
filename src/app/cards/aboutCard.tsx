import React from 'react';

interface AboutCardProps {
    title: string;
    description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col items-start bg-white border border-gray-200 rounded-xl shadow-lg p-6 sm:p-8 
                       transition-all duration-500 ease-in-out  hover:shadow-2xl  hover:-translate-y-1 mt-8">
            <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-3 leading-snug">
                    {title}
                </h3>
            </div>
            <div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};
export default AboutCard;