"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { corevalues } from "../export";
import CoreValueCard from "../cards/corevalueCard";


const CoreValueSection = () => {
    useEffect(() => {
        Aos.init({
            offset: 120,
            duration: 900,
            easing: "ease-out-cubic", 
            once: true,
        });
    }, []);

    return (
        <section
            id="core-values"
            className="w-full bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28" // Subtle gradient background
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <h1
                    data-aos="fade-up"
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-16 sm:mb-20"
                >
                    Our Core Values, <span className="text-green-600">Revealed</span>
                </h1>

                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="
                        grid gap-10 sm:gap-14 // Larger gaps for emphasis
                        sm:grid-cols-2 lg:grid-cols-4 
                    "
                >
                    {corevalues.map((item, index) => (
                        <div 
                            key={item.title} 
                            data-aos="fade-up" 
                            data-aos-delay={200 + index * 120} 
                            className="h-full"
                        >
                            <CoreValueCard 
                                imageurl={item.image} 
                                title={item.title} 
                                description={item.about} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValueSection;