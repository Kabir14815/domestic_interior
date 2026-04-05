import { useScrollReveal } from '../hooks/useScrollReveal'

const offices = [
  {
    id: 'zirakpur',
    label: 'Zirakpur',
    line: 'Office No. 17, Zirakpur',
  },
  {
    id: 'gohana',
    label: 'Gohana',
    line: 'Opp. Riya Nursery, Meham Fatak, Meham Road, Gohana — 131301',
  },
] as const

const phones = [
  { display: '92550 45552', tel: '+919255045552' },
  { display: '89503 97626', tel: '+918950397626' },
  { display: '83980 00670', tel: '+918398000670' },
] as const

export default function TrustContact() {
  const revealRef = useScrollReveal()

  return (
    <section className="landing-contact" id="contact" ref={revealRef}>
      <div className="container">
        <div className="landing-contact__panel fade-up">
          <h2 className="landing-contact__title">Book a consultation</h2>
          <p className="landing-contact__desc">
            Tell us about your home goals. We’ll map the right mix of visualization, build, protection,
            and move support—and reply with next steps.
          </p>

          <div className="landing-contact__locations" aria-label="Office locations">
            {offices.map((o) => (
              <div key={o.id} className="landing-contact__loc">
                <p className="landing-contact__loc-label">{o.label}</p>
                <p className="landing-contact__loc-line">{o.line}</p>
              </div>
            ))}
          </div>

          <div className="landing-contact__phones" aria-label="Phone numbers">
            {phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="landing-contact__phone-link">
                {p.display}
              </a>
            ))}
          </div>

          <div className="landing-contact__actions">
            <a href="tel:+919255045552" className="landing-contact__btn-primary">
              Call 92550-45552
            </a>
            <a href="https://wa.me/919255045552" className="landing-contact__btn-ghost" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <footer className="landing-footer">
        <div className="container landing-footer__inner">
          <div className="landing-footer__grid">
            <div className="landing-footer__col">
              <p className="landing-footer__col-title">Offices</p>
              <ul className="landing-footer__list">
                {offices.map((o) => (
                  <li key={o.id}>{o.line}</li>
                ))}
              </ul>
            </div>
            <div className="landing-footer__col">
              <p className="landing-footer__col-title">Phone</p>
              <ul className="landing-footer__list">
                {phones.map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="landing-footer__link">
                      {p.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="landing-footer__copy">
            © {new Date().getFullYear()} Domestic Dial. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}
