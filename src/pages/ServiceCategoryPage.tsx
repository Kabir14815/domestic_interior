import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { getServicePillar, type ServicePillarItem } from '../data/servicePillars'
import Seo from '../components/Seo'
import WhatsAppButton from '../components/WhatsAppButton'
import { breadcrumbJsonLd, SITE_NAME } from '../data/siteSeo'
import { useScrollReveal } from '../hooks/useScrollReveal'

function PillarItemContent({ item }: { item: ServicePillarItem }) {
  const hasRichContent = Boolean(
    item.tagline ||
      item.highlight ||
      item.steps?.length ||
      item.offeringsPoints?.length ||
      item.whyPoints?.length,
  )

  if (!hasRichContent) {
    return <p className="category-detail__item-hi">{item.description}</p>
  }

  return (
    <div className="category-detail__rich">
      {item.tagline ? <p className="category-detail__tagline">{item.tagline}</p> : null}
      {item.highlight ? <blockquote className="category-detail__quote">{item.highlight}</blockquote> : null}
      {item.intro ? <p className="category-detail__intro">{item.intro}</p> : null}

      {item.steps?.length ? (
        <div className="category-detail__process">
          {item.processTitle ? <h3 className="category-detail__section-title">{item.processTitle}</h3> : null}
          <ol className="category-detail__steps">
            {item.steps.map((step) => (
              <li key={step.title} className="category-detail__step">
                <h4 className="category-detail__step-title">{step.title}</h4>
                <p className="category-detail__step-text">{step.description}</p>
                {step.bullets?.length ? (
                  <ul className="category-detail__bullets">
                    {step.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {item.offeringsPoints?.length ? (
        <div className="category-detail__offerings">
          {item.offeringsTitle ? <h3 className="category-detail__section-title">{item.offeringsTitle}</h3> : null}
          <ul className="category-detail__why-list">
            {item.offeringsPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {item.whyPoints?.length ? (
        <div className="category-detail__why">
          {item.whyTitle ? <h3 className="category-detail__section-title">{item.whyTitle}</h3> : null}
          <ul className="category-detail__why-list">
            {item.whyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default function ServiceCategoryPage() {
  const revealRef = useScrollReveal()
  const { categoryId } = useParams<{ categoryId: string }>()
  const pillar = categoryId ? getServicePillar(categoryId) : undefined

  if (!categoryId || !pillar) {
    return <Navigate to="/#services" replace />
  }

  const title = `${pillar.title} in Zirakpur & Chandigarh | ${SITE_NAME}`
  const description = `${pillar.blurb} Serving Zirakpur, Chandigarh, Mohali & Panchkula. Call 92550 45552.`

  return (
    <main className="page-service">
      <Seo
        title={title}
        description={description}
        path={`/services/category/${pillar.id}`}
        image={pillar.image}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/#services' },
          { name: pillar.title, path: `/services/category/${pillar.id}` },
        ])}
      />
      <div ref={revealRef} className="page-service__reveal">
        <article className="service-detail container category-detail">
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
            <span className="service-detail__crumb service-detail__crumb--current">{pillar.title}</span>
          </nav>

          <header className="service-detail__header fade-up">
            <h1 className="service-detail__title">{pillar.title}</h1>
            <p className="service-detail__lede">{pillar.blurb}</p>
          </header>

          <figure className="service-detail__hero fade-up">
            <img
              className="service-detail__hero-img"
              src={pillar.image}
              alt={pillar.imageAlt}
              width={1600}
              height={900}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </figure>

          <ul className="category-detail__list" role="list">
            {pillar.items.map((item, i) => (
              <li key={item.title} className="category-detail__item fade-up" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="category-detail__item-head">
                  <h2 className="category-detail__item-title">{item.title}</h2>
                  {item.linkedServiceId ? (
                    <Link to={`/services/${item.linkedServiceId}`} className="category-detail__item-link">
                      View details
                      <ArrowRight size={14} strokeWidth={2} aria-hidden />
                    </Link>
                  ) : null}
                </div>
                <PillarItemContent item={item} />
              </li>
            ))}
          </ul>

          <footer className="service-detail__footer fade-up">
            <Link to="/#contact" className="btn-solid-gold service-detail__cta">
              <Sparkles size={16} strokeWidth={2} aria-hidden />
              Get free consultation
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
