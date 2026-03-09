'use client'

import { useState } from 'react'
import { FadeInSection } from '@/components/ui'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (!email.trim() || !email.includes('@')) {
      setError(true)
      setTimeout(() => setError(false), 1500)
      return
    }
    setSubmitted(true)
  }

  return (
    <div
      id="newsletter"
      className="relative px-20 py-20 text-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#1a3a1a 0%,#0f2a0f 100%)' }}
      role="region"
      aria-label="Newsletter signup"
    >
      {/* Glow */}
      <div
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(199,110,77,0.1) 0%,transparent 65%)' }}
        aria-hidden="true"
      />

      <FadeInSection>
        <h2 className="font-serif text-[2.2rem] font-black text-cream mb-3 relative">
          Stay in the Loop
        </h2>
        <p className="text-[0.95rem] text-cream/65 leading-[1.7] max-w-[480px] mx-auto mb-10 relative">
          Get updates on new products, community events, and our impact in Mathare —
          delivered to your inbox.
        </p>

        {!submitted ? (
          <div className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Your email address…"
              aria-label="Email address for newsletter"
              autoComplete="email"
              className={`flex-1 px-5 py-3.5 bg-white/8 text-cream text-[0.9rem] placeholder:text-cream/40 outline-none transition-colors duration-300 font-sans ${
                error
                  ? 'border border-terracotta'
                  : 'border border-white/20 focus:border-green-light'
              }`}
            />
            <button
              onClick={handleSubmit}
              className="btn-terracotta whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        ) : (
          <p className="text-green-light text-[0.9rem] relative animate-fade-up">
            ✓ You&apos;re subscribed! Thank you for joining our community.
          </p>
        )}
      </FadeInSection>
    </div>
  )
}
