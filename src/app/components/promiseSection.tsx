"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { ourpromises } from "../export";
import PromiseCard from "../cards/cards/promiseCard";

const PromiseSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 150,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const iconList = ["Shield", "Award", "Clock", "Truck", "Users", "DollarSign"];
  const promisesWithIcons = ourpromises.map((item, index) => ({
    ...item,
    iconName: iconList[
      index % iconList.length
    ] as "Truck" | "Clock" | "Shield" | "Award" | "Users" | "DollarSign",
  }));

  return (
    <section
      id="promises"
      className="w-full bg-gray-50 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <h1
          data-aos="fade-up"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
        >
          Our Elevated Commitment to You
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto"
        >
          We don't just build; we deliver on key promises that elevate your entire project experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-8 justify-items-center
          "
        >
          {promisesWithIcons.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={200 + index * 150}
              className="w-full h-[520px] flex justify-center"
            >
              <PromiseCard
                imageurl={item.image}
                title={item.title}
                description={item.description}
                iconName={item.iconName}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
