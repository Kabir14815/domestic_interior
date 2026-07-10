import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { homeFaqs } from '../data/homeFaqs'
import { useScrollReveal } from '../hooks/useScrollReveal'

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
          {homeFaqs.map((item, i) => {
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
