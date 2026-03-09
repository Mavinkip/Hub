import { FadeInSection, AnimatedCounter, AnimatedProgressBar } from '@/components/ui'
import { TEAM_STATS } from '@/lib/constants'

export default function Team() {
  return (
    <section
      id="team"
      className="bg-cream px-20 py-24"
      aria-labelledby="team-title"
    >
      <FadeInSection>
        <div className="section-label">Leadership &amp; Community</div>
        <h2 id="team-title" className="section-title">
          The Hands
          <br />
          Behind the Hub
        </h2>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-14 items-center">
        {/* Leader card */}
        <FadeInSection delay={0.1}>
          <div className="bg-white overflow-hidden shadow-[0_4px_32px_rgba(26,58,26,0.09)] border-b-4 border-terracotta">
            {/* Banner */}
            <div
              className="h-44 flex items-center justify-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#1a3a1a,#2d6a2d)' }}
              aria-hidden="true"
            >
              <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-terracotta/12" />
              <div className="w-[90px] h-[90px] rounded-full bg-green-light flex items-center justify-center font-serif text-[2rem] font-black text-green-deep border-4 border-cream relative z-10">
                FA
              </div>
            </div>

            {/* Info */}
            <div className="p-8">
              <h3 className="font-serif text-[1.6rem] font-black text-green-deep">
                Faith Adoyo
              </h3>
              <span className="text-[0.78rem] uppercase tracking-[0.12em] text-terracotta font-semibold mt-1 block">
                Founder &amp; Executive Director
              </span>
              <p className="text-[0.93rem] text-[#666] leading-[1.75] mt-4">
                Faith leads the Upcyclers Creative Hub with passion and purpose, driving
                the mission to empower women in Mathare while championing environmental
                conservation through creative upcycling. Her leadership has built the Hub
                into a beacon of circular economy practice in Nairobi, partnering with
                UN-Habitat and connecting artisans to global markets.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Women stats */}
        <FadeInSection delay={0.2}>
          <p className="text-[0.95rem] text-[#555] leading-[1.75] mb-8">
            Our Hub is anchored by a collective of skilled, resilient women who bring
            creativity and dedication to every product — transforming community and
            environment together.
          </p>

          <div className="flex flex-col gap-6">
            {TEAM_STATS.map((stat, i) => (
              <div key={i} className="flex items-center gap-6">
                {stat.countUp && stat.num ? (
                  <AnimatedCounter
                    target={stat.num}
                    className="font-serif text-[3rem] font-black text-terracotta leading-none min-w-[80px]"
                  />
                ) : (
                  <span className="font-serif text-[3rem] font-black text-terracotta leading-none min-w-[80px]">
                    {stat.display}
                  </span>
                )}
                <div className="flex-1">
                  <h4 className="text-[1rem] font-semibold text-green-deep">{stat.label}</h4>
                  <p className="text-[0.83rem] text-[#888] mt-0.5">{stat.sub}</p>
                  <AnimatedProgressBar
                    width={stat.width}
                    color={stat.color as 'green' | 'terra'}
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
