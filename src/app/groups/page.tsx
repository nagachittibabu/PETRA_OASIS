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
        <div className='w-full h-full flex flex-col flex-wrap justify-center items-center space-y-4'  >
            <h1 className='text-[40px] font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-blue-300 bg-clip-text text-transparent'>OUR GROUPS</h1>
            <div className='w-full h-full flex items-evenly justify-evenly  flex-wrap space-y-20 py-12 ' ref={groupsRef} data-aos="fadu-up" data-aos-delay="400">
                {groups.map((item, i) => {
                    return (
                        <div className='w-[90%] xl:w-[35%] lg:w-[40%] md:w-[40%] sm:w-[80%] h-[550px]  hover:-translate-y-5  shadow-lg transition-transform duration-200 items-center flex flex-col justify-center py-12 hover:shadow-xl  rounded-lg hover:shadow-orange-200 ' key={i} data-aos="fade-down" data-aos-delay={i*100}>
                            <div className='w-[90%] h-3/4 flex items-center justify-center'>
                                <div className='w-3/4 h-[100%] relative shadow-lg rounded-lg'>
                                    <Image src={item.image} alt="group" fill className='object-contain '></Image>
                                </div>
                            </div>
                            <div className="text-center px-4 py-6 w-full h-1/4 text-center">
                                <h1 className="text-4xl md:text-4xl xl:text-5xl lg:text-5xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent drop-shadow-md animate-fade-in">
                                    {item.title}
                                </h1>
                                <h2 className="mt-2 text-2xl md:text-xl xl:text-3xl lg:text-2xl sm:text-4xl md:text-3xl font-semibld tracking-wide bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent drop-shadow-sm animate-fade-in delay-200 font-bold">
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