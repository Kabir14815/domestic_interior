import { useScrollReveal } from '../hooks/useScrollReveal'

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
          <div className="landing-contact__actions">
            <a href="tel:9255045552" className="landing-contact__btn-primary">
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
          <p className="landing-footer__text">
            <span>Office No. 17, Zirakpur</span>
            <span className="landing-footer__sep" aria-hidden>
              |
            </span>
            <span>
              Phone:{' '}
              <a href="tel:9255045552" className="landing-footer__link">
                92550-45552
              </a>
            </span>
            <span className="landing-footer__sep" aria-hidden>
              |
            </span>
            <span>© {new Date().getFullYear()} Domestic Dial. All rights reserved.</span>
          </p>
        </div>
      </footer>
    </section>
  )
}
