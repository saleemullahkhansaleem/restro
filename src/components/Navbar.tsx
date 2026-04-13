'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-[5%]
        transition-all duration-300
        ${scrolled
          ? 'bg-cream/97 border-b border-brand-200/30 shadow-sm shadow-brand-500/5'
          : 'bg-cream/88 border-b border-brand-200/20'}
        backdrop-blur-md
      `}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 shrink-0">
        {/*
          LOGO PLACEHOLDER
          Replace the div below with:
            <Image src="/logo.svg" alt="RESTRO by Creative Garage" width={140} height={36} />
          after placing the logo file in /public/logo.svg
        */}
        <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-brand-700 to-brand-400 flex items-center justify-center">
          <span className="font-display font-black text-[13px] text-white tracking-tight">CG</span>
        </div>
        <span className="font-display font-black text-[22px] text-[#0e0b1f] tracking-tight leading-none">
          REST<span className="text-brand-500">RO</span>
        </span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[15px] font-medium text-[#3b3558] hover:text-brand-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTAs */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-lg text-[14px] font-medium text-brand-500 border border-brand-500/30 hover:bg-brand-50 hover:border-brand-500/60 transition-all duration-200"
        >
          Get a Demo
        </a>
        <a
          href="#pricing"
          className="px-5 py-2.5 rounded-lg text-[14px] font-medium text-white bg-brand-500 hover:bg-brand-700 transition-all duration-200 shadow-sm shadow-brand-500/30"
        >
          View Pricing
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-brand-50 transition-colors"
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-[#0e0b1f] transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-5 h-0.5 bg-[#0e0b1f] transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-[#0e0b1f] transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-cream border-b border-brand-200/30 shadow-lg md:hidden">
          <div className="px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[16px] font-medium text-[#3b3558] hover:text-brand-500 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-brand-200/20">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 rounded-lg text-[15px] font-medium text-brand-500 border border-brand-500/30 text-center hover:bg-brand-50 transition-colors"
              >
                Get a Demo
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 rounded-lg text-[15px] font-medium text-white bg-brand-500 hover:bg-brand-700 transition-colors text-center"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
