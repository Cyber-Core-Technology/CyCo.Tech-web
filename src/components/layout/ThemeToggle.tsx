'use client'
import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button onClick={toggle}
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all
                 text-[var(--text-muted)] hover:text-[var(--text)]
                 bg-transparent hover:bg-[var(--bg-surface)]
                 border-[var(--border)] hover:border-[var(--border-mid)]">
      {theme === 'dark' ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <circle cx="12" cy="12" r="5"/>
          {[0,45,90,135,180,225,270,315].map(a => (
            <line key={a} x1={12+7*Math.cos(a*Math.PI/180)} y1={12+7*Math.sin(a*Math.PI/180)}
                  x2={12+9*Math.cos(a*Math.PI/180)} y2={12+9*Math.sin(a*Math.PI/180)}
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          ))}
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}
