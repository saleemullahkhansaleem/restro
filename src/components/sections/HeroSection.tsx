'use client'

import { useEffect, useState } from 'react'
import { HERO_STATS, TABLES, TABLE_STATUS_STYLES, TABLE_LEGEND, TableStatus } from '@/lib/data'

// Simulates live table status cycling for demo effect
function useLiveTables() {
  const [tables, setTables] = useState(TABLES)

  useEffect(() => {
    const statuses: TableStatus[] = ['free', 'occupied', 'reserved', 'cleaning']
    const timer = setInterval(() => {
      setTables((prev) => {
        const idx = Math.floor(Math.random() * prev.length)
        const current = prev[idx].status
        const next = statuses[(statuses.indexOf(current) + 1) % statuses.length]
        return prev.map((t, i) => (i === idx ? { ...t, status: next } : t))
      })
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  return tables
}

export default function HeroSection() {
  const tables = useLiveTables()

  return (
    <section
      id="hero"
      className="min-h-screen pt-[72px] grid grid-cols-1 lg:grid-cols-2"
    >
      {/* ── Left: copy ── */}
      <div className="flex flex-col justify-center px-[7%] lg:px-[8%] py-20 lg:py-28">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-brand-100/70 text-brand-700 text-[12px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full w-fit mb-7 border border-brand-200/60">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          Smart Restaurant Management
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-[clamp(42px,5.5vw,70px)] leading-[1.08] tracking-[-0.03em] text-[#0e0b1f] mb-6">
          Run your restaurant{' '}
          <span className="relative inline-block">
            <span className="gradient-text">smarter</span>
            <svg
              className="absolute -bottom-1 left-0 w-full"
              height="6"
              viewBox="0 0 200 6"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q50 0 100 4 Q150 8 200 3"
                fill="none"
                stroke="url(#wg)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="wg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6a3fb5" />
                  <stop offset="100%" stopColor="#c0398c" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          ,<br />not harder.
        </h1>

        {/* Description */}
        <p className="text-[18px] text-[#3b3558] leading-[1.7] mb-10 max-w-[500px]">
          RESTRO is a cloud-based restaurant management platform by{' '}
          <strong className="font-medium text-[#0e0b1f]">Creative Garage</strong> — covering
          table management, reservations, POS, kitchen display, inventory, and analytics in
          one seamless system.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[16px] font-semibold text-white bg-brand-500 hover:bg-brand-700 transition-all duration-200 shadow-md shadow-brand-500/25 hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5"
          >
            Request a Demo
            <span className="text-[14px]">→</span>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[16px] font-semibold text-brand-500 border border-brand-500/30 hover:bg-brand-50 hover:border-brand-500/60 transition-all duration-200"
          >
            Explore Features
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 flex-wrap">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-black text-[28px] text-brand-500 leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-[13px] text-[#7a7090]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: floor view mockup ── */}
      <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-brand-900 via-[#1a0a3d] to-[#2d0f5e] overflow-hidden noise-overlay">
        {/* Glow blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-magenta-500/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-[400px] mx-auto px-6">
          {/* Card */}
          <div className="bg-white/[0.07] border border-white/[0.1] rounded-2xl p-7 backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-[13px] font-semibold text-white/50 uppercase tracking-widest">
                Live Floor View
              </span>
              <div className="flex items-center gap-1.5 bg-green-500/15 border border-green-400/25 text-green-300 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
                Live
              </div>
            </div>

            {/* Table grid */}
            <div className="grid grid-cols-4 gap-2.5 mb-5">
              {tables.map((table) => {
                const styles = TABLE_STATUS_STYLES[table.status]
                return (
                  <div
                    key={table.id}
                    className={`
                      ${styles.bg} border ${styles.border}
                      rounded-xl p-3 text-center transition-all duration-500
                    `}
                  >
                    <div className="font-display font-bold text-[17px] text-white mb-0.5">
                      {table.id}
                    </div>
                    <div className={`text-[9px] uppercase tracking-wide font-semibold ${styles.text}`}>
                      {table.status}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3">
              {TABLE_LEGEND.map((item) => (
                <div key={item.label} className="flex items-center gap-1.5 text-[11px] text-white/40">
                  <span className={`w-2 h-2 rounded-full ${item.color} shrink-0`} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Floating stat pill */}
          <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-2.5 shadow-xl shadow-black/30 flex items-center gap-2.5 border border-brand-100/30">
            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-[16px]">📊</div>
            <div>
              <div className="font-display font-bold text-[13px] text-[#0e0b1f] leading-none">PKR 84k</div>
              <div className="text-[10px] text-[#7a7090] mt-0.5">Today&apos;s revenue</div>
            </div>
          </div>

          {/* Floating order pill */}
          <div className="absolute -top-4 -left-4 bg-white rounded-xl px-4 py-2.5 shadow-xl shadow-black/30 flex items-center gap-2.5 border border-brand-100/30">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-[16px]">✅</div>
            <div>
              <div className="font-display font-bold text-[13px] text-[#0e0b1f] leading-none">47 Orders</div>
              <div className="text-[10px] text-[#7a7090] mt-0.5">Today</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
