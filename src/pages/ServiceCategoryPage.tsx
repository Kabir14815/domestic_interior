import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  KeyRound,
  Phone,
  ShieldCheck,
  Sparkles,
  SprayCan,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { getServicePillar } from '../data/servicePillars'
import Seo from '../components/Seo'
import WhatsAppButton from '../components/WhatsAppButton'
import { breadcrumbJsonLd, SITE_NAME } from '../data/siteSeo'
import { useScrollReveal } from '../hooks/useScrollReveal'

const TURNKEY_JOURNEY = [
  { label: 'Inspect', detail: 'Site audit & snag check', Icon: ClipboardList },
  { label: 'Clean', detail: 'Post-construction deep clean', Icon: SprayCan },
  { label: 'Polish', detail: 'Surfaces, fittings & floors', Icon: Sparkles },
  { label: 'Handover', detail: 'Keys to a move-in ready home', Icon: KeyRound },
] as const

const TURNKEY_PROMISES = [
  {
    title: 'One accountable partner',
    detail: 'Materials, labour, site audit, and cleaning—coordinated under a single timeline.',
    Icon: ShieldCheck,
  },
  {
    title: 'Zero vendor chase',
    detail: 'No juggling separate cleaners and finish crews after the build ends.',
    Icon: ClipboardList,
  },
  {
    title: 'Move-in ready',
    detail: 'Walk into a polished home—keys in hand, dust gone, snags closed.',
    Icon: KeyRound,
  },
]

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
  const title = `${pillar.title} across North India | ${SITE_NAME}`
  const description = `${pillar.blurb} Serving luxury homes across North India. Call 92550 45552.`

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

          <header className={`service-detail__header fade-up${isTurnkey ? ' service-detail__header--turnkey' : ''}`}>
            {isTurnkey ? <span className="category-detail__eyebrow">Design to Handover</span> : null}
            <h1 className="service-detail__title">{pillar.title}</h1>
            <p className="service-detail__lede">{pillar.blurb}</p>
            {isTurnkey ? (
              <p className="turnkey-promise-line">Inspect. Clean. Polish. Hand over the keys.</p>
            ) : null}
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
          </figure>

          {pillar.video ? (
            <figure className="service-detail__video fade-up">
              <video
                className="service-detail__video-el"
                src={pillar.video}
                poster={pillar.image}
                controls
                playsInline
                preload="metadata"
                aria-label={pillar.videoAlt ?? `${pillar.title} video`}
              />
            </figure>
          ) : null}

          {isTurnkey ? (
            <>
              <section className="turnkey-journey fade-up" aria-label="Handover journey">
                <div className="turnkey-journey__head">
                  <p className="turnkey-journey__label">Your handover journey</p>
                  <h2 className="turnkey-journey__title">From construction dust to keys in hand</h2>
                </div>
                <ol className="turnkey-journey__list">
                  {TURNKEY_JOURNEY.map((step, i) => (
                    <li key={step.label} className="turnkey-journey__item">
                      <span className="turnkey-journey__num" aria-hidden>
                        0{i + 1}
                      </span>
                      <span className="turnkey-journey__icon" aria-hidden>
                        <step.Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="turnkey-journey__text">
                        <strong>{step.label}</strong>
                        <span>{step.detail}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="turnkey-promises fade-up" aria-label="Turnkey promises">
                {TURNKEY_PROMISES.map(({ title: promiseTitle, detail, Icon }) => (
                  <div key={promiseTitle} className="turnkey-promises__item">
                    <span className="turnkey-promises__icon" aria-hidden>
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <div>
                      <strong>{promiseTitle}</strong>
                      <p>{detail}</p>
                    </div>
                  </div>
                ))}
              </section>

              <div className="turnkey-pathways__head fade-up">
                <p className="turnkey-journey__label">Two pathways</p>
                <h2 className="turnkey-pathways__title">Choose how we take you to handover</h2>
              </div>
            </>
          ) : null}

          <ul
            className={`category-detail__list${isTurnkey ? ' category-detail__list--turnkey' : ''}`}
            role="list"
          >
            {pillar.items.map((item, i) => {
              const Icon = ITEM_ICONS[item.id]
              const detailPath = `/services/category/${pillar.id}/${item.id}`
              return (
                <li
                  key={item.id}
                  className={`category-detail__item fade-up${isTurnkey ? ' category-detail__item--turnkey' : ''}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {isTurnkey ? (
                    <>
                      <span className="category-detail__item-index" aria-hidden>
                        0{i + 1}
                      </span>
                      <div className="category-detail__item-head">
                        <div className="category-detail__item-title-row">
                          {Icon ? (
                            <span className="category-detail__item-icon" aria-hidden>
                              <Icon size={20} strokeWidth={1.6} />
                            </span>
                          ) : null}
                          <div className="category-detail__item-titles">
                            <h2 className="category-detail__item-title">{item.title}</h2>
                            {item.tagline ? (
                              <p className="category-detail__item-tagline">{item.tagline}</p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <p className="category-detail__item-hi category-detail__item-summary">{item.description}</p>
                      <Link to={detailPath} className="category-detail__item-cta">
                        Explore this service
                        <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="category-detail__item-head">
                        <div className="category-detail__item-title-row">
                          {Icon ? (
                            <span className="category-detail__item-icon" aria-hidden>
                              <Icon size={20} strokeWidth={1.6} />
                            </span>
                          ) : null}
                          <h2 className="category-detail__item-title">{item.title}</h2>
                        </div>
                        <Link to={detailPath} className="category-detail__item-link">
                          View details
                          <ArrowRight size={14} strokeWidth={2} aria-hidden />
                        </Link>
                      </div>
                      <p className="category-detail__item-hi category-detail__item-summary">{item.description}</p>
                    </>
                  )}
                </li>
              )
            })}
          </ul>

          {isTurnkey ? (
            <aside className="turnkey-close fade-up">
              <div className="turnkey-close__copy">
                <p className="turnkey-journey__label">Ready when you are</p>
                <h2 className="turnkey-close__title">Step into a finished home—not an unfinished project</h2>
                <p className="turnkey-close__text">
                  Tell us your timeline. We&apos;ll map cleaning, packing, and handover around your build.
                </p>
              </div>
              <div className="turnkey-close__actions">
                <Link to="/#contact" className="btn-solid-gold service-detail__cta">
                  <Sparkles size={16} strokeWidth={2} aria-hidden />
                  Plan my handover
                </Link>
                <a href="tel:+919255045552" className="turnkey-close__phone">
                  <Phone size={16} strokeWidth={1.75} aria-hidden />
                  92550 45552
                </a>
              </div>
            </aside>
          ) : (
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
          )}

          {isTurnkey ? (
            <footer className="service-detail__footer service-detail__footer--turnkey fade-up">
              <Link to="/#services" className="service-detail__back">
                <ArrowLeft size={18} strokeWidth={1.75} aria-hidden />
                All services
              </Link>
            </footer>
          ) : null}
        </article>
      </div>
      <WhatsAppButton />
    </main>
  )
}
