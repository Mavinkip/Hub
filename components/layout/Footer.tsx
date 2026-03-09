import { FOOTER_NAV, FOOTER_CONNECT, SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-green-deep border-t-[3px] border-terracotta pt-16 pb-8 px-20">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 mb-10 pb-10 border-b border-white/10">
        {/* Brand */}
        <div>
          <a
            href="#"
            className="font-serif text-[1.55rem] font-black text-cream leading-tight block mb-4"
            aria-label="Upcyclers Creative Hub"
          >
            Upcyclers <span className="text-green-light italic">Creative</span> Hub
          </a>
          <p className="text-[0.87rem] text-cream/50 leading-relaxed max-w-[300px]">
            Transforming textile waste into livelihoods and hope in Mathare, Nairobi.
            Youth-led. Women-powered. Community-rooted.
          </p>
          <div className="flex gap-3 mt-6">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 border border-green-light/30 flex items-center justify-center text-[0.85rem] font-bold text-cream/50 transition-all duration-300 hover:border-terracotta-light hover:text-terracotta-light hover:-translate-y-0.5"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="font-serif text-[0.95rem] text-terracotta-light mb-5">Navigate</h4>
          <ul className="list-none space-y-2.5">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.84rem] text-cream/50 transition-colors duration-200 hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-serif text-[0.95rem] text-terracotta-light mb-5">Connect</h4>
          <ul className="list-none space-y-2.5">
            {FOOTER_CONNECT.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-[0.84rem] text-cream/50 transition-colors duration-200 hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap justify-between items-center gap-2 text-[0.76rem] text-cream/30">
        <span>© 2025 Upcyclers Creative Hub · Mathare, Nairobi, Kenya</span>
        <span>
          Made with ♻ in Kenya · Aligned with{' '}
          <a
            href="https://sdgs.un.org/goals/goal12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta-light hover:text-green-light transition-colors"
          >
            SDG 12
          </a>
        </span>
      </div>
    </footer>
  )
}
