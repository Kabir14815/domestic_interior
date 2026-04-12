import { ExternalLink, Instagram } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function InstagramReels() {
  const revealRef = useScrollReveal()

  return (
    <section className="instagram-lux" id="social" ref={revealRef}>
      <div className="container">
        <div className="instagram-lux__inner fade-up">
          <div className="instagram-lux__visual" aria-hidden>
            <div className="instagram-lux__orb" />
            <Instagram size={48} strokeWidth={1} className="instagram-lux__logo" />
          </div>
          <div className="instagram-lux__copy">
            <span className="instagram-lux__eyebrow">Social</span>
            <h2 className="instagram-lux__title">Reels, walkthroughs & site energy</h2>
            <p className="instagram-lux__text">
              Follow along for 3D previews, VR teasers, material close-ups, and real project milestones.
              Full profiles can&apos;t be embedded here—tap through to Instagram for the latest reels.
            </p>
            <a
              href="https://www.instagram.com/domesticdial2021?utm_source=qr&igsh=OWN2cjdwbWV6c3Ry"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-lux__btn"
            >
              Open Instagram
              <ExternalLink size={18} strokeWidth={1.5} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
