'use client'

import { useState } from 'react'
import { FadeInSection, AnimatedProgressBar } from '@/components/ui'
import { IMPACT_CARDS } from '@/lib/constants'

export default function Impact() {
  return (
    <section
      id="impact"
      className="bg-green-deep px-20 py-24 relative overflow-hidden"
      aria-labelledby="impact-title"
    >
      {/* Diamond pattern overlay */}
      <div className="absolute inset-0 bg-diamond-pattern pointer-events-none" aria-hidden="true" />

      <FadeInSection className="relative">
        <div className="section-label-light">Our Impact</div>
        <h2 id="impact-title" className="section-title text-cream">
          Changing Lives,
          <br />
          One Thread at a Time
        </h2>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 relative">
        {IMPACT_CARDS.map((card, i) => (
          <ImpactCard key={i} card={card} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}

function ImpactCard({
  card,
  delay,
}: {
  card: (typeof IMPACT_CARDS)[0]
  delay: number
}) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <FadeInSection delay={delay}>
      <div
        className="relative bg-white/5 border border-green-light/20 p-10 transition-all duration-300 hover:bg-green-light/10 hover:border-green-light/50 hover:-translate-y-1 group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        role="article"
      >
        {/* Tooltip */}
        {showTooltip && (
          <div
            className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-brown-dark text-cream/90 text-[0.78rem] leading-[1.5] px-4 py-2.5 z-10 max-w-[220px] text-center pointer-events-none"
            role="tooltip"
          >
            {card.tooltip}
            <span
              className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
              style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #3e2723' }}
            />
          </div>
        )}

        <span className="text-[2.5rem] mb-5 block" aria-hidden="true">
          {card.icon}
        </span>
        <h3 className="font-serif text-[1.2rem] font-bold text-cream mb-3">
          {card.title}
        </h3>
        <p className="text-[0.88rem] text-cream/65 leading-[1.75]">{card.body}</p>

        <div className="mt-5">
          <div className="flex justify-between text-[0.72rem] text-cream/50 tracking-[0.08em] mb-1.5">
            <span>{card.progressLabel}</span>
            <span>{card.progress}%</span>
          </div>
          <AnimatedProgressBar width={card.progress} color={card.progressColor as 'green' | 'terra'} />
        </div>
      </div>
    </FadeInSection>
  )
}
