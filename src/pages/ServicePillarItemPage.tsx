import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { getServicePillarItem, type ServicePillarItem } from '../data/servicePillars'
import Seo from '../components/Seo'
import WhatsAppButton from '../components/WhatsAppButton'
import { breadcrumbJsonLd, SITE_NAME } from '../data/siteSeo'
import { useScrollReveal } from '../hooks/useScrollReveal'

function PillarItemRichContent({ item }: { item: ServicePillarItem }) {
  const hasRichContent = Boolean(
    item.tagline ||
      item.highlight ||
      item.steps?.length ||
      item.offeringsPoints?.length ||
      item.whyPoints?.length,
  )

  if (!hasRichContent) {
    return <p className="category-detail__intro">{item.description}</p>
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

export default function ServicePillarItemPage() {
  const revealRef = useScrollReveal()
  const { categoryId, itemId } = useParams<{ categoryId: string; itemId: string }>()
  const match = categoryId && itemId ? getServicePillarItem(categoryId, itemId) : undefined

  if (!categoryId || !itemId || !match) {
    return <Navigate to={categoryId ? `/services/category/${categoryId}` : '/#services'} replace />
  }

  const { pillar, item } = match
  const title = `${item.title} | ${pillar.title} | ${SITE_NAME}`
  const description = `${item.description} Serving Zirakpur, Chandigarh, Mohali & Panchkula. Call 92550 45552.`
  const heroImage = item.image ?? pillar.image
  const heroAlt = item.imageAlt ?? pillar.imageAlt

  return (
    <main className="page-service">
      <Seo
        title={title}
        description={description}
        path={`/services/category/${pillar.id}/${item.id}`}
        image={heroImage}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/#services' },
          { name: pillar.title, path: `/services/category/${pillar.id}` },
          { name: item.title, path: `/services/category/${pillar.id}/${item.id}` },
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
            <Link to={`/services/category/${pillar.id}`} className="service-detail__crumb">
              {pillar.title}
            </Link>
            <span className="service-detail__crumb-sep" aria-hidden>
              /
            </span>
            <span className="service-detail__crumb service-detail__crumb--current">{item.title}</span>
          </nav>

          <header className="service-detail__header fade-up">
            <h1 className="service-detail__title">{item.title}</h1>
            <p className="service-detail__lede">{item.description}</p>
          </header>

          <figure className="service-detail__hero service-detail__hero--board fade-up">
            <img
              className="service-detail__hero-img"
              src={heroImage}
              alt={heroAlt}
              width={1600}
              height={900}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </figure>

          <div className="category-detail__item category-detail__item--detail fade-up">
            <PillarItemRichContent item={item} />
          </div>

          <footer className="service-detail__footer fade-up">
            <Link to="/#contact" className="btn-solid-gold service-detail__cta">
              <Sparkles size={16} strokeWidth={2} aria-hidden />
              Get free consultation
            </Link>
            <Link to={`/services/category/${pillar.id}`} className="service-detail__back">
              <ArrowLeft size={18} strokeWidth={1.75} aria-hidden />
              Back to {pillar.shortTitle}
            </Link>
          </footer>
        </article>
      </div>
      <WhatsAppButton />
    </main>
  )
}
