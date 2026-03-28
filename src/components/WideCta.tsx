import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function WideCta() {
  const revealRef = useScrollReveal()

  return (
    <section className="home-wide-cta" ref={revealRef}>
      <div className="container">
        <div className="home-wide-cta__panel fade-up">
          <div className="home-wide-cta__glow" aria-hidden />
          <div className="home-wide-cta__content">
            <h2 className="home-wide-cta__title">Ready to see your home before the first brick?</h2>
            <p className="home-wide-cta__text">
              Book a consultation—we will map visualization, build scope, protection systems, and move support
              so you can decide with confidence.
            </p>
            <div className="home-wide-cta__actions">
              <a href="tel:9255045552" className="home-wide-cta__btn home-wide-cta__btn--primary">
                <Phone size={18} strokeWidth={1.75} aria-hidden />
                Call 92550-45552
              </a>
              <Link to="/our-work" className="home-wide-cta__btn home-wide-cta__btn--ghost">
                Browse studio gallery
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
