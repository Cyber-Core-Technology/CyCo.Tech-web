export default function Hero() {
  return (
    <section aria-labelledby="hero-heading"
      className="relative flex items-center justify-center overflow-hidden grid-bg"
      style={{ minHeight: 'calc(100vh - 56px)', marginTop: '56px' }}>

      {/* Glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 70%, var(--red-glow) 0%, transparent 65%)' }}/>

      <div className="wrapper relative z-10 text-center">

        {/* Eyebrow */}
        <div className="anim inline-flex items-center gap-2.5 mb-8
                        px-4 py-2 rounded-full text-[11px] font-semibold
                        uppercase tracking-[1.5px] border border-[var(--border-mid)]
                        bg-[var(--bg-card)] text-[var(--text-muted)]">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: 'var(--red)' }} aria-hidden/>
          Empresa tecnológica · México
        </div>

        {/* Headline */}
        <h1 id="hero-heading"
            className="anim font-bold tracking-tight leading-[1.08] text-balance
                       text-[clamp(2.6rem,8vw,5.5rem)] max-w-4xl mx-auto mb-6"
            style={{ transitionDelay: '0.1s' }}>
          Tecnología moderna,
          <br/>
          <span style={{ color: 'var(--red)' }}>seguridad</span>
          <span style={{ color: 'var(--text-muted)', fontWeight: 300 }}> en cada byte</span>
        </h1>

        {/* Subheading */}
        <p className="anim text-[clamp(.95rem,2.2vw,1.1rem)] text-[var(--text-muted)]
                      max-w-[520px] mx-auto mb-12 leading-relaxed text-balance"
           style={{ transitionDelay: '0.2s' }}>
          Desarrollamos software empresarial y consultoría en ciberseguridad
          para empresas que quieren crecer sin miedo.
        </p>

        {/* CTAs */}
        <div className="anim flex flex-col xs:flex-row gap-3 justify-center"
             style={{ transitionDelay: '0.3s' }}>
          <a href="#servicios" className="btn btn-primary w-full xs:w-auto">
            Ver servicios
          </a>
          <a href="#contacto" className="btn btn-ghost w-full xs:w-auto">
            Contáctanos
          </a>
        </div>

        {/* Scroll cue */}
        <div className="anim mt-20 flex justify-center" style={{ transitionDelay: '0.5s' }}>
          <a href="#nosotros" aria-label="Ir a la siguiente sección"
             className="flex flex-col items-center gap-2 text-[var(--text-hint)]
                        hover:text-[var(--text-muted)] transition-colors group">
            <span className="text-[10px] tracking-[2px] uppercase">Explorar</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                 className="group-hover:translate-y-1 transition-transform">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}