"use client"
import Image from 'next/image'
import React, { useRef } from 'react';

const GroupsPage = () => {
    const groupsRef = useRef<HTMLDivElement>(null);
    let groups = ["", ""]
    return (
        <div className='w-full h-full flex flex-wrap justify-center items-center space-y-4'>

            <div className='w-full h-full flex items-evenly justify-evenly  flex-wrap space-y-4' ref={groupsRef}>
                {groups.map((item, i) => {
                    return (
                        <div className='w-[90%] xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[80%] h-[150px] xl:h-[180px]  lg:h-[160px] md:h-[150px]
          sm:h-[200px]   relative shadow-lg rounded-lg ' key={i} >
                            <Image src={item} alt="group" fill className='object-fill w-1/2'></Image>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GroupsPage