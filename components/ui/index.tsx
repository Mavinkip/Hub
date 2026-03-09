'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

// ── FadeInSection ──────────────────────────────────────────────
export function FadeInSection({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── AnimatedCounter ────────────────────────────────────────────
export function AnimatedCounter({
  target,
  duration = 1800,
  className = '',
}: {
  target: number
  duration?: number
  className?: string
}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    const start = performance.now()
    const tick = (ts: number) => {
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}

// ── AnimatedProgressBar ────────────────────────────────────────
export function AnimatedProgressBar({
  width,
  color = 'green',
}: {
  width: number
  color?: 'green' | 'terra'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="h-1 bg-green-pale/50 rounded-full overflow-hidden mt-2">
      <motion.div
        className={`h-full rounded-full ${color === 'terra' ? 'bg-terracotta' : 'bg-green-light'}`}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${width}%` } : { width: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
      />
    </div>
  )
}

// ── SkeletonCard ───────────────────────────────────────────────
export function SkeletonCard() {
  return (
    <div className="bg-white/50 overflow-hidden">
      <div className="h-[220px] skeleton-shimmer" />
      <div className="p-6">
        <div className="h-3.5 skeleton-shimmer rounded mb-3" />
        <div className="h-3.5 skeleton-shimmer rounded w-3/5" />
      </div>
    </div>
  )
}

// ── BackToTop ──────────────────────────────────────────────────
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.button
      className="fixed bottom-8 right-8 z-[200] w-12 h-12 bg-green-deep text-green-light border-none rounded-full cursor-pointer flex items-center justify-center text-xl shadow-[0_4px_18px_rgba(26,58,26,0.35)]"
      initial={{ opacity: 0, y: 12 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      whileHover={{ y: -3, backgroundColor: '#2d6a2d' }}
      transition={{ duration: 0.3 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </motion.button>
  )
}
