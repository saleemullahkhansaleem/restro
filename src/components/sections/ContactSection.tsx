'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { CONTACT_DETAILS, DEMO_OPTIONS } from '@/lib/data'

export default function ContactSection() {
  const ref = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate async send — replace with real API call (e.g. fetch('/api/contact', ...))
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="contact" className="py-28 px-[7%] bg-white" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* ── Left: info ── */}
        <div>
          <div className="reveal font-display text-[12px] font-bold tracking-[0.12em] uppercase text-brand-500 mb-4">
            Get In Touch
          </div>
          <h2 className="reveal delay-100 font-display font-black text-[clamp(28px,3vw,44px)] tracking-tight text-[#0e0b1f] mb-5 leading-tight">
            Ready to transform your restaurant?
          </h2>
          <p className="reveal delay-200 text-[17px] text-[#3b3558] leading-[1.7] mb-10">
            Book a free demo or drop us a message. Our team typically responds within one business day.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-6">
            {CONTACT_DETAILS.map((detail, i) => (
              <div
                key={detail.label}
                className={`reveal ${i === 0 ? '' : i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : 'delay-300'} flex items-start gap-4`}
              >
                <div className="w-11 h-11 rounded-[12px] bg-brand-50 border border-brand-100/80 flex items-center justify-center text-[18px] shrink-0">
                  {detail.icon}
                </div>
                <div>
                  <div className="text-[12px] text-[#7a7090] mb-0.5 uppercase tracking-wide font-medium">
                    {detail.label}
                  </div>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : undefined}
                      rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[15px] font-medium text-brand-500 hover:text-brand-700 transition-colors"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-[15px] font-medium text-[#0e0b1f] whitespace-pre-line">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="reveal delay-200">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 bg-brand-50 rounded-2xl border border-brand-100">
              <div className="text-[48px] mb-4">✅</div>
              <h3 className="font-display font-bold text-[22px] text-[#0e0b1f] mb-2">
                Message received!
              </h3>
              <p className="text-[15px] text-[#7a7090] max-w-xs">
                We&apos;ll be in touch within one business day. Looking forward to speaking with you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fname" className="text-[13px] font-medium text-[#3b3558]">
                    First Name
                  </label>
                  <input
                    id="fname"
                    type="text"
                    placeholder="Ahmed"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brand-200/40 bg-cream text-[15px] text-[#0e0b1f] placeholder:text-[#7a7090]/60 focus:outline-none focus:border-brand-400 focus:bg-white transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lname" className="text-[13px] font-medium text-[#3b3558]">
                    Last Name
                  </label>
                  <input
                    id="lname"
                    type="text"
                    placeholder="Khan"
                    className="w-full px-4 py-3 rounded-xl border border-brand-200/40 bg-cream text-[15px] text-[#0e0b1f] placeholder:text-[#7a7090]/60 focus:outline-none focus:border-brand-400 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[13px] font-medium text-[#3b3558]">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="ahmed@yourrestaurant.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand-200/40 bg-cream text-[15px] text-[#0e0b1f] placeholder:text-[#7a7090]/60 focus:outline-none focus:border-brand-400 focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-[13px] font-medium text-[#3b3558]">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+92 300 0000000"
                  className="w-full px-4 py-3 rounded-xl border border-brand-200/40 bg-cream text-[15px] text-[#0e0b1f] placeholder:text-[#7a7090]/60 focus:outline-none focus:border-brand-400 focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Interest select */}
              <div className="flex flex-col gap-2">
                <label htmlFor="interest" className="text-[13px] font-medium text-[#3b3558]">
                  I&apos;m interested in…
                </label>
                <select
                  id="interest"
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl border border-brand-200/40 bg-cream text-[15px] text-[#0e0b1f] focus:outline-none focus:border-brand-400 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select an option</option>
                  {DEMO_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Restaurant name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="restaurant" className="text-[13px] font-medium text-[#3b3558]">
                  Restaurant / Business Name
                </label>
                <input
                  id="restaurant"
                  type="text"
                  placeholder="e.g. Urban Brunch Café"
                  className="w-full px-4 py-3 rounded-xl border border-brand-200/40 bg-cream text-[15px] text-[#0e0b1f] placeholder:text-[#7a7090]/60 focus:outline-none focus:border-brand-400 focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[13px] font-medium text-[#3b3558]">
                  Message{' '}
                  <span className="text-[#7a7090] font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your restaurant and what you're looking for…"
                  className="w-full px-4 py-3 rounded-xl border border-brand-200/40 bg-cream text-[15px] text-[#0e0b1f] placeholder:text-[#7a7090]/60 focus:outline-none focus:border-brand-400 focus:bg-white transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-[15px] font-semibold text-white bg-brand-500 hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-brand-500/25 hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5 mt-1"
              >
                {loading ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
