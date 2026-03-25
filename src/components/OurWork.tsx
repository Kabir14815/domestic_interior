import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85',
    title: 'Living lounge',
    category: 'Residential',
    year: '2024',
    location: 'New Delhi',
    lead: 'Warm minimal layers, custom joinery, and light that shifts with the day.',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85',
    title: 'Open kitchen',
    category: 'Residential',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=85',
    title: 'Primary suite',
    category: 'Residential',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85',
    title: 'Dining & light',
    category: 'Residential',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85',
    title: 'Minimal bath',
    category: 'Residential',
  },
  {
    src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=85',
    title: 'Study nook',
    category: 'Commercial',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=85',
    title: 'Terrace retreat',
    category: 'Residential',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=85',
    title: 'Lobby arrival',
    category: 'Commercial',
  },
  {
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=85',
    title: 'Bedroom calm',
    category: 'Residential',
  },
]

type Project = (typeof projects)[number]

function GridCard({ item }: { item: Project }) {
  return (
    <li className="our-work-lux__cell">
      <figure className="our-work-lux__card">
        <div className="our-work-lux__img-wrap">
          <img
            src={item.src}
            alt={`${item.title} — ${item.category} interior project`}
            className="our-work-lux__img"
            loading="lazy"
            decoding="async"
          />
          <div className="our-work-lux__shine" aria-hidden />
          <figcaption className="our-work-lux__overlay">
            <span className="our-work-lux__overlay-category">{item.category}</span>
            <span className="our-work-lux__overlay-name">{item.title}</span>
            <span className="our-work-lux__overlay-cta">
              <span>View</span>
              <ArrowUpRight size={16} strokeWidth={1.25} aria-hidden />
            </span>
          </figcaption>
        </div>
      </figure>
    </li>
  )
}

export default function OurWork() {
  const revealRef = useScrollReveal()
  const [featured, ...gridProjects] = projects

  return (
    <section className="our-work-lux" id="our-work" ref={revealRef}>
      <div className="our-work-lux__frame" aria-hidden />
      <div className="container our-work-lux__inner">
        <header className="our-work-lux__header fade-up">
          <div className="our-work-lux__header-rule" aria-hidden />
          <div className="our-work-lux__header-copy">
            <span className="our-work-lux__eyebrow">Selected projects</span>
            <h1 className="our-work-lux__title">
              Our <em>work</em>
            </h1>
            <p className="our-work-lux__subtitle">
              Interiors conceived as lasting environments—material honesty, quiet detail, and light as
              architecture.
            </p>
          </div>
          <p className="our-work-lux__index fade-up stagger-1" aria-hidden>
            01 — Portfolio
          </p>
        </header>

        <article className="our-work-lux__featured fade-up stagger-1">
          <div className="our-work-lux__featured-visual reveal-clip">
            <img
              src={featured.src}
              alt={`${featured.title} — ${featured.category} interior project`}
              className="our-work-lux__featured-img"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="our-work-lux__featured-aside">
            <span className="our-work-lux__featured-label">{featured.category}</span>
            <h2 className="our-work-lux__featured-title">{featured.title}</h2>
            {'lead' in featured && featured.lead ? (
              <p className="our-work-lux__featured-lead">{featured.lead}</p>
            ) : null}
            <p className="our-work-lux__featured-meta">
              {[featured.year, featured.location].filter(Boolean).join(' · ')}
            </p>
            <span className="our-work-lux__featured-accent" aria-hidden />
          </div>
        </article>

        <ul className="our-work-lux__grid fade-up stagger-2" role="list">
          {gridProjects.map((item) => (
            <GridCard key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}
