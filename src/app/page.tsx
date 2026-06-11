import React from 'react'
import ContactUsSection from './_components/contact-us'
import HeroSection from './_components/hero'
import AboutMeSection from './_components/about-me'
import MySkillsSection from './_components/my-skills'
import TechnologySection from './_components/technology'
import ProjectsSection from './_components/projects'
import MyDesignSection from './_components/my-design'
import Certificates from './_components/certificates'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection/>
      <AboutMeSection/>
      <MySkillsSection/>
      <TechnologySection/>
      <Certificates/>
      <ProjectsSection/>
      <MyDesignSection/>
      <ContactUsSection/>
    </div>
  )
}

export default HomePage