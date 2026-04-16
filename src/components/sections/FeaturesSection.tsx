'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'
import { FEATURES } from '@/lib/data'

export default function FeaturesSection() {
  const ref = useScrollReveal()

  return (
    <section id="features" className="py-28 px-[7%] bg-white" ref={ref}>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="reveal section-eyebrow font-display text-[12px] font-bold tracking-[0.12em] uppercase text-brand-500 mb-4">
          Platform Modules
        </div>
        <h2 className="reveal delay-100 font-display font-black text-[clamp(30px,3.5vw,48px)] tracking-tight text-[#0e0b1f] mb-5">
          Everything your restaurant needs in one system
        </h2>
        <p className="reveal delay-200 text-[17px] text-[#3b3558] leading-[1.7]">
          From live table management to digital and QR workflows, RESTRO streamlines
          operations with 9 fully integrated modules.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature, i) => (
          <div
            key={feature.number}
            className={`
              reveal
              ${i === 0 ? '' : i < 4 ? 'delay-100' : i < 7 ? 'delay-200' : 'delay-300'}
              bg-cream border border-brand-200/30 rounded-2xl p-8
              transition-colors duration-300
              relative overflow-hidden cursor-default
            `}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 to-magenta-500 opacity-50 rounded-t-2xl" />

            {/* Icon + number */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-[14px] bg-brand-100/60 flex items-center justify-center text-[22px] shrink-0">
                {feature.icon}
              </div>
              <span className="font-display font-bold text-[11px] text-brand-300 tracking-[0.12em] uppercase mt-1">
                {feature.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-[18px] text-[#0e0b1f] mb-3 leading-tight">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-[14px] text-[#7a7090] leading-[1.65] mb-5">
              {feature.description}
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-2">
              {feature.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-[13px] text-[#3b3558]">
                  <span className="w-[5px] h-[5px] rounded-full bg-brand-400 shrink-0 mt-[7px]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
