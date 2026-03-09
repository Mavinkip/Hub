import { PROCESS_STEPS } from '@/lib/constants'

export default function ProcessStrip() {
  return (
    <div
      className="bg-brown-dark border-t border-white/8 px-20 py-10 flex flex-wrap items-center justify-center"
      role="region"
      aria-label="Our circular process"
    >
      {PROCESS_STEPS.map((step, i) => (
        <div key={i} className="flex items-center">
          <div className="flex flex-col items-center gap-2.5 px-6 text-center min-w-[110px] group">
            <div className="w-14 h-14 rounded-full bg-green-light/12 border-2 border-green-light/35 flex items-center justify-center text-[1.35rem] transition-all duration-300 group-hover:bg-green-light/30 group-hover:border-green-light">
              {step.icon}
            </div>
            <span className="text-[0.68rem] text-cream/60 uppercase tracking-[0.1em]">
              {step.label}
            </span>
          </div>
          {i < PROCESS_STEPS.length - 1 && (
            <span className="text-terracotta text-xl opacity-65 flex-shrink-0">→</span>
          )}
        </div>
      ))}
    </div>
  )
}
