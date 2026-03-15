export default function Hero() {
  return (
    <section aria-labelledby="hero-heading"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden
                 bg-[var(--bg)]">
      {/* Glow de fondo sutil */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -5%, var(--badge-bg) 0%, transparent 65%)' }}/>

      <div className="section-wrapper relative z-10 text-center">
        <div className="anim inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        text-xs font-semibold uppercase tracking-wider mb-6
                        bg-[var(--badge-bg)] text-[var(--badge-text)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--badge-text)]" aria-hidden/>
          Empresa tecnológica · México
        </div>

        <h1 id="hero-heading"
            className="anim text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold
                       leading-tight tracking-tight text-balance max-w-4xl mx-auto mb-6"
            style={{ animationDelay: '0.1s' }}>
          Tecnología moderna,{' '}
          <span style={{ color: 'var(--accent)' }}>seguridad en cada byte</span>
        </h1>

        <p className="anim text-base md:text-lg text-[var(--text-muted)] max-w-xl mx-auto mb-10 text-balance"
           style={{ animationDelay: '0.2s' }}>
          Desarrollamos software empresarial y consultoría en ciberseguridad para PyMEs
          que quieren crecer sin miedo.
        </p>

        <div className="anim flex flex-col xs:flex-row gap-3 justify-center"
             style={{ animationDelay: '0.3s' }}>
          <a href="#servicios"
             className="px-6 py-3 rounded-lg text-sm font-medium text-white transition-colors"
             style={{ background: 'var(--accent)' }}
             onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-hover)')}
             onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}>
            Ver servicios
          </a>
          <a href="#contacto"
             className="px-6 py-3 rounded-lg text-sm font-medium transition-all
                        border border-[var(--border)] text-[var(--text)]
                        hover:border-[var(--border-mid)] hover:bg-[var(--bg-surface)]">
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}
