import { AnimatedCounter } from '@/components/ui'
import { STATS } from '@/lib/constants'

export default function StatsBar() {
  return (
    <div
      className="bg-brown-dark grid grid-cols-2 md:grid-cols-4 gap-0"
      role="region"
      aria-label="Key statistics"
    >
      {STATS.map((stat, i) => (
        <div
          key={i}
          className={`text-center px-4 py-8 ${
            i < STATS.length - 1 ? 'border-r border-white/10' : ''
          }`}
        >
          {stat.countUp && stat.num ? (
            <AnimatedCounter
              target={stat.num}
              className="font-serif text-[2.5rem] font-black text-green-light leading-none block"
            />
          ) : (
            <span className="font-serif text-[2.5rem] font-black text-green-light leading-none block">
              {stat.display ?? stat.num}
            </span>
          )}
          <span className="text-[0.76rem] text-cream/55 uppercase tracking-[0.1em] mt-1.5 block">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
