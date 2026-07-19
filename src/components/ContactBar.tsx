import { MessageCircle } from 'lucide-react'
import { SITE_PHONE_DISPLAY, SITE_WHATSAPP } from '../data/siteSeo'

export default function ContactBar() {
  return (
    <section className="contact-bar" aria-label="Quick contact">
      <div className="container">
        <a
          href={`https://wa.me/${SITE_WHATSAPP}`}
          className="contact-bar__link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-bar__text">
            Let's discuss your project | Call us: <strong>{SITE_PHONE_DISPLAY}</strong>
          </span>
          <MessageCircle size={22} strokeWidth={1.75} className="contact-bar__wa" aria-hidden />
        </a>
      </div>
    </section>
  )
}
