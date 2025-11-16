import Image from 'next/image'
import React from 'react'

const teamMembers = [
  { "name": "hello", "imageurl": "/images/personImage.png", "specialization": "btech" },
  { "name": "hello", "imageurl": "/images/personImage.png", "specialization": "btech" },
  { "name": "hello", "imageurl": "/images/personImage.png", "specialization": "btech" }
]
const TeamSection = () => {
  return (
    <div className='w-full h-max py-12  flex items-center justify-center'>
      <div className='w-[90%] h-max   flex items-center justify-center flex-col shadow-lg rounded-lg py-12 space-y-4 border  border-gray-100'>
        <h1 className='text-[25px] xl:text-[35px] lg:text-[33px] md:text-[30px] sm:text-[28px] font-bold'>OUR PROFESSIONAL TEAM</h1>
        <p className="w-[90%] text-center text-gray-600 text-[10px] xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[12px]  leading-relaxed px-4">
          Our professional team is built on precision, reliability, and hands-on expertise. Each member brings a unique specialization and a commitment to excellence, ensuring every project is executed with technical mastery and creative insight. Whether it's engineering, design, or deployment, our team operates like finely tuned tools — dependable, sharp, and always ready to deliver.
        </p>

        <div className='w-[90%] h-[80%] flex flex-wrap items-center justify-center gap-0 xl:gap-10 lg:gap-10 md:gap-8 sm:gap-0 py-12'>
          {teamMembers.map((item, i) => (
            <div className='w-[90%] xl:w-[28%] lg:w-[30%] md:w-[45%] sm:w-[50%] h-[400px]   py-2 flex flex-col items-center justify-center shadow-lg rounded-lg space-y-1' key={i}>
              <div className='w-[90%] h-[75%] relative rounded-full overflow-hidden teamMember '  >
                <Image src={item.imageurl} alt={item.name} fill className='object-cover' />
              </div>
              <h1 className='text-[25px] text-center font-bold h-[10%]'>{item.name}</h1>
              <h1 className='text-center text-[20px] h-[10%]'>{item.specialization}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection