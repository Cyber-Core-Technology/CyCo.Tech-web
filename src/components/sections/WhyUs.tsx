import { WHY_US } from '@/lib/data'

export default function WhyUs() {
  return (
    <section aria-labelledby="whyus-heading" className="bg-[var(--bg)]">
      <div className="section-wrapper">
        <div className="anim mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
            Por qué nosotros
          </p>
          <h2 id="whyus-heading" className="text-2xl md:text-3xl font-bold text-[var(--text)]">
            Números que nos respaldan
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {WHY_US.map((w, i) => (
            <div key={w.stat}
                 className="anim p-5 rounded-xl text-center border border-[var(--border)] bg-[var(--bg-card)]"
                 style={{ transitionDelay: `${i * 0.07}s` }}>
              <p className="text-2xl font-bold mb-1" style={{ color: 'var(--accent)' }}>{w.stat}</p>
              <p className="text-xs text-[var(--text-muted)] leading-snug">{w.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
