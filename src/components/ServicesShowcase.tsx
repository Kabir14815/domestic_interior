import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  { icon: '/services/3d-visualization.png', title: '3D Visualization', blurb: 'Walk spaces before they exist.' },
  { icon: '/services/upvc-windows.png', title: 'uPVC Windows', blurb: 'Efficient, durable fenestration.' },
  { icon: '/services/modular-kitchen.png', title: 'Modular Kitchen', blurb: 'Factory-finished, site-perfect.' },
  { icon: '/services/invisible-grills.png', title: 'Invisible Grills', blurb: 'Safety without spoiling the view.' },
  { icon: '/services/mosquito-nets.png', title: 'Mosquito Nets', blurb: 'Seamless screening systems.' },
  { icon: '/services/slim-partitions.png', title: 'Slim Partitions', blurb: 'Light, structure, privacy.' },
  { icon: '/services/interior-design.png', title: 'Interior Design', blurb: 'Materiality, lighting, flow.' },
  { icon: '/services/packers-movers.png', title: 'Packers & Movers', blurb: 'White-glove relocation support.' },
]

export default function ServicesShowcase() {
  const revealRef = useScrollReveal()

  return (
    <section className="home-services" id="services" ref={revealRef}>
      <div className="container">
        <header className="home-services__header fade-up">
          <span className="home-services__eyebrow">Capabilities</span>
          <h2 className="home-services__title">Everything your home needs—curated in one place</h2>
          <p className="home-services__intro">
            From visualization to handover, we align specialists under one plan so you are not chasing
            quotes, timelines, or quality across a dozen vendors.
          </p>
        </header>
        <ul className="home-services__grid" role="list">
          {services.map((s, i) => (
            <li key={s.title} className="home-services__item fade-up" style={{ transitionDelay: `${i * 45}ms` }}>
              <a href="#contact" className="home-services__card">
                <div className="home-services__icon-wrap">
                  <img src={s.icon} alt="" width={40} height={40} />
                </div>
                <div className="home-services__body">
                  <span className="home-services__name">{s.title}</span>
                  <span className="home-services__blurb">{s.blurb}</span>
                </div>
                <span className="home-services__arrow" aria-hidden>
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
