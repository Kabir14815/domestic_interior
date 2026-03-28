import { BadgeCheck, Clock3, Headphones } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars = [
  {
    icon: BadgeCheck,
    title: 'Accountability you can feel',
    text: 'One studio orchestrates scope, vendors, and site rhythm—so decisions are documented, dependencies are visible, and nothing falls between teams.',
  },
  {
    icon: Clock3,
    title: 'Schedules with breathing room',
    text: 'We build phased timelines with buffer for approvals and materials, then communicate shifts early—so you are never guessing what happens next.',
  },
  {
    icon: Headphones,
    title: 'A partner through handover',
    text: 'From first sketch to keys and move-in logistics, you have a consistent point of contact who knows your home’s story end to end.',
  },
]

export default function WhyChoose() {
  const revealRef = useScrollReveal()

  return (
    <section className="home-why" id="why-us" ref={revealRef}>
      <div className="container">
        <div className="home-why__layout">
          <div className="home-why__intro fade-up">
            <span className="home-why__eyebrow">Why Domestic Dial</span>
            <h2 className="home-why__title">Designed for homeowners who want clarity, not chaos</h2>
            <p className="home-why__lead">
              Luxury is not only how a space looks—it is how confidently it gets built. We combine
              visualization rigor, execution discipline, and transparent communication.
            </p>
            <div className="home-why__accent-line" aria-hidden />
          </div>
          <ul className="home-why__list" role="list">
            {pillars.map((p, i) => (
              <li key={p.title} className="home-why__pillar fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="home-why__pillar-icon" aria-hidden>
                  <p.icon size={24} strokeWidth={1.25} />
                </div>
                <h3 className="home-why__pillar-title">{p.title}</h3>
                <p className="home-why__pillar-text">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
