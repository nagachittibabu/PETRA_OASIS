"use client";

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { projects } from "../export";
import Image from "next/image";
import ProjectCard from "../cards/cards/projectsectionCard";

const ProjectSection = () => {
    useEffect(() => {
        Aos.init({
            offset: 100, 
            duration: 700,
            easing: "ease-in-out", 
            once: true, 
        });
    }, []);

    return (
        <section
            id="projects"
            className="w-full py-16 md:py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div data-aos="fade-up" className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Specialized Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Delivering high-quality construction across major industry sectors.
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" 
                >
                    {projects.map((item, i) => (
                        <div 
                            key={item.title} 
                            data-aos="fade-up" 
                            data-aos-delay={i * 100} 
                        >
                            <ProjectCard 
                                imageurl={item.image} 
                                title={item.title} 
                                description={item.about} 
                                video={item.video} 
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto mt-20 md:mt-32 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-b border-gray-200">
                <div className="flex flex-col xl:flex-row items-center py-10 md:py-16">
                    <div className="w-full xl:w-2/5 p-4 order-2 xl:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center xl:text-left"> 
                            Dedicated to <span className="text-blue-600">Client Satisfaction</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-center xl:text-left">
                            We pride ourselves on our track record of success, working tirelessly to meet and exceed the expectations of thousands of satisfied customers globally. Our commitment to quality ensures long-lasting partnerships and outstanding results.
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-700 text-center xl:text-left">
                            <li className="flex items-center justify-center xl:justify-start">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 
                                Increased Retention
                            </li>
                            <li className="flex items-center justify-center xl:justify-start">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 
                                Boosted Brand Loyalty
                            </li>
                        </ul>
                    </div>
                    <div className="w-full xl:w-3/5 p-4 order-1 xl:order-2">
                        <div className="relative w-full aspect-[16/9] rounded-lg shadow-2xl overflow-hidden">
                            <Image 
                                src="/images/companybanner.png" 
                                alt="customers" 
                                fill 
                                className="object-cover"
                                sizes="(max-width: 1280px) 100vw, 60vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProjectSection;