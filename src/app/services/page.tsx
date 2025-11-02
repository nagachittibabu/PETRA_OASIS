'use client';

import React from 'react';
import Image from 'next/image';
import { services } from '../export';

const ServicesPage: React.FC = () => {
    return (
        <section className='w-full bg-white'>
            <div
                id="services"
                className="w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div>
                        <h1
                            className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Our Core Service Offerings
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                        {services.map((item, index) => (
                            <div
                                key={item.title}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-transform duration-500 hover:scale-[1.02] hover:shadow-blue-400/50 cursor-pointer"
                            >
                                <div className="relative h-60 w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/60 flex items-end p-6">
                                        <h3 className="text-3xl font-black text-white leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-6 space-y-4 bg-white">
                                    <div>
                                        <p className="text-xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3">
                                            {item.about}
                                        </p>
                                    </div>
                                    <div
                                        data-aos="fade-in"
                                        data-aos-delay="400"
                                        className="mt-4 pt-4 border-t border-gray-100">
                                        <div>
                                            <h4 className='text-base font-bold text-gray-600 mb-3 uppercase tracking-wider'>Key Offerings:</h4>
                                        </div>
                                        <div>
                                            <ul className="list-none space-y-2 text-sm sm:text-base text-gray-700">
                                                {item.points.slice(0, 4).map((point, i) => ( 
                                                    <li
                                                        key={i}
                                                        className="flex items-start"
                                                    >
                                                        <svg className="flex-shrink-0 w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                                        {point}
                                                    </li>
                                                ))}
                                                {item.points.length > 4 && (
                                                    <li className='text-sm text-blue-500 pt-1'>
                                                        + {item.points.length - 4} more detailed services
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;