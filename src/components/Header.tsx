import { Link, useLocation } from 'react-router-dom'

function sectionLink(pathname: string, id: string) {
  return pathname === '/' ? `#${id}` : `/#${id}`
}

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Link to="/" className="site-header__logo">
          Domestic Dial
        </Link>
        <nav className="site-header__nav" aria-label="Main">
          <Link to={sectionLink(pathname, 'services')}>Services</Link>
          <Link to={sectionLink(pathname, 'journey')}>How it works</Link>
          <Link to="/our-work">Our work</Link>
          <Link to={sectionLink(pathname, 'gallery')}>Reveal</Link>
          <Link to={sectionLink(pathname, 'contact')}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
