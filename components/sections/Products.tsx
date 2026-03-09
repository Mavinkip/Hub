'use client'

import { useState, useEffect } from 'react'
import { FadeInSection, SkeletonCard } from '@/components/ui'
import { PRODUCTS } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function Products() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="products"
      className="bg-brown-pale px-20 py-24"
      aria-labelledby="products-title"
    >
      {/* Header */}
      <FadeInSection className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-6">
        <div>
          <div className="section-label">What We Make</div>
          <h2 id="products-title" className="section-title">
            Handcrafted with
            <br />
            Purpose &amp; Pride
          </h2>
        </div>
        <a
          href="https://meshsoko.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-terracotta flex-shrink-0"
        >
          Shop on MESH Soko ↗
        </a>
      </FadeInSection>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loaded
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : PRODUCTS.map((product, i) => (
              <FadeInSection key={product.id} delay={i * 0.07}>
                <motion.article
                  className="bg-white overflow-hidden cursor-pointer focus-visible:outline-2"
                  whileHover={{ y: -7, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  tabIndex={0}
                  role="article"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      window.open(product.link, product.link.startsWith('http') ? '_blank' : '_self')
                    }
                  }}
                  style={{ boxShadow: 'none' }}
                  whileFocus={{ boxShadow: '0 0 0 2px #4caf50' }}
                >
                  {/* Image area */}
                  <div
                    className={`h-[220px] relative flex items-center justify-center bg-gradient-to-br ${product.bgClass}`}
                  >
                    {product.tag && (
                      <span
                        className={`absolute top-4 left-4 text-[0.62rem] tracking-[0.12em] uppercase px-2.5 py-1 ${
                          product.tagStyle === 'terra'
                            ? 'bg-terracotta text-white'
                            : 'bg-green-deep text-green-light'
                        }`}
                      >
                        {product.tag}
                      </span>
                    )}
                    <motion.span
                      className="text-[4rem] opacity-60"
                      aria-hidden="true"
                      whileHover={{ scale: 1.15, opacity: 0.8 }}
                      transition={{ duration: 0.35 }}
                    >
                      {product.icon}
                    </motion.span>
                  </div>

                  {/* Info */}
                  <div className="p-6 border-t-[3px] border-green-light flex flex-col gap-2">
                    <h3 className="font-serif text-[1.1rem] font-bold text-green-deep">
                      {product.name}
                    </h3>
                    <p className="text-[0.85rem] text-[#777] leading-[1.6]">{product.desc}</p>
                    <a
                      href={product.link}
                      target={product.link.startsWith('http') ? '_blank' : undefined}
                      rel={product.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-block mt-1 text-[0.78rem] font-semibold text-terracotta uppercase tracking-[0.06em] transition-all duration-200 hover:text-green-mid hover:tracking-[0.1em]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {product.link.startsWith('http') ? 'View on MESH Soko →' : 'Get in Touch →'}
                    </a>
                  </div>
                </motion.article>
              </FadeInSection>
            ))}
      </div>
    </section>
  )
}
