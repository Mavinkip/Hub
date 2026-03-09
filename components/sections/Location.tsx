'use client'

import { useState } from 'react'
import { FadeInSection } from '@/components/ui'
import { motion } from 'framer-motion'

export default function Location() {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <div
      id="location"
      className="bg-brown-dark grid grid-cols-1 md:grid-cols-2 gap-20 px-20 py-24 items-center"
    >
      {/* Text */}
      <FadeInSection>
        <div className="section-label" style={{ color: '#a1887f' }}>
          <span
            className="block flex-shrink-0"
            style={{ width: 28, height: 2, background: '#c76e4d', display: 'inline-block', marginRight: 12 }}
          />
          Find Us
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-black leading-[1.08] text-cream">
          Visit the Hub
          <br />
          in Mathare
        </h2>
        <p className="text-base text-cream/72 leading-[1.8] mt-6">
          We are based in the heart of Mathare, one of Nairobi&apos;s most vibrant and
          resilient communities. Come visit us, meet our artisans, and witness the magic
          of upcycling firsthand. Products also available nationwide via MESH Soko.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          {['📍 Mathare, Nairobi', '🛒 MESH Soko', '🤝 UN-Habitat Partner'].map((badge) => (
            <span
              key={badge}
              className="bg-white/7 border border-white/15 text-cream/80 px-5 py-2 text-[0.8rem] tracking-[0.07em] transition-colors duration-200 hover:bg-white/12"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://maps.google.com/?q=Mathare,Nairobi,Kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Directions ↗
          </a>
          <a
            href="https://meshsoko.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terracotta"
          >
            Shop Online ↗
          </a>
        </div>
      </FadeInSection>

      {/* Map */}
      <FadeInSection delay={0.15}>
        <div className="map-container h-[360px] overflow-hidden relative border border-white/10">
          {/* Loading overlay */}
          {!mapLoaded && (
            <div className="absolute inset-0 bg-green-deep/85 flex flex-col items-center justify-center gap-4 z-10">
              <motion.span
                className="text-[2.5rem]"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                📍
              </motion.span>
              <span className="text-cream/70 text-[0.85rem]">Loading map…</span>
            </div>
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.127!2d36.8562!3d-1.2592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17309df6c8c7%3A0x5c5cbe4c7a0a620!2sMathare%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            className="map-iframe w-full h-full border-none"
            title="Mathare, Nairobi on Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
          />
        </div>
      </FadeInSection>
    </div>
  )
}
