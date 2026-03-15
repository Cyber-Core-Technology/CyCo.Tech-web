'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { NAV_LINKS } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header role="banner"
      className={`sticky top-0 z-50 w-full transition-all duration-300
        ${scrolled
          ? 'bg-[var(--bg-surface)]/90 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent'}`}>
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between"
           aria-label="Navegación principal">
        {/* Logo */}
        <Link href="/" aria-label="CyCo.tech — inicio" className="flex items-center gap-3 shrink-0">
          <Image src="/Group_1.png" alt="CyCo.tech logo" width={32} height={32} priority />
          <span className="font-semibold text-base tracking-tight">
            <span style={{ color: 'var(--accent)' }}>Cy</span>
            <span style={{ color: 'var(--text-muted)' }}>co</span>
            <span style={{ color: 'var(--blue)' }}>.tech</span>
          </span>
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-6 list-none" role="list">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href}
                 className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Acciones */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contacto"
             className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium
                        text-white transition-colors"
             style={{ background: 'var(--accent)' }}
             onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-hover)')}
             onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}>
            Contáctanos
          </a>

          {/* Hamburger mobile */}
          <button onClick={() => setOpen(o => !o)}
                  aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                  aria-expanded={open}
                  className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 rounded-lg
                             border border-[var(--border)] hover:bg-[var(--bg-surface)] transition-colors">
            <span className={`block h-0.5 w-5 mx-auto bg-[var(--text-muted)] transition-all duration-300
                              ${open ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block h-0.5 w-5 mx-auto bg-[var(--text-muted)] transition-all duration-300
                              ${open ? 'opacity-0' : ''}`}/>
            <span className={`block h-0.5 w-5 mx-auto bg-[var(--text-muted)] transition-all duration-300
                              ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>
      </nav>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-surface)]">
          <ul className="flex flex-col p-4 gap-2 list-none" role="list">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}
                   className="block py-2 px-3 rounded-lg text-sm text-[var(--text-muted)]
                              hover:text-[var(--text)] hover:bg-[var(--bg-card)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" onClick={() => setOpen(false)}
                 className="block mt-2 py-2 px-3 rounded-lg text-sm font-medium text-center text-white"
                 style={{ background: 'var(--accent)' }}>
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
