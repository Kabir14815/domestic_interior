import { ArrowUpRight, Play } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import DomesticDialServicesSection from './DomesticDialServicesSection'
import { portfolioProjects } from '../data/portfolioProjects'
import { portfolioReels } from '../data/portfolioReels'
import { useScrollReveal } from '../hooks/useScrollReveal'

const INITIAL_GRID = 9

type Project = (typeof portfolioProjects)[number]

function GridCard({ item }: { item: Project }) {
  return (
    <li className="our-work-lux__cell">
      <Link to={`/our-work/${item.id}`} className="our-work-lux__card-link">
        <figure className="our-work-lux__card">
          <div className="our-work-lux__img-wrap">
            <img
              src={item.src}
              alt={`${item.title} — ${item.category} interior project`}
              className="our-work-lux__img"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
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
      </Link>
    </li>
  )
}

function ReelVideo({ src, label }: { src: string; label: string }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const wantPlayRef = useRef(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [touchPlaying, setTouchPlaying] = useState(false)

  const ensureLoaded = useCallback(() => setShouldLoad(true), [])

  useEffect(() => {
    const root = wrapRef.current
    if (!root || shouldLoad) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setShouldLoad(true)
      },
      { root: null, rootMargin: '180px 0px', threshold: 0.01 }
    )
    io.observe(root)
    return () => io.disconnect()
  }, [shouldLoad])

  const tryPlay = useCallback(() => {
    void videoRef.current?.play().catch(() => {})
  }, [])

  const play = useCallback(() => {
    wantPlayRef.current = true
    ensureLoaded()
    tryPlay()
  }, [ensureLoaded, tryPlay])

  const pause = useCallback(() => {
    wantPlayRef.current = false
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
  }, [])

  const onVideoCanPlay = useCallback(() => {
    if (wantPlayRef.current) tryPlay()
  }, [tryPlay])

  const toggleTouch = useCallback(() => {
    ensureLoaded()
    const v = videoRef.current
    if (!v) return
    const run = () => {
      if (v.paused) {
        wantPlayRef.current = true
        void v.play()
        setTouchPlaying(true)
      } else {
        wantPlayRef.current = false
        v.pause()
        v.currentTime = 0
        setTouchPlaying(false)
      }
    }
    if (v.src && v.readyState >= 2) run()
    else v.addEventListener('canplay', run, { once: true })
  }, [ensureLoaded])

  return (
    <div ref={wrapRef} className="our-work-lux__reel-cell" role="listitem">
      <div className="our-work-lux__reel-video-wrap" onMouseEnter={play} onMouseLeave={pause}>
        <video
          ref={videoRef}
          className="our-work-lux__reel-video"
          src={shouldLoad ? src : undefined}
          muted
          loop
          playsInline
          preload={shouldLoad ? 'metadata' : 'none'}
          aria-label={label}
          onCanPlay={onVideoCanPlay}
        />
        <div className="our-work-lux__reel-veil" aria-hidden />
        <button
          type="button"
          className="our-work-lux__reel-tap"
          aria-label={touchPlaying ? `Pause ${label}` : `Play ${label}`}
          onClick={(e) => {
            e.stopPropagation()
            toggleTouch()
          }}
        >
          <Play size={22} strokeWidth={1.5} aria-hidden className="our-work-lux__reel-tap-icon" />
        </button>
        <span className="our-work-lux__reel-label">{label}</span>
      </div>
    </div>
  )
}

export default function OurWork() {
  const revealRef = useScrollReveal()
  const [featured, ...gridProjects] = portfolioProjects
  const [showAllGrid, setShowAllGrid] = useState(false)
  const visibleGrid = showAllGrid ? gridProjects : gridProjects.slice(0, INITIAL_GRID)
  const hiddenCount = gridProjects.length - visibleGrid.length

  return (
    <section className="our-work-lux" id="our-work" ref={revealRef}>
      <div className="our-work-lux__frame" aria-hidden />
      <div className="our-work-lux__grain" aria-hidden />
      <div className="container our-work-lux__inner">
        <header className="our-work-lux__header fade-up">
          <div className="our-work-lux__header-rule" aria-hidden />
          <div className="our-work-lux__header-copy">
            <span className="our-work-lux__eyebrow">Selected projects</span>
            <h1 className="our-work-lux__title">
              Our <em>work</em>
            </h1>
            <p className="our-work-lux__subtitle">
              Real spaces from our studio—renders, joinery, and finished rooms. Images and clips load as you scroll so the
              page stays fast.
            </p>
          </div>
          <p className="our-work-lux__index fade-up stagger-1" aria-hidden>
            01 — Portfolio
          </p>
        </header>

        <DomesticDialServicesSection
          id="our-work-services"
          className="home-services--in-our-work"
          eyebrow="What we offer"
          title="Services we deliver"
          intro="The same eight offerings as on our brochure—nothing extra, nothing missing."
        />

        <Link
          to={`/our-work/${featured.id}`}
          className="our-work-lux__featured our-work-lux__featured--link fade-up stagger-1"
        >
          <div className="our-work-lux__featured-visual reveal-clip">
            <div className="our-work-lux__featured-frame" aria-hidden />
            <img
              src={featured.src}
              alt={`${featured.title} — ${featured.category} interior project`}
              className="our-work-lux__featured-img"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
          <div className="our-work-lux__featured-aside">
            <span className="our-work-lux__featured-label">{featured.category}</span>
            <h2 className="our-work-lux__featured-title">{featured.title}</h2>
            {featured.lead ? <p className="our-work-lux__featured-lead">{featured.lead}</p> : null}
            <p className="our-work-lux__featured-meta">
              {[featured.year, featured.location].filter(Boolean).join(' · ')}
            </p>
            <span className="our-work-lux__featured-accent" aria-hidden />
          </div>
        </Link>

        <div className="our-work-lux__reel-block fade-up stagger-2">
          <div className="our-work-lux__reel-intro">
            <span className="our-work-lux__reel-eyebrow">In motion</span>
            <h2 className="our-work-lux__reel-heading">Project films</h2>
            <p className="our-work-lux__reel-lead">
              Five clips from your INTERIOR library. They load when this row is near the viewport. On desktop, hover to
              play; on mobile, tap the control (muted loops).
            </p>
          </div>
          <div className="our-work-lux__reel-scroller" role="list" aria-label="Project videos">
            {portfolioReels.map((item) => (
              <ReelVideo key={item.id} src={item.src} label={item.title} />
            ))}
          </div>
        </div>

        <ul className="our-work-lux__grid fade-up stagger-4" role="list">
          {visibleGrid.map((item) => (
            <GridCard key={item.id} item={item} />
          ))}
        </ul>

        {hiddenCount > 0 ? (
          <div className="our-work-lux__more-wrap fade-up stagger-4">
            <button type="button" className="our-work-lux__more-btn" onClick={() => setShowAllGrid(true)}>
              Load {hiddenCount} more {hiddenCount === 1 ? 'project' : 'projects'}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
