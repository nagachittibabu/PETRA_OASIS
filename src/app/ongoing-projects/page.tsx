'use client';

import React, { useRef, useMemo } from 'react';
// ASSUMPTION: Update the import source to a new data export for ongoing projects
import { ongoingProjects } from "../export";
import Projectcard from '../components/projectcard';

const OngoingProjects: React.FC = () => {
    const projectsRef = useRef<HTMLDivElement>(null);

    // Calculate the total number of ongoing projects
    const totalProjects = useMemo(() => {
        return ongoingProjects.reduce((sum, group) => sum + group.projects.length, 0);
    }, []);

    return (
        <div className="w-full bg-gray-50 py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
                <p className='text-sm font-semibold text-green-600 tracking-wider uppercase mb-2'>Currently In Progress</p>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900'>
                    Ongoing Projects Pipeline
                </h1>

                <div className='mt-4 text-lg font-medium text-gray-700'>
                    Displaying a total of
                    <span className="text-green-600 font-bold ml-1">{totalProjects}</span>
                    projects currently under development across <span className="text-green-600 font-bold">{ongoingProjects.length}</span> client groups.
                </div>
            </div>

            <div ref={projectsRef}>
                {ongoingProjects.map((group, index) => (
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

export default OngoingProjects;