import { useScrollReveal } from '../hooks/useScrollReveal'

const offices = [
  {
    id: 'zirakpur',
    label: 'Zirakpur',
    lines: [
      'Office no. 17, Domestic Dial',
      'Motia Guildford Square, Aerocity Rd',
      'Zirakpur, Punjab 140603',
    ],
    phones: [{ display: '92550 45552', tel: '+919255045552' }],
  },
  {
    id: 'gurugram',
    label: 'Gurugram',
    lines: [
      'Contact: Swarn',
      'Plot No. 209, E/16 D',
      'Gurugram, Haryana 122001',
    ],
    phones: [{ display: '95559 88033', tel: '+919555988033' }],
  },
] as const

export default function TrustContact() {
  const revealRef = useScrollReveal()

  return (
    <section className="landing-contact" id="contact" ref={revealRef}>
      <div className="container">
        <div className="landing-contact__panel fade-up">
          <h2 className="landing-contact__title">Book a consultation</h2>
          <p className="landing-contact__desc">
            Tell us about your home goals across North India. We’ll map the right mix of
            visualization, glazing, joinery, finishes, and turnkey handover—and reply with next steps.
          </p>

          <div className="landing-contact__locations" aria-label="Office locations">
            {offices.map((o) => (
              <div key={o.id} className="landing-contact__loc">
                <p className="landing-contact__loc-label">{o.label}</p>
                {o.lines.map((line) => (
                  <p key={line} className="landing-contact__loc-line">
                    {line}
                  </p>
                ))}
                <div className="landing-contact__loc-phones" aria-label={`Phone numbers for ${o.label}`}>
                  {o.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="landing-contact__loc-phone">
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
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
                  <li key={o.id}>
                    <span className="landing-footer__office-label">{o.label}</span>
                    <span className="landing-footer__office-addr">{o.lines.join(', ')}</span>
                    <ul className="landing-footer__office-phones">
                      {o.phones.map((p) => (
                        <li key={p.tel}>
                          <a href={`tel:${p.tel}`} className="landing-footer__link">
                            {p.display}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="landing-footer__copy">
            © {new Date().getFullYear()} Domestic Dial Home Solutions LLP. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}
