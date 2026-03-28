import {
  Compass,
  Bot,
  Shield,
  Truck,
  Sparkles,
  Settings,
  KeyRound,
  Plane,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const phases = [
  {
    id: 'dream',
    label: 'Dream it',
    icon: Compass,
    headline: 'See your home before the first brick is laid.',
    points: ['Immersive VR', '3D renderings', 'Precision drafting'],
    visual:
      'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=85',
    visualAlt: 'Person exploring a virtual interior',
    cta: 'Experience VR home',
    ctaIcon: Sparkles,
    href: '#contact',
  },
  {
    id: 'build',
    label: 'Build it',
    icon: Bot,
    headline: 'Factory precision. No mess, just perfection.',
    points: ['Bespoke joinery', 'Smart-home integration', 'Factory finish'],
    visual:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85',
    visualAlt: 'Modular kitchen detail',
    cta: 'Build your home',
    ctaIcon: Settings,
    href: '#contact',
  },
  {
    id: 'protect',
    label: 'Protect it',
    icon: Shield,
    headline: 'Unobstructed views, absolute security.',
    points: ['Security glass', 'Smart entry', 'Comprehensive warranties'],
    visual:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85',
    visualAlt: 'Modern balcony with glass railings',
    cta: 'Secure your sanctuary',
    ctaIcon: KeyRound,
    href: '#contact',
  },
  {
    id: 'move',
    label: 'Move it',
    icon: Truck,
    headline: 'Handing over the keys to your new life.',
    points: ['Concierge packing', 'White-glove transit', 'Global logistics'],
    visual:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85',
    visualAlt: 'Professional move coordination',
    cta: 'Plan your move',
    ctaIcon: Plane,
    href: '#contact',
  },
] as const

export default function FourStepJourney() {
  const revealRef = useScrollReveal()

  return (
    <section className="landing-process" id="process" ref={revealRef}>
      <div className="container">
        <header className="landing-process__header fade-up">
          <span className="landing-process__eyebrow">Our process</span>
          <h2 className="landing-process__title">From vision to keys—under one roof</h2>
          <p className="landing-process__subtitle">
            Four disciplined phases. One accountable partner. Built for homes that demand more.
          </p>
        </header>

        <div className="landing-process__grid">
          {phases.map((phase, i) => (
            <article
              key={phase.id}
              className="landing-process__card fade-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="landing-process__card-top">
                <div className="landing-process__icon-wrap" aria-hidden>
                  <phase.icon size={26} strokeWidth={1.25} />
                </div>
                <span className="landing-process__phase">{phase.label}</span>
              </div>
              <h3 className="landing-process__headline">{phase.headline}</h3>
              <ul className="landing-process__points">
                {phase.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="landing-process__visual">
                <img src={phase.visual} alt={phase.visualAlt} loading="lazy" decoding="async" />
              </div>
              <a href={phase.href} className="landing-process__btn">
                <phase.ctaIcon size={16} strokeWidth={1.5} aria-hidden />
                {phase.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
