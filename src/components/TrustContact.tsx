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
] as const

/** Supply partners — text only (no card image). */
const partners = [
  {
    name: 'Jatin Furniture',
    tagline: 'Furniture & interiors',
    contactName: ' Rahul Jangra',
    role: 'Partners',
    phones: [
      { display: '89503 97626', tel: '+918950397626', label: 'Sandeep' },
      { display: '83980 00670', tel: '+918398000670', label: 'Rahul' },
    ],
    regionLabel: 'Gohana',
    addresses: ['Opp. Riya Nursery, Meham Fatak, Meham Road, Gohana — 131301'],
  },
  {
    name: 'MJ TRADERS',
    tagline: 'Interior & Exterior Solution',
    established: '2022',
    contactName: 'Somi Jangra',
    role: 'Partner',
    phones: [
      { display: '90503 82756', tel: '+919050382756', label: 'Mobile' },
      { display: '86890 30589', tel: '+918689030589', label: 'Office' },
    ],
    regionLabel: 'Sampla',
    addresses: ['Opp. Rest House, Railway Road, Sampla, Haryana 124501'],
  },
  {
    name: 'JANGRA & ASSOCIATE',
    tagline: 'Interior & Exterior Solution',
    contactName: 'Sandeep Jangra ',
    role: 'Partner',
    phones: [
      { display: '97281 51787', tel: '+919728151787', label: 'Mobile' },
      { display: '89296 66398', tel: '+918929666398', label: 'Mobile' },
    ],
    regionLabel: 'Tosham',
    addresses: [
      'Shop no. 4, Sonu katiwal complex, opposite New tehsil, Tosham, Haryana 127040',
    ],
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
            <div className="landing-contact__partner-stack">
              {partners.map((partner) => (
                <article key={partner.name} className="landing-contact__partner-card">
                  <div className="landing-contact__partner-card-head">
                    <div className="landing-contact__partner-card-titles">
                      <h3 className="landing-contact__partner-name">{partner.name}</h3>
                      <p className="landing-contact__partner-tagline">
                        {partner.tagline}
                        {'established' in partner && partner.established ? (
                          <span className="landing-contact__partner-est"> · Est. {partner.established}</span>
                        ) : null}
                      </p>
                    </div>
                  </div>
                  <p className="landing-contact__partner-person">
                    {partner.contactName}
                    <span className="landing-contact__partner-role"> — {partner.role}</span>
                  </p>
                  <div
                    className="landing-contact__partner-phones"
                    aria-label={`${partner.name} phone numbers`}
                  >
                    {partner.phones.map((p) => (
                      <a key={p.tel} href={`tel:${p.tel}`} className="landing-contact__partner-phone">
                        <span className="landing-contact__partner-phone-label">{p.label}</span>
                        {p.display}
                      </a>
                    ))}
                  </div>
                  <div
                    className="landing-contact__partner-addresses"
                    aria-label={`${partner.name} locations in ${partner.regionLabel}`}
                  >
                    <p className="landing-contact__partner-addr-label">{partner.regionLabel}</p>
                    <ul className="landing-contact__partner-addr-list">
                      {partner.addresses.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
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
            © {new Date().getFullYear()} Domestic Dial. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}
