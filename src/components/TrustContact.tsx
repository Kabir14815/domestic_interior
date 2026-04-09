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
    id: 'gohana',
    label: 'Gohana',
    lines: ['Opp. Riya Nursery, Meham Fatak, Meham Road, Gohana — 131301'],
    phones: [
      { display: '89503 97626', tel: '+918950397626' },
      { display: '83980 00670', tel: '+918398000670' },
    ],
  },
] as const

/** Supply partner — text only (no card image). */
const partnerMjTraders = {
  name: 'MJ TRADERS',
  tagline: 'Build to endure',
  established: '2022',
  contactName: 'Somi Jangra',
  role: 'Managing Director',
  phones: [
    { display: '90503 82756', tel: '+919050382756', label: 'Mobile' },
    { display: '86890 30589', tel: '+918689030589', label: 'Office' },
  ],
  addresses: [
    'Opp. Rest House, Railway Road, Sampla',
    'Under Flyover, Kharkhoda Road, Sampla',
  ],
  services: 'Plywood, hardware, furniture, and all kinds of interior & exterior solutions.',
  noteHi: 'नोट: घर की सजावट का सारा सामान मिलता है।',
} as const

export default function TrustContact() {
  const revealRef = useScrollReveal()

  return (
    <section className="landing-contact" id="contact" ref={revealRef}>
      <div className="container">
        <div className="landing-contact__panel fade-up">
          <h2 className="landing-contact__title">Book a consultation</h2>
          <p className="landing-contact__desc">
            Tell us about your home goals. We’ll map the right mix of visualization, glazing, joinery, and
            finishes—and reply with next steps.
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

          <div className="landing-contact__partners fade-up" aria-labelledby="contact-partners-heading">
            <p id="contact-partners-heading" className="landing-contact__partners-title">
              Our partners
            </p>
            <p className="landing-contact__partners-lead">
              Trusted supply partners we recommend for materials, hardware, and fit-out support.
            </p>
            <article className="landing-contact__partner-card">
              <div className="landing-contact__partner-card-head">
                <div className="landing-contact__partner-card-titles">
                  <h3 className="landing-contact__partner-name">{partnerMjTraders.name}</h3>
                  <p className="landing-contact__partner-tagline">
                    {partnerMjTraders.tagline}
                    <span className="landing-contact__partner-est"> · Est. {partnerMjTraders.established}</span>
                  </p>
                </div>
              </div>
              <p className="landing-contact__partner-person">
                {partnerMjTraders.contactName}
                <span className="landing-contact__partner-role"> — {partnerMjTraders.role}</span>
              </p>
              <div className="landing-contact__partner-phones" aria-label="MJ Traders phone numbers">
                {partnerMjTraders.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="landing-contact__partner-phone">
                    <span className="landing-contact__partner-phone-label">{p.label}</span>
                    {p.display}
                  </a>
                ))}
              </div>
              <div className="landing-contact__partner-addresses" aria-label="MJ Traders locations in Sampla">
                <p className="landing-contact__partner-addr-label">Sampla</p>
                <ul className="landing-contact__partner-addr-list">
                  {partnerMjTraders.addresses.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <p className="landing-contact__partner-services">{partnerMjTraders.services}</p>
              <p className="landing-contact__partner-note-hi" lang="hi">
                {partnerMjTraders.noteHi}
              </p>
            </article>
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
            <div className="landing-footer__col landing-footer__col--wide">
              <p className="landing-footer__col-title">Our partners</p>
              <div className="landing-footer__partner">
                <p className="landing-footer__partner-name">{partnerMjTraders.name}</p>
                <p className="landing-footer__partner-meta">
                  {partnerMjTraders.tagline} · Est. {partnerMjTraders.established}
                </p>
                <p className="landing-footer__partner-person">
                  {partnerMjTraders.contactName}, {partnerMjTraders.role}
                </p>
                <ul className="landing-footer__list landing-footer__list--tight">
                  {partnerMjTraders.addresses.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <ul className="landing-footer__list landing-footer__list--phones">
                  {partnerMjTraders.phones.map((p) => (
                    <li key={p.tel}>
                      <a href={`tel:${p.tel}`} className="landing-footer__link">
                        {p.label}: {p.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
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
