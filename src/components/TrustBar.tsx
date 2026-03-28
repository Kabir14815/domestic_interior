import { Home, Calendar, Users, Layers } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { icon: Home, value: '500+', label: 'Homes & projects delivered' },
  { icon: Calendar, value: '12+', label: 'Years of coordinated execution' },
  { icon: Users, value: '1', label: 'Dedicated project partner' },
  { icon: Layers, value: '8', label: 'Specialist disciplines in-house' },
]

export default function TrustBar() {
  const revealRef = useScrollReveal()

  return (
    <section className="home-trust" aria-label="Trust highlights" ref={revealRef}>
      <div className="container">
        <div className="home-trust__grid">
          {stats.map((item, i) => (
            <div
              key={item.label}
              className="home-trust__cell fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="home-trust__icon" aria-hidden>
                <item.icon size={22} strokeWidth={1.25} />
              </div>
              <div className="home-trust__value">{item.value}</div>
              <div className="home-trust__label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
