'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { NAV_LINKS } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 h-14 transition-all duration-300
        ${scrolled || open
          ? 'bg-[var(--bg)] border-b border-[var(--border)]'
          : 'bg-transparent'}`}>
        <div className="max-w-[1080px] mx-auto px-5 h-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" aria-label="CyCo.tech"
                className="flex items-center gap-2.5 shrink-0 z-50">
            <Image src="/Group_1.png" alt="" width={26} height={26} priority/>
            <span className="font-semibold text-[15px] tracking-tight">
              <span style={{ color:'var(--red)' }}>Cy</span>
              <span style={{ color:'var(--text-muted)' }}>co</span>
              <span style={{ color:'var(--blue)' }}>.tech</span>
            </span>
          </Link>

          {/* Links desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href}
                 className="px-3 py-1.5 rounded-lg text-[13px] text-[var(--text-muted)]
                            hover:text-[var(--text)] hover:bg-[var(--bg-surface)] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Derecha */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contacto"
               className="hidden md:inline-flex btn btn-primary py-2 px-4 text-[13px]">
              Contáctanos
            </a>

            {/* Hamburger */}
            <button onClick={() => setOpen(o => !o)}
                    aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={open}
                    className="md:hidden relative z-50 w-8 h-8 flex flex-col
                               items-center justify-center gap-[5px] rounded-lg
                               hover:bg-[var(--bg-surface)] transition-colors">
              <span className={`block h-px w-5 bg-[var(--text)] rounded-full
                                transition-all duration-300
                                ${open ? 'rotate-45 translate-y-[5px]' : ''}`}/>
              <span className={`block h-px w-5 bg-[var(--text)] rounded-full
                                transition-all duration-300
                                ${open ? 'opacity-0' : ''}`}/>
              <span className={`block h-px w-5 bg-[var(--text)] rounded-full
                                transition-all duration-300
                                ${open ? '-rotate-45 -translate-y-[5px]' : ''}`}/>
            </button>
          </div>
        </div>
      </header>

      {/* Menú mobile — overlay por fuera del header */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300
                       bg-[var(--bg)] flex flex-col pt-14
                       ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
           aria-hidden={!open}>
        <nav className="flex flex-col flex-1 p-6 gap-2 overflow-y-auto">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
               onClick={() => setOpen(false)}
               className="py-4 px-5 rounded-xl text-[17px] font-medium
                          text-[var(--text-muted)] hover:text-[var(--text)]
                          hover:bg-[var(--bg-surface)] transition-colors border
                          border-transparent hover:border-[var(--border)]">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="p-6 border-t border-[var(--border)]">
          <a href="#contacto" onClick={() => setOpen(false)}
             className="btn btn-primary w-full justify-center text-[15px] py-3.5">
            Contáctanos
          </a>
        </div>
      </div>
    </>
  )
}