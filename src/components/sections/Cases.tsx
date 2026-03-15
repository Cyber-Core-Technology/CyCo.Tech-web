import { CASES } from '@/lib/data'

export default function Cases() {
  return (
    <section id="casos" aria-labelledby="cases-heading"
      className="border-y border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="wrapper">

        <div className="anim mb-14">
          <span className="tag">Casos de éxito</span>
          <span className="accent-line"/>
          <h2 id="cases-heading"
              className="text-[clamp(1.7rem,4vw,2.4rem)] font-bold leading-tight mb-4">
            Resultados reales
          </h2>
          <p className="text-[15px] text-[var(--text-muted)] max-w-lg leading-relaxed">
            Proyectos donde la tecnología generó un impacto medible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CASES.map((c, i) => (
            <article key={c.title}
                     className="anim card p-8 flex flex-col gap-4"
                     style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="flex items-center gap-2">
                <span className="tag">{c.service}</span>
                <span className="text-[11px] text-[var(--text-hint)]">{c.industry}</span>
              </div>
              <h3 className="text-[17px] font-semibold text-[var(--text)]">{c.title}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed flex-1">{c.body}</p>
              <div className="pt-4 border-t border-[var(--border)] flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                     style={{ color: 'var(--red)', flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--red)' }}>{c.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}