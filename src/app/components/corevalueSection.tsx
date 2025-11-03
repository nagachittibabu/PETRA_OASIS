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
            className="w-full h-[700px] bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28 border-4" 
        >
            <div className="w-full h-full p-4">
                <h1
                    data-aos="fade-up"
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-16 sm:mb-20"
                >
                    Our Core Values, <span className="text-blue-600">Revealed</span>
                </h1>

                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="
                        grid gap-10 sm:gap-14 
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