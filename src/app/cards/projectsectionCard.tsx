import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
    imageurl: string;
    title: string;
    description: string;
    banner: string;
}

const ProjectSectionCard: React.FC<ProjectCardProps> = ({ imageurl, title, description, banner }) => {
    return (
        <div className='relative w-full h-[350px] sm:h-[400px] rounded-xl overflow-hidden shadow-xl group cursor-pointer'>
            
            <Image 
                src={banner} 
                alt={`${title} project banner`} 
                fill 
                className='object-cover transition-transform duration-500 group-hover:scale-105'
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            
            <div className='absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/60 flex flex-col justify-end p-6'>
                
                <div className='mb-4 w-12 h-12 relative'>
                    <Image 
                        src={imageurl} 
                        alt={`${title} icon`} 
                        width={48} 
                        height={48} 
                        className="object-contain"
                    />
                </div>

                <h2 className='text-2xl font-bold text-white mb-2 leading-tight'>
                    {title}
                </h2>
                
                <p className='text-sm text-gray-200 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100'>
                    {description}
                </p>

                <div className="mt-3">
                    <span className="text-sm font-semibold text-blue-300 hover:text-green-100 transition-colors">
                        Explore &rarr;
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProjectSectionCard;