import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { domesticDialServices } from '../data/domesticDialServices'
import { getServicePageContent } from '../data/servicePageContent'
import WhatsAppButton from '../components/WhatsAppButton'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ServiceDetailPage() {
  const revealRef = useScrollReveal()
  const { serviceId } = useParams<{ serviceId: string }>()
  const meta = domesticDialServices.find((s) => s.id === serviceId)
  const detail = serviceId ? getServicePageContent(serviceId) : undefined

  if (!serviceId || !meta || !detail) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="page-service">
      <div ref={revealRef} className="page-service__reveal">
      <article className="service-detail container">
        <nav className="service-detail__breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="service-detail__crumb">
            Home
          </Link>
          <span className="service-detail__crumb-sep" aria-hidden>
            /
          </span>
          <Link to="/#services" className="service-detail__crumb">
            Services
          </Link>
          <span className="service-detail__crumb-sep" aria-hidden>
            /
          </span>
          <span className="service-detail__crumb service-detail__crumb--current">{meta.title}</span>
        </nav>

        <header className="service-detail__header fade-up">
          <h1 className="service-detail__title">{meta.title}</h1>
          <p className="service-detail__lede">{meta.blurb}</p>
        </header>

        <figure className="service-detail__hero fade-up">
          <img
            className="service-detail__hero-img"
            src={detail.heroImage.src}
            alt={detail.heroImage.alt}
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </figure>

        <div className="service-detail__body">
          {detail.paragraphs.map((p, i) => (
            <p key={i} className="service-detail__para fade-up">
              {p}
            </p>
          ))}
        </div>

        <div className="service-detail__gallery fade-up" role="group" aria-label="Service gallery">
          {detail.galleryImages.map((g) => (
            <figure key={g.src} className="service-detail__gallery-item">
              <img
                className="service-detail__gallery-img"
                src={g.src}
                alt={g.alt}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>

        <footer className="service-detail__footer fade-up">
          <Link to="/#contact" className="btn-solid-gold service-detail__cta">
            <Sparkles size={16} strokeWidth={2} aria-hidden />
            Book consultation
          </Link>
          <Link to="/#services" className="service-detail__back">
            <ArrowLeft size={18} strokeWidth={1.75} aria-hidden />
            All services
          </Link>
        </footer>
      </article>
      </div>
      <WhatsAppButton />
    </main>
  )
}
