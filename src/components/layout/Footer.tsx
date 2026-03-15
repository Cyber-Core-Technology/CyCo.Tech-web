import Link from 'next/link'
import { SITE } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="max-w-[1080px] mx-auto px-5 py-8
                      flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[14px]">
            <span style={{ color:'var(--red)' }}>Cy</span>
            <span style={{ color:'var(--text-muted)' }}>co</span>
            <span style={{ color:'var(--blue)' }}>.tech</span>
          </span>
          <span className="text-[var(--text-hint)] text-[12px]">
            © {SITE.year}
          </span>
        </div>
        <nav aria-label="Links del footer">
          <ul className="flex gap-5 list-none">
            {[
              { label: 'LinkedIn', href: SITE.social.linkedin },
              { label: 'GitHub',   href: SITE.social.github },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} target="_blank" rel="noopener noreferrer"
                      className="text-[12px] text-[var(--text-hint)]
                                 hover:text-[var(--text-muted)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}