import { ArrowUpRight, AppWindow, Box, Columns2, DoorOpen, Hammer, Layers2, Sparkles, Sun } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { domesticDialServices, type DomesticDialServiceId } from '../data/domesticDialServices'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SERVICE_ICONS: Record<DomesticDialServiceId, LucideIcon> = {
  '3d-visualization': Box,
  'aluminium-windows': AppWindow,
  'upvc-windows': Layers2,
  'glass-partitions': Columns2,
  'glass-skylight': Sun,
  'mosquito-doors': DoorOpen,
  'wooden-work': Hammer,
  'wall-decor-finishes': Sparkles,
}

type Props = {
  id?: string
  className?: string
  eyebrow: string
  title: string
  intro: string
}

export default function DomesticDialServicesSection({ id, className, eyebrow, title, intro }: Props) {
  const revealRef = useScrollReveal()
  const sectionClass = ['home-services', className].filter(Boolean).join(' ')

  return (
    <section className={sectionClass} id={id} ref={revealRef}>
      <div className="container">
        <header className="home-services__header fade-up">
          <span className="home-services__eyebrow">{eyebrow}</span>
          <h2 className="home-services__title">{title}</h2>
          <p className="home-services__intro">{intro}</p>
        </header>
        <ul className="home-services__grid" role="list">
          {domesticDialServices.map((s, i) => {
            const Icon = SERVICE_ICONS[s.id]
            return (
              <li key={s.id} className="home-services__item fade-up" style={{ transitionDelay: `${i * 45}ms` }}>
                <Link to="/#contact" className="home-services__card">
                  <div className="home-services__icon-wrap">
                    <Icon size={22} strokeWidth={1.5} aria-hidden className="home-services__lucide" />
                  </div>
                  <div className="home-services__body">
                    <span className="home-services__name">{s.title}</span>
                    <span className="home-services__blurb">{s.blurb}</span>
                  </div>
                  <span className="home-services__arrow" aria-hidden>
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
