import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  { icon: '/services/3d-visualization.png', title: '3D Visualization' },
  { icon: '/services/upvc-windows.png', title: 'uPVC Windows' },
  { icon: '/services/modular-kitchen.png', title: 'Modular Kitchen' },
  { icon: '/services/invisible-grills.png', title: 'Invisible Grills' },
  { icon: '/services/mosquito-nets.png', title: 'Mosquito Nets' },
  { icon: '/services/slim-partitions.png', title: 'Slim Partitions' },
  { icon: '/services/interior-design.png', title: 'Interior Design' },
  { icon: '/services/packers-movers.png', title: 'Packers & Movers' },
]

export default function Hero() {
  const revealRef = useScrollReveal()

  return (
    <section className="hero-lux" id="services" ref={revealRef}>
      {/* Dynamic Background */}
      <div className="hero-lux__bg-wrap reveal-clip">
        <img 
          src="https://images.unsplash.com/photo-1620626011740-1bc3cb9d09de?w=1920&q=85" 
          alt="Luxury living room" 
          className="hero-lux__bg-img"
        />
        <div className="hero-lux__overlay"></div>
      </div>

      <div className="hero-lux__inner container">
        
        {/* Massive Luxury Typography */}
        <div className="hero-lux__text-block fade-up stagger-1">
          <span className="hero-lux__badge">Bespoke Design & Build</span>
          <h1 className="hero-lux__title">
            Elevate Your <br />
            <span>Living Space</span>
          </h1>
          <p className="hero-lux__subtitle">
            Impeccable craftsmanship and complete home solutions, perfectly orchestrated from a single touchpoint.
          </p>
          <div className="hero-lux__cta-row">
            <a href="#contact" className="btn-solid-gold">
              Consult an Expert
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Floating Glassmorphism Services Card */}
        <div className="hero-lux__services-card glass-panel fade-up stagger-2">
          <div className="glass-panel__header">
            <h3>Explore Services</h3>
            <span className="line-accent"></span>
          </div>
          
          <div className="hero-lux__services-grid">
            {services.map((service, i) => (
              <a 
                key={service.title} 
                href="#contact" 
                className={`hero-lux__service-item fade-up`}
                style={{ transitionDelay: `${400 + (i * 50)}ms` }}
              >
                <div className="hero-lux__service-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <span className="hero-lux__service-label">{service.title}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
