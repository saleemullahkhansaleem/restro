import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-cream text-[#0e0b1f]">
      <h1 className="font-display font-black text-[clamp(32px,5vw,52px)] tracking-tight mb-3">404</h1>
      <p className="text-[17px] text-[#3b3558] mb-8 text-center max-w-md">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-7 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-brand-500 hover:bg-brand-700 transition-colors"
      >
        Back to home
      </Link>
    </div>
  )
}
