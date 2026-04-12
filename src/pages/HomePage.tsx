import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import ServicesShowcase from '../components/ServicesShowcase'
import FourStepJourney from '../components/FourStepJourney'
import WhyChoose from '../components/WhyChoose'
import ClientQuotes from '../components/ClientQuotes'
import VideoTestimonials from '../components/VideoTestimonials'
import InstagramReels from '../components/InstagramReels'
import KnowledgeHub from '../components/KnowledgeHub'
import FaqsSection from '../components/FaqsSection'
import WideCta from '../components/WideCta'
import TrustContact from '../components/TrustContact'
import WhatsAppButton from '../components/WhatsAppButton'

export default function HomePage() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') return
    const id = hash.replace(/^#/, '')
    if (!id) return
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }, [hash, pathname])

  return (
    <main id="main-content" className="site-main">
      <Hero />
      <TrustBar />
      <ServicesShowcase />
      <FourStepJourney />
      <WhyChoose />
      <ClientQuotes />
      <VideoTestimonials />
      <InstagramReels />
      <KnowledgeHub />
      <FaqsSection />
      <WideCta />
      <TrustContact />
      <WhatsAppButton />
    </main>
  )
}
