import { ArrowRight, Building2, KeyRound, LayoutGrid, Sofa, Umbrella } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { servicePillars, type ServicePillarId } from '../data/servicePillars'
import { useScrollReveal } from '../hooks/useScrollReveal'

const PILLAR_ICONS: Record<ServicePillarId, LucideIcon> = {
  'design-visualization': LayoutGrid,
  'interiors-craftsmanship': Sofa,
  'engineered-systems': Building2,
  'shading-solutions': Umbrella,
  'turnkey-relocation': KeyRound,
}

export default function ServicePillars() {
  const revealRef = useScrollReveal()

  return (
    <section className="service-pillars service-pillars--landing" id="services" ref={revealRef}>
      <div className="container">
        <header className="service-pillars__intro fade-up">
          <p className="service-pillars__brand">Domestic Dial Home Solutions</p>
          <h1 className="service-pillars__heading">Design to Handover</h1>
          <p className="service-pillars__lead">
            Five offerings for luxury homes across North India.
          </p>
        </header>

        <ul className="service-pillars__grid" role="list">
          {servicePillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[pillar.id]
            const cardContent = (
              <>
                <span className="service-pillars__media" aria-hidden>
                  <img
                    className="service-pillars__bg"
                    src={pillar.image}
                    alt=""
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <span className="service-pillars__overlay" />
                </span>
                <span className="service-pillars__num" aria-hidden>
                  0{i + 1}
                </span>
                <span className="service-pillars__icon-wrap" aria-hidden>
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <div className="service-pillars__body">
                  <h2 className="service-pillars__title">{pillar.cardLabel}</h2>
                  <p className="service-pillars__blurb">{pillar.blurb}</p>
                  <span className="service-pillars__explore">
                    Explore
                    <ArrowRight size={14} strokeWidth={1.75} aria-hidden />
                  </span>
                </div>
              </>
            )

            return (
              <li key={pillar.id} className="service-pillars__item fade-up" style={{ transitionDelay: `${i * 70}ms` }}>
                {pillar.externalUrl ? (
                  <a href={pillar.externalUrl} className="service-pillars__card">
                    {cardContent}
                  </a>
                ) : (
                  <Link to={`/services/category/${pillar.id}`} className="service-pillars__card">
                    {cardContent}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
