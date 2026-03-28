import { Star } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const quotes = [
  {
    quote:
      'They translated our vague “warm minimal” brief into a 3D walkthrough we could feel. Construction felt coordinated instead of chaotic.',
    name: 'Meera & Arjun K.',
    role: 'Residential · Panchkula',
  },
  {
    quote:
      'Invisible grills and glass were the worry—we did not want a cage. The team nailed safety and the view. Communication was steady throughout.',
    name: 'Rahul S.',
    role: 'Apartment · Zirakpur',
  },
  {
    quote:
      'Modular kitchen install was cleaner than we expected. One timeline, one person answering the phone. That alone was worth it.',
    name: 'Priya D.',
    role: 'Villa · Mohali',
  },
]

export default function ClientQuotes() {
  const revealRef = useScrollReveal()

  return (
    <section className="home-quotes" id="stories" ref={revealRef}>
      <div className="container">
        <header className="home-quotes__header fade-up">
          <span className="home-quotes__eyebrow">Client stories</span>
          <h2 className="home-quotes__title">Real feedback from real homes</h2>
          <p className="home-quotes__subtitle">
            A snapshot of what people tell us after living with the results—not polished marketing lines.
          </p>
        </header>
        <div className="home-quotes__grid">
          {quotes.map((q, i) => (
            <blockquote
              key={q.name}
              className="home-quotes__card fade-up"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="home-quotes__stars" aria-hidden>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} strokeWidth={0} fill="currentColor" className="home-quotes__star" />
                ))}
              </div>
              <p className="home-quotes__text">&ldquo;{q.quote}&rdquo;</p>
              <footer className="home-quotes__meta">
                <cite className="home-quotes__name">{q.name}</cite>
                <span className="home-quotes__role">{q.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
