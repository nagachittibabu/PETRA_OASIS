"use client";

import React  from 'react'
import Person from '../cards/person'

let persons=[{"name":"chitti","imageurl":"/images/wrench.png","specialization":""}]

const TeamMembers = () => {
    return (
        <div className='w-full h-[800px] xl:h-[700px] lg:h-[690px] md:h-[980px] sm:h-[980px] flex justify-center items-center '>
            <div className='w-[95%] h-[90%]  rounded-lg shadow-lg flex flex-col space-y-6 justify-center bg-white'>
                <div className='w-full'>
                    <h1 className='text-center text-xl sm:text-2xl lg:text-4xl md:text-[3xl] font-bold font14'>Our Professional Team</h1>
                </div>
                <div className='w-[100%] flex justify-center'>
                    <p className='w-[85%] xl:W-[90%] lg:w-[90%] md:w-[90%] sm:w-[95%] text-center break-words text-[11px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] font10'>At Wahat Liwan Technical Services LLC . Our cohesive teams are the cornerstone of both our initial foundation and ongoing success.</p>
                </div>
                <div className='flex justify-center xl:justify-evenly lg:justify-evenly md:justify-center sm:justify-center xl:space-x-4 lg:space-x-4 md:sapce-x-3 sm:space-x-5  gap-y-4  flex-wrap ' data-aos="zoom-in" aos-delay="200">
                    {persons.map((item,i) => (
                        <div className='w-[90%] xl:w-1/4 h-[150px] xl:h-[350px] lg:h-[340px] md:h-[330 px] sm:h-[320px] lg:w-[32%] md:w-[40%] sm:w-[42%]  ' key={i}>
                            <Person imageurl={item.imageurl} name={item.name} specialization={item.specialization} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default TeamMembers