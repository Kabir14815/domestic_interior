import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'What does “complete project management” include?',
    a: 'We coordinate design visualization, execution partners, security and glass systems, and move-in logistics—so you have a single point of accountability instead of juggling multiple contractors.',
  },
  {
    q: 'How long does a typical home project take?',
    a: 'Timelines depend on scope, approvals, and finishes. After discovery, we share a phased schedule with clear milestones so you always know what happens next.',
  },
  {
    q: 'Can you work with my architect or contractor?',
    a: 'Yes. We often plug into existing teams for visualization, joinery, glazing, or relocation—wherever you need specialist execution aligned to one plan.',
  },
  {
    q: 'Where are you based, and do you travel?',
    a: 'Our studio is in Zirakpur. We serve the region directly and can support logistics and coordination for broader requirements case by case.',
  },
]

export default function FaqsSection() {
  const revealRef = useScrollReveal()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="landing-faq" id="faqs" ref={revealRef}>
      <div className="container">
        <header className="landing-faq__header fade-up">
          <span className="landing-faq__eyebrow">FAQs</span>
          <h2 className="landing-faq__title">Questions we hear most</h2>
        </header>
        <ul className="landing-faq__list">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.q} className="landing-faq__item fade-up">
                <button
                  type="button"
                  className="landing-faq__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={20}
                    strokeWidth={1.5}
                    className={`landing-faq__chevron${isOpen ? ' is-open' : ''}`}
                    aria-hidden
                  />
                </button>
                <div className={`landing-faq__panel${isOpen ? ' is-open' : ''}`}>
                  <div className="landing-faq__panel-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
