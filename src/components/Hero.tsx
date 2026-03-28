import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Hero() {
  const revealRef = useScrollReveal()

  return (
    <section className="landing-hero" id="home" ref={revealRef}>
      <div className="landing-hero__split reveal-clip" aria-hidden>
        <div className="landing-hero__half landing-hero__half--left">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85"
            alt=""
            className="landing-hero__half-img"
          />
          <div className="landing-hero__half-veil landing-hero__half-veil--left" />
        </div>
        <div className="landing-hero__half landing-hero__half--right">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85"
            alt=""
            className="landing-hero__half-img"
          />
          <div className="landing-hero__half-veil landing-hero__half-veil--right" />
        </div>
      </div>
      <div className="landing-hero__center-fade" aria-hidden />

      <div className="landing-hero__content container">
        <div className="landing-hero__text fade-up stagger-1">
          <h1 className="landing-hero__title">
            <span className="landing-hero__title-gold">Smart Design</span>
            <span className="landing-hero__title-for"> for </span>
            <span className="landing-hero__title-dark">Modern Living</span>
          </h1>
          <p className="landing-hero__subtitle">
            Stop chasing 10 different contractors. Get everything your home needs under one roof.
          </p>
          <Link to="/our-work" className="landing-hero__cta">
            Explore our work
            <ArrowRight size={18} strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
