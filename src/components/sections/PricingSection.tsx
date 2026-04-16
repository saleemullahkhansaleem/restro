'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'
import { MONTHLY_ITEMS, SETUP_INCLUDES } from '@/lib/data'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill="#6a3fb5" fillOpacity="0.12" />
      <path d="M5 8l2.5 2.5L11 5.5" stroke="#6a3fb5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIconWhite() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.15)" />
      <path d="M5 8l2.5 2.5L11 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PricingSection() {
  const ref = useScrollReveal()

  return (
    <section id="pricing" className="py-28 px-[7%] bg-cream" ref={ref}>
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <div className="reveal font-display text-[12px] font-bold tracking-[0.12em] uppercase text-brand-500 mb-4">
          Pricing
        </div>
        <h2 className="reveal delay-100 font-display font-black text-[clamp(30px,3.5vw,48px)] tracking-tight text-[#0e0b1f] mb-4">
          Pricing Plan (Per Branch)
        </h2>
        <p className="reveal delay-200 text-[17px] text-[#3b3558] leading-[1.7]">
          One-time setup charges with monthly subscription charges per branch.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto">

        {/* ── Setup card ── */}
        <div className="reveal bg-white border border-brand-200/30 rounded-2xl p-10">
          <div className="font-display text-[11px] font-bold tracking-[0.12em] uppercase text-brand-400 mb-5">
            One-Time Setup Charges
          </div>

          <div className="mb-1">
            <span className="text-[13px] text-[#7a7090]">Per branch · one-time charge</span>
          </div>
          <div className="font-display font-black text-[42px] text-[#0e0b1f] tracking-tight leading-none mb-1">
            PKR 150,000
          </div>
          <p className="text-[13px] text-[#7a7090] mb-7">
            Includes system setup, configuration, staff training & deployment
          </p>

          <div className="h-px bg-brand-100 mb-6" />

          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#7a7090] mb-4">
            What&apos;s included
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {SETUP_INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#3b3558]">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="block w-full text-center py-3.5 rounded-xl text-[15px] font-semibold text-brand-500 border border-brand-500/30 hover:bg-brand-50 hover:border-brand-500/60 transition-all duration-200"
          >
            Get Started
          </a>
        </div>

        {/* ── Monthly card (featured) ── */}
        <div className="reveal delay-150 relative bg-brand-700 rounded-2xl p-10 overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-400/20 blur-2xl pointer-events-none" />

          {/* Badge */}
          <div className="absolute top-6 right-6 bg-magenta-500 text-white text-[10px] font-bold tracking-[0.08em] uppercase px-3 py-1 rounded-full">
            Most Popular
          </div>

          <div className="relative z-10">
            <div className="font-display text-[11px] font-bold tracking-[0.12em] uppercase text-brand-300/70 mb-5">
              Monthly Subscription
            </div>

            <div className="mb-1">
              <span className="text-[13px] text-white/45">Per branch · per month</span>
            </div>
            <div className="font-display font-black text-[42px] text-white tracking-tight leading-none mb-1">
              PKR 25,000
            </div>
            <p className="text-[13px] text-white/45 mb-7">
              Base monthly license
            </p>

            <div className="h-px bg-white/10 mb-6" />

            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/35 mb-4">
              Monthly breakdown
            </p>

            <div className="flex flex-col gap-0 mb-5">
              {MONTHLY_ITEMS.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between py-3 ${
                    i < MONTHLY_ITEMS.length - 1 ? 'border-b border-white/[0.08]' : ''
                  }`}
                >
                  <span className="text-[14px] text-white/60">{item.name}</span>
                  <span className="font-display font-bold text-[14px] text-white">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/[0.09] mb-7">
              <span className="text-[13px] font-semibold text-white/70">Total (all add-ons)</span>
              <span className="font-display font-black text-[18px] text-brand-300">PKR 32,000 / month</span>
            </div>

            <a
              href="#contact"
              className="block w-full text-center py-3.5 rounded-xl text-[15px] font-semibold text-brand-700 bg-white hover:bg-brand-50 transition-all duration-200 shadow-lg shadow-black/20"
            >
              Request a Demo →
            </a>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <p className="reveal delay-300 text-center text-[14px] text-[#7a7090] mt-8">
        Multi-branch discounts available.{' '}
        <a href="#contact" className="text-brand-500 font-medium hover:underline">
          Contact us
        </a>{' '}
        for a custom quote.
      </p>
    </section>
  )
}
