import { SERVICES } from '@/lib/data'

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="services-heading"
      className="bg-[var(--bg)]">
      <div className="wrapper">

        <div className="anim mb-14">
          <span className="tag">Servicios</span>
          <span className="accent-line"/>
          <h2 id="services-heading"
              className="text-[clamp(1.7rem,4vw,2.4rem)] font-bold leading-tight mb-4">
            Lo que hacemos
          </h2>
          <p className="text-[15px] text-[var(--text-muted)] max-w-lg leading-relaxed">
            Cubrimos el espectro tecnológico que tu empresa necesita
            para operar con confianza y escalar sin fricciones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => (
            <article key={s.slug}
                     className="anim card p-7 flex flex-col gap-3 group"
                     style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="tag self-start">{s.tag}</span>
              <h3 className="text-[16px] font-semibold text-[var(--text)]
                             group-hover:text-[var(--red)] transition-colors">
                {s.title}
              </h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed flex-1">
                {s.description}
              </p>
              <div className="flex items-center gap-1.5 text-[var(--red)] text-[12px] font-medium mt-1">
                <span>Saber más</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                     className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}