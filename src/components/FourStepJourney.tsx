import { Compass, Hammer, Shield, Truck } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    phase: '01',
    title: 'Vision',
    icon: Compass,
    description: 'Immersive 3D visualization to perfect every detail before the work begins.',
  },
  {
    phase: '02',
    title: 'Craft',
    icon: Hammer,
    description: 'Master execution using premium materials — from modular kitchens to uPVC logic.',
  },
  {
    phase: '03',
    title: 'Secure',
    icon: Shield,
    description: 'Seamless integration of invisible grills and protective systems.',
  },
  {
    phase: '04',
    title: 'Settle',
    icon: Truck,
    description: 'White-glove relocation ensures your transition is as smooth as your new home.',
  },
]

export default function FourStepJourney() {
  const revealRef = useScrollReveal()

  return (
    <section className="journey-lux" id="journey" ref={revealRef}>
      <div className="container">
        <div className="journey-lux__header fade-up">
          <span className="section-eyebrow">The Process</span>
          <h2 className="journey-lux__title">Orchestrated Elegance</h2>
          <p className="journey-lux__subtitle">A refined four-phase approach to luxury living.</p>
        </div>

        <div className="journey-lux__grid">
          {steps.map((step, i) => (
            <article 
              key={step.phase} 
              className="journey-lux__card fade-up"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="journey-lux__card-inner">
                <div className="journey-lux__icon">
                  <step.icon size={26} strokeWidth={1} />
                </div>
                <div className="journey-lux__content">
                  <span className="journey-lux__phase">Phase {step.phase}</span>
                  <h3 className="journey-lux__card-title">{step.title}</h3>
                  <p className="journey-lux__card-desc">{step.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
