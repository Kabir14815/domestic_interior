import { BookOpen, Lightbulb, ClipboardList } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const items = [
  {
    icon: BookOpen,
    title: 'Design briefs',
    text: 'Bring references, rough dimensions, and priority rooms—we show how to turn mood boards into a scoped plan with realistic phases.',
  },
  {
    icon: Lightbulb,
    title: 'Material intelligence',
    text: 'Understand where to invest (structure, wet areas, openings) versus where smart substitutes keep the look without compromising longevity.',
  },
  {
    icon: ClipboardList,
    title: 'Project checkpoints',
    text: 'From slab to snagging: our review gates, photo documentation, and sign-off rhythm so progress is visible even when you are off-site.',
  },
]

export default function KnowledgeHub() {
  const revealRef = useScrollReveal()

  return (
    <section className="landing-knowledge" id="knowledge" ref={revealRef}>
      <div className="container">
        <header className="landing-knowledge__header fade-up">
          <span className="landing-knowledge__eyebrow">Knowledge hub</span>
          <h2 className="landing-knowledge__title">Clarity before construction</h2>
          <p className="landing-knowledge__subtitle">
            Practical notes from our studio—budget guardrails, material trade-offs, and how we run site
            reviews—so you walk into build week with fewer surprises.
          </p>
        </header>
        <div className="landing-knowledge__grid">
          {items.map((item, i) => (
            <article
              key={item.title}
              className="landing-knowledge__card fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="landing-knowledge__icon" aria-hidden>
                <item.icon size={22} strokeWidth={1.25} />
              </div>
              <h3 className="landing-knowledge__card-title">{item.title}</h3>
              <p className="landing-knowledge__card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
