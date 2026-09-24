import { useState } from 'react'
import { business } from '../data'

const links = [
  { href: '#cabins', label: 'Cabins' },
  { href: '#explore', label: 'Explore Lava' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]

export function Mark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M6 32 20 10l14 22Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M15 8c-2-3 2-4 0-7M22 7c-2-3 2-4 0-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      <path d="M17 32v-7h6v7" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-pine/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 text-pine">
          <Mark className="h-8 w-8 text-ember" />
          <span className="font-display text-xl font-semibold">{business.name}</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink/80 hover:text-ember">
              {l.label}
            </a>
          ))}
          <a href="#book" className="rounded-full bg-ember px-5 py-2 text-white hover:bg-ember-dark">
            Book Direct
          </a>
        </nav>
        <button
          className="rounded-md p-2 text-pine md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-pine/10 px-4 pb-4 md:hidden">
          {[...links, { href: '#book', label: 'Book Direct' }].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 font-medium text-ink/90">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
