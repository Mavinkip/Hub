'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui'

const FABRIC_STRIPS = [
  { width: 80, height: 320, bg: 'linear-gradient(160deg,#2d6a2d,#4caf50)', left: 30, top: 60, rotate: -8, delay: 0 },
  { width: 60, height: 260, bg: 'linear-gradient(160deg,#6d4c41,#a1887f)', left: 110, top: 30, rotate: 3, delay: 0.5 },
  { width: 90, height: 350, bg: 'linear-gradient(160deg,#1a3a1a,#2d6a2d)', left: 180, top: 80, rotate: -5, delay: 1 },
  { width: 55, height: 200, bg: 'linear-gradient(160deg,#c76e4d,#efebe9)', left: 280, top: 140, rotate: 7, delay: 0.3 },
  { width: 70, height: 280, bg: 'linear-gradient(160deg,#4caf50,#c8e6c9)', left: 340, top: 50, rotate: -3, delay: 0.8 },
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <header className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Left — content */}
      <div className="bg-green-deep flex flex-col justify-center px-20 pt-32 pb-20 relative overflow-hidden">
        {/* Glow spots */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(76,175,80,0.18)_0%,transparent_70%)]" />
        <div className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(199,110,77,0.18)_0%,transparent_70%)]" />

        <motion.span
          {...fadeUp(0)}
          className="inline-block text-[0.72rem] font-medium tracking-[0.18em] uppercase text-terracotta-light border border-terracotta/50 px-4 py-1.5 rounded-sm mb-8 w-fit"
        >
          Mathare, Nairobi · Women-Led · SDG 12
        </motion.span>

        <motion.h1
          {...fadeUp(0.15)}
          className="font-serif text-[clamp(2.8rem,4vw,4.5rem)] font-black text-cream leading-[1.05] mb-6"
        >
          Turning
          <br />
          <em className="not-italic text-green-light">Waste</em>
          <br />
          Into Worth
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-base text-cream/72 leading-[1.75] max-w-[420px] mb-10"
        >
          A youth- and women-led social enterprise in Mathare transforming textile
          waste into beautiful handcrafted products — and lasting livelihoods.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4">
          <a href="#products" className="btn-primary">Our Products</a>
          <a href="#impact" className="btn-terracotta">Our Impact</a>
          <a href="#mission" className="btn-outline-light">Our Story</a>
        </motion.div>
      </div>

      {/* Right — visual */}
      <div className="bg-brown-pale relative flex items-center justify-center overflow-hidden min-h-[420px]">
        <div
          className="w-full h-full absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 40%,rgba(45,106,45,0.15) 0%,transparent 50%), radial-gradient(ellipse at 70% 60%,rgba(199,110,77,0.15) 0%,transparent 50%)',
          }}
        />
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern" />

        {/* Fabric strips */}
        <div className="relative w-[380px] h-[480px] hidden sm:block">
          {FABRIC_STRIPS.map((strip, i) => (
            <motion.div
              key={i}
              className="absolute rounded-[4px] opacity-85"
              style={{
                width: strip.width,
                height: strip.height,
                background: strip.bg,
                left: strip.left,
                top: strip.top,
                rotate: strip.rotate,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: strip.delay,
              }}
            />
          ))}
        </div>

        {/* Badge */}
        <motion.div
          className="absolute bottom-12 right-12 bg-green-deep text-cream w-[110px] h-[110px] rounded-full flex flex-col items-center justify-center text-center font-serif shadow-[0_8px_30px_rgba(26,58,26,0.35)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          aria-label="22 Women Employed"
        >
          <AnimatedCounter
            target={22}
            className="text-[1.8rem] font-black text-green-light leading-none block"
          />
          <span className="text-[0.52rem] tracking-[0.1em] uppercase text-cream/65 mt-1">
            Women
            <br />
            Employed
          </span>
        </motion.div>
      </div>
    </header>
  )
}
