'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'
import { WHY_CARDS } from '@/lib/data'

export default function WhySection() {
  const ref = useScrollReveal()

  return (
    <section
      id="why"
      className="relative py-28 px-[7%] overflow-hidden bg-brand-900"
      ref={ref}
    >
      {/* Background glows */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-brand-400/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-[10%] w-[400px] h-[400px] rounded-full bg-magenta-500/10 blur-3xl pointer-events-none" />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="reveal font-display text-[12px] font-bold tracking-[0.12em] uppercase text-brand-300/70 mb-4">
            Why Choose RESTRO
          </div>
          <h2 className="reveal delay-100 font-display font-black text-[clamp(30px,3.5vw,50px)] tracking-tight text-white mb-5 leading-tight">
            Built for the way restaurants actually work
          </h2>
          <p className="reveal delay-200 text-[17px] text-white/55 leading-[1.7]">
            Developed by Creative Garage — a team that understands the pace, pressure, and
            precision required in F&B operations.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`
                reveal
                ${i < 2 ? '' : i < 4 ? 'delay-100' : 'delay-200'}
                group bg-white/[0.06] border border-white/[0.09] rounded-2xl p-7
                hover:bg-white/[0.1] hover:border-brand-400/30 hover:-translate-y-1
                transition-all duration-300 cursor-default
              `}
            >
              <span className="text-[28px] block mb-5">{card.icon}</span>
              <h3 className="font-display font-bold text-[17px] text-white mb-2.5 leading-snug">
                {card.title}
              </h3>
              <p className="text-[14px] text-white/50 leading-[1.65]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal delay-300 mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5 p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08]">
          <div className="flex-1">
            <p className="font-display font-bold text-[18px] text-white mb-1">
              Ready to see RESTRO in action?
            </p>
            <p className="text-[14px] text-white/45">
              Book a free demo and we&apos;ll walk you through the full platform in 30 minutes.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold text-brand-700 bg-white hover:bg-brand-50 transition-all duration-200 shadow-lg shadow-black/20"
          >
            Book a Free Demo →
          </a>
        </div>
      </div>
    </section>
  )
}
