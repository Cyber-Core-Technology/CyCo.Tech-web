import { CASES } from '@/lib/data'

export default function Cases() {
  return (
    <section id="casos" aria-labelledby="cases-heading"
      className="bg-[var(--bg-surface)] border-y border-[var(--border)]">
      <div className="section-wrapper">
        <div className="anim mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
            Casos de éxito
          </p>
          <h2 id="cases-heading" className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-3">
            Resultados reales
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CASES.map((c, i) => (
            <article key={c.title}
                     className="anim p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
                     style={{ transitionDelay: `${i * 0.1}s` }}>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-hint)] mb-3">
                {c.industry} · {c.service}
              </p>
              <h3 className="text-base font-semibold text-[var(--text)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{c.body}</p>
              <p className="text-sm font-semibold text-[var(--accent)]">{c.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
