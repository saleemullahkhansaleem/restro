import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import WhySection from '@/components/sections/WhySection'
import PricingSection from '@/components/sections/PricingSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhySection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
