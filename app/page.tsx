import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { BackToTop } from '@/components/ui'

import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import ProcessStrip from '@/components/sections/ProcessStrip'
import Mission from '@/components/sections/Mission'
import Products from '@/components/sections/Products'
import Impact from '@/components/sections/Impact'
import Team from '@/components/sections/Team'
import Partners from '@/components/sections/Partners'
import Location from '@/components/sections/Location'
import Newsletter from '@/components/sections/Newsletter'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <ProcessStrip />
      <Mission />
      <Products />
      <Impact />
      <Team />
      <Partners />
      <Location />
      <Newsletter />
      <Footer />
      <BackToTop />
    </main>
  )
}
