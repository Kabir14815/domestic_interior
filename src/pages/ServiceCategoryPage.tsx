import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  KeyRound,
  Package,
  Sparkles,
  SprayCan,
  Truck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { getServicePillar } from '../data/servicePillars'
import Seo from '../components/Seo'
import WhatsAppButton from '../components/WhatsAppButton'
import { breadcrumbJsonLd, SITE_NAME } from '../data/siteSeo'
import { useScrollReveal } from '../hooks/useScrollReveal'

const TURNKEY_JOURNEY = [
  { label: 'Clean', detail: 'Post-construction deep clean', Icon: SprayCan },
  { label: 'Pack', detail: 'Multi-layer asset protection', Icon: Package },
  { label: 'Move', detail: 'Safe transit & re-assembly', Icon: Truck },
  { label: 'Handover', detail: 'Keys to a move-in ready home', Icon: KeyRound },
] as const

const ITEM_ICONS: Record<string, LucideIcon> = {
  'turnkey-project-management': ClipboardList,
  'seamless-relocation-handover': KeyRound,
}

export default function ServiceCategoryPage() {
  const revealRef = useScrollReveal()
  const { categoryId } = useParams<{ categoryId: string }>()
  const pillar = categoryId ? getServicePillar(categoryId) : undefined

  if (!categoryId || !pillar) {
    return <Navigate to="/#services" replace />
  }

  const isTurnkey = pillar.id === 'turnkey-relocation'
  const title = `${pillar.title} in Zirakpur & Chandigarh | ${SITE_NAME}`
  const description = `${pillar.blurb} Serving Zirakpur, Chandigarh, Mohali & Panchkula. Call 92550 45552.`

  return (
    <main className={`page-service${isTurnkey ? ' page-service--turnkey' : ''}`}>
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
        <article
          className={`service-detail container category-detail${isTurnkey ? ' category-detail--turnkey' : ''}`}
        >
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
            {isTurnkey ? <span className="category-detail__eyebrow">Design to relocation</span> : null}
            <h1 className="service-detail__title">{pillar.title}</h1>
            <p className="service-detail__lede">{pillar.blurb}</p>
          </header>

          <figure className={`service-detail__hero fade-up${isTurnkey ? ' service-detail__hero--turnkey' : ''}`}>
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
            {isTurnkey ? (
              <div className="service-detail__hero-caption">
                <span>Move-in ready</span>
                <strong>Keys. Clean. Complete.</strong>
              </div>
            ) : null}
          </figure>

          {isTurnkey ? (
            <section className="turnkey-journey fade-up" aria-label="Relocation journey">
              <p className="turnkey-journey__label">Your handover journey</p>
              <ol className="turnkey-journey__list">
                {TURNKEY_JOURNEY.map((step, i) => (
                  <li key={step.label} className="turnkey-journey__item">
                    <span className="turnkey-journey__num" aria-hidden>
                      0{i + 1}
                    </span>
                    <span className="turnkey-journey__icon" aria-hidden>
                      <step.Icon size={20} strokeWidth={1.6} />
                    </span>
                    <span className="turnkey-journey__text">
                      <strong>{step.label}</strong>
                      <span>{step.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          <ul
            className={`category-detail__list${isTurnkey ? ' category-detail__list--turnkey' : ''}`}
            role="list"
          >
            {pillar.items.map((item, i) => {
              const Icon = ITEM_ICONS[item.id]
              return (
                <li
                  key={item.id}
                  className={`category-detail__item fade-up${isTurnkey ? ' category-detail__item--turnkey' : ''}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="category-detail__item-head">
                    <div className="category-detail__item-title-row">
                      {Icon ? (
                        <span className="category-detail__item-icon" aria-hidden>
                          <Icon size={20} strokeWidth={1.6} />
                        </span>
                      ) : null}
                      <h2 className="category-detail__item-title">{item.title}</h2>
                    </div>
                    <Link
                      to={`/services/category/${pillar.id}/${item.id}`}
                      className="category-detail__item-link"
                    >
                      View details
                      <ArrowRight size={14} strokeWidth={2} aria-hidden />
                    </Link>
                  </div>
                  <p className="category-detail__item-hi category-detail__item-summary">{item.description}</p>
                  {isTurnkey ? (
                    <Link
                      to={`/services/category/${pillar.id}/${item.id}`}
                      className="category-detail__item-cta"
                    >
                      Explore this service
                      <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
                    </Link>
                  ) : null}
                </li>
              )
            })}
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
