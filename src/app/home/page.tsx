import PromiseSection from '../components/promiseSection';
import CoreValueSection from '../components/corevalueSection';
import ProjectSection from '../components/projectSection';
import HomeCarousel from '../components/HomeCarousel';
import ClientSection from '../components/clientSection';
import TeamSection from '../components/teamSection';
import Footer from '../components/footer';




const HomePage = () => {

  return (
    <div className="w-full h-full bg-white">
      <HomeCarousel />
      <PromiseSection />
      <CoreValueSection />
      <ProjectSection />
      <TeamSection />
      <ClientSection />  
      <Footer />
</div>
  )
}

export default HomePage;