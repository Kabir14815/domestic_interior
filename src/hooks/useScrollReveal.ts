import { useEffect, useLayoutEffect, useRef } from 'react'

/** Any on-screen overlap (tall sections fail if we compare visible area to full element height). */
function isElementPartiallyVisible(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  const vw = window.innerWidth || document.documentElement.clientWidth
  const visibleH = Math.min(rect.bottom, vh) - Math.max(rect.top, 0)
  const visibleW = Math.min(rect.right, vw) - Math.max(rect.left, 0)
  return visibleH > 24 && visibleW > 24
}

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const revealedRef = useRef(false)

  const reveal = () => {
    const el = ref.current
    if (!el || revealedRef.current) return
    revealedRef.current = true
    el.classList.add('is-revealed')
  }

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (isElementPartiallyVisible(el)) reveal()
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || revealedRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px 0px 15% 0px',
        threshold: [0, 0.06, 0.12],
      }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  return ref
}
