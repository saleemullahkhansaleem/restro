import { NAV_LINKS } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0e0b1f] py-10 px-[7%]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-wrap">

        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          {/*
            LOGO PLACEHOLDER
            Replace with:
              <Image src="/logo-white.svg" alt="RESTRO" width={120} height={32} />
          */}
          <div className="w-8 h-8 rounded-[9px] bg-brand-500/30 border border-brand-400/20 flex items-center justify-center">
            <span className="font-display font-black text-[11px] text-white/80 tracking-tight">CG</span>
          </div>
          <span className="font-display font-black text-[18px] text-white tracking-tight">
            REST<span className="text-brand-300">RO</span>
          </span>
        </a>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-7 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-white/35 hover:text-white/70 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.creativegarage.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-white/35 hover:text-white/70 transition-colors duration-200"
          >
            Creative Garage
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-[12px] text-white/25">
          © {year} Creative Garage Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
