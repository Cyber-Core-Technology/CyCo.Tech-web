'use client'

import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll('.anim')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
