import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { servicePillars } from '../data/servicePillars'

function sectionLink(pathname: string, id: string) {
  return pathname === '/' ? `#${id}` : `/#${id}`
}

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  const close = () => {
    setOpen(false)
    setServicesOpen(false)
  }

  useEffect(() => {
    if (!servicesOpen) return
    const onDoc = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [servicesOpen])

  const headerClass = ['site-header', 'site-header--landing'].join(' ')

  return (
    <header className={headerClass}>
      <div className="site-header__inner site-header__inner--landing container">
        <Link to="/" className="site-header__brand" onClick={close}>
          <span className="site-header__brand-icon" aria-hidden>
            <img src="/domestic-dial-mark.png" alt="" width={44} height={44} decoding="async" />
          </span>
          <span className="site-header__brand-text">
            <span className="site-header__brand-name">Domestic Dial Home Solutions</span>
            <span className="site-header__brand-tagline">Architectural Fenestration &amp; Home Solutions</span>
          </span>
        </Link>

        <nav className="site-header__nav site-header__nav--landing" aria-label="Main">
          <Link to={sectionLink(pathname, 'about')} onClick={close}>
            About
          </Link>
          <Link to="/our-work" onClick={close}>
            Portfolio
          </Link>
          <div className="site-header__dropdown" ref={servicesRef}>
            <button
              type="button"
              className="site-header__dropdown-btn"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown size={14} strokeWidth={2} aria-hidden className={servicesOpen ? 'is-open' : ''} />
            </button>
            {servicesOpen ? (
              <div className="site-header__dropdown-menu" role="menu">
                {servicePillars.map((p) =>
                  p.externalUrl ? (
                    <a
                      key={p.id}
                      href={p.externalUrl}
                      className="site-header__dropdown-item"
                      role="menuitem"
                      onClick={close}
                    >
                      {p.title}
                    </a>
                  ) : (
                    <Link
                      key={p.id}
                      to={`/services/category/${p.id}`}
                      className="site-header__dropdown-item"
                      role="menuitem"
                      onClick={close}
                    >
                      {p.title}
                    </Link>
                  )
                )}
              </div>
            ) : null}
          </div>
          <Link to={sectionLink(pathname, 'process')} onClick={close}>
            Process
          </Link>
          <Link to="/our-work" onClick={close}>
            Project Gallery
          </Link>
          <Link to={sectionLink(pathname, 'contact')} onClick={close}>
            Contact
          </Link>
        </nav>

        <div className="site-header__actions">
          <Link
            to={sectionLink(pathname, 'contact')}
            className="site-header__cta site-header__cta--consult"
            onClick={close}
          >
            Get Free Consultation
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
            <Link to={sectionLink(pathname, 'about')} onClick={close}>
              About
            </Link>
            <Link to="/our-work" onClick={close}>
              Portfolio
            </Link>
            <span className="site-header__drawer-label">Services</span>
            {servicePillars.map((p) =>
              p.externalUrl ? (
                <a key={p.id} href={p.externalUrl} className="site-header__drawer-sub" onClick={close}>
                  {p.title}
                </a>
              ) : (
                <Link
                  key={p.id}
                  to={`/services/category/${p.id}`}
                  className="site-header__drawer-sub"
                  onClick={close}
                >
                  {p.title}
                </Link>
              )
            )}
            <Link to={sectionLink(pathname, 'process')} onClick={close}>
              Process
            </Link>
            <Link to="/our-work" onClick={close}>
              Project Gallery
            </Link>
            <Link to={sectionLink(pathname, 'contact')} onClick={close}>
              Contact
            </Link>
            <Link to={sectionLink(pathname, 'contact')} className="site-header__cta site-header__cta--block" onClick={close}>
              Get Free Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
