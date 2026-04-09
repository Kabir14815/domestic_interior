import { useEffect, useRef, useState } from 'react'
import { portfolioReels } from '../data/portfolioReels'
import { useScrollReveal } from '../hooks/useScrollReveal'

function LazyRevealVideo({ src, title }: { src: string; title: string }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const root = wrapRef.current
    if (!root) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setShouldLoad(true)
      },
      { root: null, rootMargin: '160px 0px', threshold: 0.02 }
    )
    io.observe(root)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={wrapRef} className="video-lux__wrap">
      <video
        className="video-lux__video"
        src={shouldLoad ? src : undefined}
        controls
        playsInline
        preload={shouldLoad ? 'metadata' : 'none'}
        aria-label={title}
      />
    </div>
  )
}

export default function VideoTestimonials() {
  const revealRef = useScrollReveal()

  return (
    <section className="video-lux" id="testimonials" ref={revealRef}>
      <div className="container">
        <div className="video-lux__header fade-up">
          <span className="video-lux__eyebrow">On-screen walkthroughs</span>
          <h2 className="video-lux__title">Step inside finished spaces</h2>
          <p className="video-lux__subtitle">
            The same project films as our portfolio—short clips, loaded as you scroll so the page stays light. Use the
            controls to play with sound.
          </p>
        </div>

        <div className="video-lux__grid">
          {portfolioReels.map((item, i) => (
            <figure
              key={item.id}
              className="video-lux__card fade-up"
              style={{ transitionDelay: `${Math.min(i, 4) * 120}ms` }}
            >
              <LazyRevealVideo src={item.src} title={item.title} />
              <figcaption className="video-lux__caption">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
