import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    imageurl: string;
    title: string;
    description: string;
    video: string;
    index:number;
}

const ProjectSectionCard: React.FC<ProjectCardProps> = ({ imageurl, title, description, video,index }) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
  
    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // reset to start if you want
      }
    };

    
    return (
        <div className={`${index%2===0 ? 'flex-row':'flex-row-reverse'} w-full h-[350px] flex sm:h-[400px] rounded-xl overflow-hidden shadow-xl  cursor-pointer hover:shadow-orange-200 projectCard`} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
  >
            <div className='xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full  h-[90%] items-center flex justify-center '>
                <div className='w-[90%] h-[80%] rouded-lg overdlow-hidden'>
            <video 
                src={video} 
                className="object-cover w-full h-full rounded-xl"
                ref={videoRef}
                loop
                muted
            />
            </div>
            </div>
            <div className='xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-[95%] h-[90%] flex flex-col justify-center pl-4  xl:pl-12 lg:pl-12 md:pl-10 sm:pl-8 '>
                
                <div className='w-16 xl:w-22 lg:w-22 md:w-22 sm:w-22 h-20 xl:h-28 lg:h-28 md:h-28 sm:h-28  relative'>
                    <Image 
                        src={imageurl} 
                        alt={`${title} icon`} 
                        fill
                        className="object-cover"
                    />
                </div>

                <h2 className='text-2xl font-bold text-gray-900 mb-2 leading-tight'>
                    {title}
                </h2>
                
                <p className='text-sm text-gray-800 opacity-100'>
                    {description}
                </p>

                <div className="mt-3">
                    <Link href={"/completed-projects"} className="text-sm font-semibold text-blue-300 hover:text-blue-100 transition-colors">
                        Explore &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectSectionCard;