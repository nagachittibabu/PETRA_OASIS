"use client"
import Image from 'next/image'
import {teamMembers} from '../export'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const TeamSection = () => {

  useEffect(() => {
    Aos.init({
        offset: 100, 
        duration: 700,
        easing: "ease-in-out", 
        once: true, 
    });
}, []);

  return (
    <div className='w-full h-max py-12  flex items-center justify-center' data-aos="fade-up">
      <div className='w-[90%] h-max   flex items-center justify-center flex-col shadow-lg rounded-lg py-12 space-y-4 border  border-gray-100'>
        <h1 className='text-[22px] xl:text-[35px] lg:text-[33px] md:text-[30px] sm:text-[28px] font-bold'>OUR PROFESSIONAL TEAM</h1>
        <p className="w-[90%] text-center text-gray-600 text-[11px] xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[12px]  leading-relaxed px-4">
          Our professional team is built on precision, reliability, and hands-on expertise. Each member brings a unique specialization and a commitment to excellence, ensuring every project is executed with technical mastery and creative insight. Whether it's engineering, design, or deployment, our team operates like finely tuned tools — dependable, sharp, and always ready to deliver.
        </p>

        <div className="w-[90%] h-[80%] flex flex-wrap items-center justify-center gap-6 xl:gap-10 lg:gap-10 md:gap-8 sm:gap-4 py-12">
          {teamMembers.map((item, i) => (
            <div
              key={i}
              className="w-[90%] xl:w-[28%] lg:w-[30%] md:w-[45%] sm:w-[80%] h-[420px] py-6 flex flex-col items-center justify-start 
                 bg-white shadow-xl rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-200"  data-aos="fade-up" 
                 data-aos-delay={i * 150}
            >
              <div className="w-[180px] h-[180px] relative rounded-full overflow-hidden border-4 border-orange-200 shadow-md hover:shadow-lg transition duration-300">
                <Image
                  src={item.imageurl}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h1 className="mt-6 text-[22px] font-bold text-gray-800 text-center tracking-wide">
                {item.name}
              </h1>

              <h2 className="text-[18px] text-gray-600 text-center italic">
                {item.specialization}
              </h2>

              <div className="flex gap-4 mt-4">
                <a href={`mailto:${item.contactemail}`} className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition">
                  Connect
                </a>
                <button className="px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
                  Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection
