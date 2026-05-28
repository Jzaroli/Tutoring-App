import { useState } from 'react'
import { site, navLinks } from '../content'
import { scrollToSection } from '../utils/scroll'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (sectionId) => {
    setMenuOpen(false)
    scrollToSection(sectionId)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => handleNavClick('services')}
          className="text-left text-lg font-semibold tracking-tight text-black"
        >
          {site.name}
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-black/70 transition-colors hover:text-black"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-black transition-all duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-black transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-black transition-all duration-300 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-black/5 bg-white transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="border-b border-black/5 py-3 text-left text-base font-medium text-black last:border-0"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
