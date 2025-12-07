"use client"
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import ClientSection from '../components/clientSection';
import Footer from '../components/footer';
import { groups } from '../export';

const GroupsPage = () => {

    useEffect(() => {
        Aos.init({
          offset: 150,
          duration: 800,
          easing: "ease-out-cubic",
          once: true,
        });
      }, []);

    const groupsRef = useRef<HTMLDivElement>(null);
   
    return (
        <div className='w-full h-max flex flex-col flex-wrap justify-center items-center space-y-4'  >
            <h1 className='text-[40px] font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-blue-300 bg-clip-text text-transparent'>OUR GROUPS</h1>
            <div className='w-full h-full flex items-evenly justify-evenly  flex-wrap space-y-20 py-12 ' ref={groupsRef} data-aos="fadu-up" data-aos-delay="400">
                {groups.map((item, i) => {
                    return (
                        <div className='w-[95%] xl:w-[40%] lg:w-[42%] md:w-[44%] sm:w-[90%] h-[160px] xl:h-[260px] lg:h-[260px] md:h-[260px] sm:h-[260px]  hover:-translate-y-5  shadow-lg transition-transform duration-200 items-center flex flex-row justify-center py-12 hover:shadow-xl  rounded-lg hover:shadow-orange-200 ' key={i} data-aos="fade-down" data-aos-delay={i*100}>
                            <div className='w-[30%] h-full flex items-center justify-center'>
                            <div className='w-3/4 h-full relative '>
                                    <Image src={item.image} alt="group" fill className='object-contain '></Image>
                                </div>
                            </div>
                            <div className="text-center  w-[70%] h-full text-center flex flex-col items-center justify-center ">
                                <h1 className="text-3xl md:text-3xl xl:text-5xl lg:text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent drop-shadow-md animate-fade-in">
                                    {item.title}
                                </h1>
                                <h2 className="mt-2 text-l md:text-xl xl:text-3xl lg:text-2xl sm:text-2xl md:text-3xl font-semibld tracking-wide bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent drop-shadow-sm animate-fade-in delay-200 font-bold">
                                    {item.caption}
                                </h2>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ClientSection />
            <Footer />
        </div>
    )
}

export default GroupsPage