import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

function sectionLink(pathname: string, id: string) {
  return pathname === '/' ? `#${id}` : `/#${id}`
}

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="site-header site-header--landing">
      <div className="site-header__inner site-header__inner--landing container">
        <Link to="/" className="site-header__brand" onClick={close}>
          <span className="site-header__brand-icon" aria-hidden>
            <img
              src="/domestic-dial-logo.png"
              alt=""
              width={44}
              height={44}
              decoding="async"
            />
          </span>
          <span className="site-header__brand-text">
            <span className="site-header__brand-name">Domestic Dial</span>
            <span className="site-header__brand-tagline">complete project management partner</span>
          </span>
        </Link>

        <nav className="site-header__nav site-header__nav--landing" aria-label="Main">
          <Link to="/" onClick={close}>
            Home
          </Link>
          <Link to={sectionLink(pathname, 'services')} onClick={close}>
            Services
          </Link>
          <Link to={sectionLink(pathname, 'process')} onClick={close}>
            Our Process
          </Link>
          <Link to="/our-work" onClick={close}>
            Our work
          </Link>
          <Link to={sectionLink(pathname, 'knowledge')} onClick={close}>
            Knowledge Hub
          </Link>
          <Link to={sectionLink(pathname, 'faqs')} onClick={close}>
            FAQs
          </Link>
        </nav>

        <div className="site-header__actions">
          <Link
            to={sectionLink(pathname, 'contact')}
            className="site-header__cta"
            onClick={close}
          >
            <Sparkles size={14} strokeWidth={2} aria-hidden />
            Book consultation
          </Link>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="site-header__drawer" id="mobile-nav">
          <nav className="site-header__drawer-nav" aria-label="Mobile">
            <Link to="/" onClick={close}>
              Home
            </Link>
            <Link to={sectionLink(pathname, 'services')} onClick={close}>
              Services
            </Link>
            <Link to={sectionLink(pathname, 'process')} onClick={close}>
              Our Process
            </Link>
            <Link to="/our-work" onClick={close}>
              Our work
            </Link>
            <Link to={sectionLink(pathname, 'knowledge')} onClick={close}>
              Knowledge Hub
            </Link>
            <Link to={sectionLink(pathname, 'faqs')} onClick={close}>
              FAQs
            </Link>
            <Link to={sectionLink(pathname, 'contact')} className="site-header__cta site-header__cta--block" onClick={close}>
              <Sparkles size={14} strokeWidth={2} aria-hidden />
              Book consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
