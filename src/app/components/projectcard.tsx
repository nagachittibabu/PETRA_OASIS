import Image from 'next/image';
import React from 'react';

type Project = {
    image: string;
    title: string;
};

interface ProjectcardProps {
    index: number;
    logo: string;
    companyName: string;
    projects: Project[];
}

const Projectcard: React.FC<ProjectcardProps> = ({ companyName, projects, logo }) => {
    return (
        <section className='w-full max-w-7xl mx-auto py-10 sm:py-16 px-4'>
            <div>

                <div className='flex flex-col sm:flex-row items-center justify-between p-6 mb-8 sm:mb-12 bg-white rounded-xl shadow-lg border-t-4 border-blue-600'>

                    <div className='flex items-center space-x-6 w-full sm:w-auto mb-4 sm:mb-0'>
                        <div className='relative w-24 h-24 sm:w-24 sm:h-28 flex-shrink-0'>
                            <Image
                                src={logo}
                                alt={`${companyName} logo`}
                                fill
                                className='object-contain rounded-full'
                            />
                        </div>
                        <div>
                            <h3 className=" text-xl sm:text-sm lg:text-3xl font-semibold text-gray-900 tracking-tight">
                                {companyName}
                            </h3>
                        </div>
                    </div>

                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols xl:grid-cols-3">

                    {projects.map((project, id) => (
                        <div
                            key={id}
                            className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100
                                   flex flex-col sm:flex-row md:flex-col 
                                   transition-all duration-300 transform hover:translate-y-[-4px] hover:shadow-2xl"
                        >

                            <div className="relative w-full sm:w-1/2 md:w-full h-[200px] sm:h-[250px] md:h-[280px] flex-shrink-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                />
                                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    FEATURED
                                </div>
                            </div>

                            <div className="p-5 w-full sm:w-1/2 md:w-full flex flex-col justify-between">
                                <div>
                                    <h4 className="text-l font-semibold text-gray-700 mb-2 leading-snug">
                                        {project.title}
                                    </h4>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projectcard;