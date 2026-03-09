'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      // Active section detection
      const sections = document.querySelectorAll('[id]')
      let current = ''
      sections.forEach((sec) => {
        const el = sec as HTMLElement
        if (el.offsetTop - 140 <= window.scrollY) current = el.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[99] flex flex-col items-center justify-center gap-10 bg-green-deep/98 backdrop-blur-lg transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className={`font-serif text-4xl font-black transition-colors duration-200 ${
              link.highlight ? 'text-terracotta-light' : 'text-cream hover:text-terracotta-light'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Main navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-16 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
            : 'py-5'
        } bg-green-deep/97 backdrop-blur-xl border-b border-green-light/20`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-2xl font-black text-cream leading-tight tracking-tight"
          aria-label="Upcyclers Creative Hub home"
        >
          Upcyclers <span className="text-green-light italic">Creative</span>
          <br />Hub
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-[0.8rem] font-medium tracking-[0.09em] uppercase transition-colors duration-300 pb-0.5
                  after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-terracotta after:transition-all after:duration-300
                  ${activeSection && link.href === '#' + activeSection
                    ? 'text-green-light after:w-full'
                    : link.highlight
                    ? 'text-terracotta-light after:w-0 hover:after:w-full'
                    : 'text-cream/80 hover:text-terracotta-light after:w-0 hover:after:w-full'
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobileMenu"
        >
          <span
            className={`block w-[26px] h-[2px] bg-cream rounded-sm transition-all duration-300 ${
              mobileOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-[26px] h-[2px] bg-cream rounded-sm transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-[26px] h-[2px] bg-cream rounded-sm transition-all duration-300 ${
              mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>
    </>
  )
}
