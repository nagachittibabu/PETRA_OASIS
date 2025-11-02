'use client';

import React, { useRef } from 'react';
import { completedProjects } from "../export";
import Projectcard from '../components/projectcard';

const CompleteProjects: React.FC = () => {
    const projectsRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full bg-gray-50 py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div>
                    <p className='text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2'>Our Track Record</p>
                </div>
                <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900'>
                        Completed Projects Showcase
                    </h1>
                </div>
            </div>

            <div ref={projectsRef}>
                {completedProjects.map((group, index) => (
                    <Projectcard
                        index={index}
                        companyName={group.company}
                        projects={group.projects}
                        logo={group.logo}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default CompleteProjects;