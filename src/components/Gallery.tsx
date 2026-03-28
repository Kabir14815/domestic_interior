import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const beforeAfterSlides = [
  {
    before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=80',
    label: 'Master Suite',
  },
  {
    before: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1000&q=80',
    label: 'Culinary Space',
  },
  {
    before: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80',
    label: 'Living & light',
  },
]

function getClientX(e: MouseEvent | TouchEvent): number {
  return 'touches' in e ? e.touches[0].clientX : e.clientX
}

export default function Gallery() {
  const revealRef = useScrollReveal()
  const [slideIndex, setSlideIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [sliderRef, setSliderRef] = useState<HTMLDivElement | null>(null)

  const currentSlide = beforeAfterSlides[slideIndex]

  const updatePosition = useCallback((clientX: number) => {
    if (!sliderRef) return
    const rect = sliderRef.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(100, Math.max(0, x)))
  }, [sliderRef])

  const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
    updatePosition(getClientX(e))
  }, [updatePosition])

  const handleEnd = useCallback(() => setIsDragging(false), [])

  useEffect(() => {
    if (!isDragging) return
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', handleEnd)
    window.addEventListener('touchmove', handleMove, { passive: true })
    window.addEventListener('touchend', handleEnd)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging, handleMove, handleEnd])

  const handleSliderDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
    updatePosition(getClientX(e.nativeEvent))
  }

  const nextSlide = () => setSlideIndex((i) => (i + 1) % beforeAfterSlides.length)
  const prevSlide = () => setSlideIndex((i) => (i - 1 + beforeAfterSlides.length) % beforeAfterSlides.length)

  return (
    <section className="gallery-lux" id="gallery" ref={revealRef}>
      <div className="container">
        <div className="gallery-lux__header fade-up">
          <span className="gallery-lux__eyebrow">Before & after</span>
          <h2 className="gallery-lux__title">See the shift—one frame at a time</h2>
          <p className="gallery-lux__subtitle">
            Drag the handle to compare raw spaces with finished interiors from our coordinated projects.
          </p>
        </div>

        <div className="before-after fade-up stagger-1">
          <div
            ref={setSliderRef}
            className="before-after__slider-wrap"
            onMouseDown={handleSliderDown}
            onTouchStart={handleSliderDown}
          >
            <div className="before-after__img-wrap">
              <img src={currentSlide.before} alt="Before" className="before-after__img before-after__img--before" />
              <div className="before-after__img-after" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <img src={currentSlide.after} alt="After" className="before-after__img" />
              </div>
            </div>
            <div className="before-after__handle" style={{ left: `${sliderPosition}%` }}>
              <div className="before-after__line" />
              <div className="before-after__thumb" />
            </div>
          </div>
          
          <div className="before-after__nav">
            <button onClick={prevSlide} aria-label="Previous">
              <ChevronLeft size={20} strokeWidth={1} />
            </button>
            <span>{currentSlide.label}</span>
            <button onClick={nextSlide} aria-label="Next">
              <ChevronRight size={20} strokeWidth={1} />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
