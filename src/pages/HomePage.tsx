import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import FourStepJourney from '../components/FourStepJourney'
import Gallery from '../components/Gallery'
import VideoTestimonials from '../components/VideoTestimonials'
import InstagramReels from '../components/InstagramReels'
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
    <>
      <Hero />
      <FourStepJourney />
      <Gallery />
      <VideoTestimonials />
      <section className="instagram-block">
        <div className="container">
          <InstagramReels />
        </div>
      </section>
      <TrustContact />
      <WhatsAppButton />
    </>
  )
}
