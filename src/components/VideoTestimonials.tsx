import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    title: 'Minimalist Kitchen Reveal',
    poster: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-interior-49346-large.mp4',
  },
  {
    title: 'Living Space Walkthrough',
    poster: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-view-of-the-empty-interior-of-a-house-under-construction-41258-large.mp4',
  },
  {
    title: 'Finished Master Suite',
    poster: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-interior-49346-large.mp4',
  },
]

export default function VideoTestimonials() {
  const revealRef = useScrollReveal()

  return (
    <section className="video-lux" id="testimonials" ref={revealRef}>
      <div className="container">
        <div className="video-lux__header fade-up">
          <span className="section-eyebrow">Client Perspectives</span>
          <h2 className="video-lux__title">Living the Design</h2>
        </div>

        <div className="video-lux__grid">
          {testimonials.map((item, i) => (
            <figure 
              key={item.title} 
              className="video-lux__card fade-up"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="video-lux__wrap">
                <video
                  className="video-lux__video"
                  poster={item.poster}
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
              <figcaption className="video-lux__caption">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
