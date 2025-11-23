"use client"
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import ClientSection from '../components/clientSection';
import Footer from '../components/footer';


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
    let groups = [{"title":"PETRA OASIS","caption":"ELECTROMECHANICAL WORKS","image":"/images/logopng.png"},{"title":"SAQIR AL PETRA","caption":"PLASTER | TILES | PAINTS | CONT.","image":"/images/logopng.png"},{"title":"PETRA OASIS","caption":"TECHNICAL CONTRACTING","image":"/images/logopng.png"},{"title":"SAQIR AL PETRA","caption":"TECHNICAL SERVICES L.L.C","image":"/images/logopng.png"},{"title":"","caption":"PETRA FALCON TECHNICAL SERVICES L.L.C","image":"/images/logopng.png"}]
    return (
        <div className='w-full h-full flex flex-col flex-wrap justify-center items-center space-y-4'  >
            <h1 className='text-[30px] font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-blue-300 bg-clip-text text-transparent'>OUR GROUPS</h1>
            <div className='w-full h-full flex items-evenly justify-evenly  flex-wrap space-y-20 py-12 ' ref={groupsRef} data-aos="fadu-up" data-aos-delay="400">
                {groups.map((item, i) => {
                    return (
                        <div className='w-[90%] xl:w-[35%] lg:w-[40%] md:w-[40%] sm:w-[80%] h-[500px]  hover:-translate-y-5  shadow-lg transition-transform duration-200 items-center flex flex-col justify-center py-12 hover:shadow-xl  rounded-lg hover:shadow-orange-200 ' key={i} data-aos="fade-down" data-aos-delay={i*100}>
                            <div className='w-[90%] h-3/4 flex items-center justify-center'>
                                <div className='w-3/4 h-[100%] relative shadow-lg rounded-lg'>
                                    <Image src={item.image} alt="group" fill className='object-cover '></Image>
                                </div>
                            </div>
                            <div className='w-full h-1/4 text-center'>
                            <h1 className='text-[50px] font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent'>{item.title}</h1>
                            <h1 className='text-[30px] font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent'>{item.caption}</h1>
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