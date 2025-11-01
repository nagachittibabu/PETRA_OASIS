import React from 'react'
import HomeCarousel from '../components/carousel'
import ClientSection from '../components/clientSection'
import Footer from '../components/footer'
import Header from '../components/header'
import TeamMembers from '../components/TeamMembers'

const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <Header />
      <HomeCarousel />
      <TeamMembers />
      <ClientSection />
      <Footer />
    </div>
  )
}

export default HomePage