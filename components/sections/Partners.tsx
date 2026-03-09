import { FadeInSection } from '@/components/ui'
import { PARTNERS } from '@/lib/constants'

export default function Partners() {
  return (
    <FadeInSection>
      <div className="bg-brown-pale px-20 py-16 text-center">
        <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-brown-mid mb-10">
          Our Partners &amp; Platforms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2.5 text-[0.9rem] font-semibold text-brown-mid px-6 py-3 border border-brown-mid/25 bg-white/60 transition-all duration-300 hover:border-green-mid hover:text-green-deep hover:bg-white hover:-translate-y-0.5 cursor-default"
            >
              <span className="text-2xl">{p.icon}</span>
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  )
}
