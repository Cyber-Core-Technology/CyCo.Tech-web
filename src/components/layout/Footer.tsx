import Link from 'next/link'
import { SITE } from '@/lib/data'

export default function Footer() {
  return (
    <footer role="contentinfo"
      className="border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="max-w-[1200px] mx-auto px-6 py-8
                      flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--text-hint)] text-center sm:text-left">
          © {SITE.year} {SITE.legalName} · {SITE.email}
        </p>
        <nav aria-label="Links del footer">
          <ul className="flex gap-5 list-none">
            {[
              { label: 'Privacidad', href: '/privacidad' },
              { label: 'LinkedIn',   href: SITE.social.linkedin },
              { label: 'GitHub',     href: SITE.social.github },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href}
                      className="text-xs text-[var(--text-hint)] hover:text-[var(--text-muted)] transition-colors"
                      {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
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
