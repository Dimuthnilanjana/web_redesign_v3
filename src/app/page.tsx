import About from '@/components/sections/about'
import Booking from '@/components/sections/booking'
import Faqs from '@/components/sections/faqs'
import Features from '@/components/sections/features'
import Hero from '@/components/sections/hero'
import Partners from '@/components/sections/partners'
import Pricing from '@/components/sections/pricing'
import Projects from '@/components/sections/projects'
import RecentProjects from '@/components/sections/recentProjects'
import Services from '@/components/sections/services'
import Testimonials from '@/components/sections/testimonials'
import WorkingProcess from '@/components/sections/workingProcess'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <RecentProjects />
      <Partners />
      <About />
      <WorkingProcess />
      <Services />
      <Projects />
      <Testimonials />
      <Features />
      <Pricing />
      <Faqs />
      <Booking />
    </main>

  )
}

export default Home