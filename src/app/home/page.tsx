import React from 'react'
import PromiseSection from '../components/promiseSection';
import CoreValueSection from '../components/corevalueSection';
import ProjectSection from '../components/projectSection';



const HomePage = () => {

  return (
    <div className='w-full h-full flex flex-col gap-y-4 '>
      <PromiseSection/>
      <CoreValueSection />
      <ProjectSection />
    
    </div>
  )
}

export default HomePage;