'use client';

import React from 'react';
import Image from 'next/image';
import { about, aboutcards } from '../export';
import AboutCard from '../cards/aboutCard';

const AboutUs = () => {
    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-16 bg-white">
            <div className="bg-white pt-16 sm:pt-24 pb-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center mb-4">
                            OUR STORY
                        </h2>
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl text-center text-gray-500 max-w-3xl mx-auto">
                            Pioneering excellence in MEP and Civil Contracting since 2015.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                {about.map((item, index) => (
                    <div
                        key={item.title}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        className={`py-16 sm:py-24 `}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div
                                className={`flex flex-col gap-12 lg:gap-20 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
                                    <div>
                                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {item.para1}
                                        </p>
                                    </div>
                                    <div>
                                        {item.para2 && (
                                            <p className="text-sm sm:text-base text-gray-700 border-l-4 border-orange-500 pl-4 py-1 font-medium italic">
                                                {item.para2}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        {item.para3 && (
                                            <p className="text-sm sm:text-base text-gray-700">
                                                {item.para3}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {item.image && (
                                    <div className="w-full lg:w-1/2">
                                        <div className="relative w-full h-80 sm:h-96 lg:h-[450px] overflow-hidden rounded-xl shadow-2xl">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transform transition duration-700 hover:scale-105"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14"
                        >
                            {aboutcards.map((item, index) => (
                                <AboutCard
                                    key={index}
                                    title={item.title}
                                    description={item.para}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;