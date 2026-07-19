import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ServicePillars from '../components/ServicePillars'
import ContactBar from '../components/ContactBar'
import ServicesShowcase from '../components/ServicesShowcase'
import FourStepJourney from '../components/FourStepJourney'
import WhyChoose from '../components/WhyChoose'
import ClientQuotes from '../components/ClientQuotes'
import VideoTestimonials from '../components/VideoTestimonials'
import InstagramReels from '../components/InstagramReels'
import KnowledgeHub from '../components/KnowledgeHub'
import FaqsSection from '../components/FaqsSection'
import TrustContact from '../components/TrustContact'
import WhatsAppButton from '../components/WhatsAppButton'
import Seo from '../components/Seo'
import { homeFaqs } from '../data/homeFaqs'
import { faqJsonLd, HOME_SEO, localBusinessJsonLd } from '../data/siteSeo'

export default function HomePage() {
  const { hash, pathname } = useLocation()
  const aboutRevealRef = useScrollReveal()

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
    <main id="main-content" className="site-main site-main--premium">
      <Seo
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        keywords={HOME_SEO.keywords}
        path="/"
        jsonLd={[localBusinessJsonLd(), faqJsonLd([...homeFaqs])]}
      />
      <ServicePillars />
      <ContactBar />
      <section className="landing-about" id="about" ref={aboutRevealRef}>
        <div className="container landing-about__grid">
          <div className="landing-about__visual fade-up">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
              alt="Luxury living room interior by Domestic Dial"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="landing-about__inner fade-up">
            <span className="landing-about__eyebrow">About Domestic Dial</span>
            <h2 className="landing-about__title">Design to relocation—one accountable partner</h2>
            <p className="landing-about__text">
              From 2D layouts and 3D visualization through premium interiors, engineered glazing systems,
              shading, and turnkey relocation—we coordinate every trade for luxury homes across Zirakpur,
              Chandigarh, Mohali, and Panchkula.
            </p>
          </div>
        </div>
      </section>
      <ServicesShowcase />
      <FourStepJourney />
      <WhyChoose />
      <ClientQuotes />
      <VideoTestimonials />
      <InstagramReels />
      <KnowledgeHub />
      <FaqsSection />
      <TrustContact />
      <WhatsAppButton />
    </main>
  )
}
