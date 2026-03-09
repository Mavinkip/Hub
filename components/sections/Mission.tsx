import { FadeInSection } from '@/components/ui'

const SDG_TAGS = [
  { label: '♻ Circular Economy', style: 'green' },
  { label: '🌍 Waste Reduction', style: 'terra' },
  { label: '👩 Women-Led', style: 'green' },
  { label: '🤝 UN-Habitat', style: 'terra' },
]

export default function Mission() {
  return (
    <section
      id="mission"
      className="bg-cream grid grid-cols-1 md:grid-cols-2 gap-24 px-20 py-24"
      aria-labelledby="mission-title"
    >
      {/* Text */}
      <FadeInSection>
        <div className="section-label">Our Mission</div>
        <h2 id="mission-title" className="section-title">
          A Circular Economy,
          <br />
          Built by Community
        </h2>
        <blockquote className="font-baskerville italic text-[1.45rem] text-brown-mid leading-[1.55] border-l-4 border-terracotta pl-6 my-8">
          "Waste is not waste until we waste it."
        </blockquote>
        <p className="text-base text-[#555] leading-[1.8] mt-4">
          The Upcyclers Creative Hub is rooted in the belief that every scrap of textile
          holds potential. By transforming discarded fabric into purposeful, beautiful
          products, we&apos;re building a circular economy from the ground up — right here
          in Mathare.
        </p>
        <p className="text-base text-[#555] leading-[1.8] mt-4">
          Our work reduces environmental pollution while creating dignified livelihoods
          for women. We partner with UN-Habitat and are featured on MESH Soko, connecting
          artisans with conscious consumers across Kenya and beyond.
        </p>
      </FadeInSection>

      {/* SDG Card */}
      <FadeInSection delay={0.15}>
        <div className="bg-green-deep text-cream p-12 relative overflow-hidden border-t-4 border-terracotta">
          {/* Big 12 watermark */}
          <span
            className="absolute -right-5 -bottom-8 font-serif text-[12rem] font-black leading-none pointer-events-none select-none"
            style={{ color: 'rgba(76,175,80,0.1)' }}
            aria-hidden="true"
          >
            12
          </span>

          <p className="font-serif text-[1rem] font-bold text-terracotta-light uppercase tracking-[0.1em] mb-4">
            UN Sustainable Development Goal
          </p>
          <p className="text-[0.95rem] leading-[1.75] text-cream/82">
            The Upcyclers Creative Hub directly aligns with{' '}
            <strong className="text-green-light">
              SDG 12: Responsible Consumption and Production
            </strong>{' '}
            — using creative entrepreneurship and community-led innovation to reduce
            textile waste and promote sustainable lifestyles in Mathare and beyond.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-6 relative">
            {SDG_TAGS.map((tag) => (
              <span
                key={tag.label}
                className={`text-[0.72rem] letter-spacing-[0.1em] uppercase px-3.5 py-1.5 ${
                  tag.style === 'terra'
                    ? 'bg-terracotta/15 border border-terracotta/40 text-terracotta-light'
                    : 'bg-green-light/15 border border-green-light/35 text-green-light'
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
