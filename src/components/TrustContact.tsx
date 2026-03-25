import { useScrollReveal } from '../hooks/useScrollReveal'

export default function TrustContact() {
  const revealRef = useScrollReveal()

  return (
    <section className="trust-lux" id="contact" ref={revealRef}>
      <div className="container">
        
        <div className="trust-lux__grid">
          <div className="trust-lux__content fade-up">
            <span className="section-eyebrow">Connect</span>
            <h2 className="trust-lux__title">Begin Your Journey</h2>
            <p className="trust-lux__desc">
              Whether you're looking for a complete architectural overhaul or bespoke modular 
              additions, our experts are ready to translate your vision into reality.
            </p>
            
            <div className="trust-lux__details">
              <div className="detail-item">
                <span className="detail-label">Studio</span>
                <p>Office No. 17, Zirakpur<br/>Punjab, India</p>
              </div>
              <div className="detail-item">
                <span className="detail-label">Direct Line</span>
                <a href="tel:9255045552" className="detail-link">92550-45552</a>
              </div>
            </div>

            <a href="tel:9255045552" className="btn-solid-dark">
              Schedule a Consultation
            </a>
          </div>

          <div className="trust-lux__image-wrap fade-up stagger-2">
            <img 
              src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80" 
              alt="Luxury architect workspace" 
              className="trust-lux__image"
            />
          </div>
        </div>

      </div>
      <footer className="footer-lux">
        <p>© {new Date().getFullYear()} Domestic Dial. Crafted for modern living.</p>
      </footer>
    </section>
  )
}
