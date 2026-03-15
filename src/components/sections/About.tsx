import { PILLARS } from '@/lib/data'

export default function About() {
  return (
    <section id="nosotros" aria-labelledby="about-heading"
      className="bg-[var(--bg-surface)] border-y border-[var(--border)]">
      <div className="section-wrapper">
        <div className="anim mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
            Quiénes somos
          </p>
          <h2 id="about-heading" className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-3">
            Tecnología al alcance de tu empresa
          </h2>
          <p className="text-[var(--text-muted)] max-w-lg text-sm leading-relaxed">
            Somos una empresa mexicana que combina desarrollo de software y ciberseguridad
            en soluciones accesibles para negocios de cualquier tamaño.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <div key={p.title}
                 className="anim p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
                 style={{ transitionDelay: `${i * 0.1}s` }}>
              <h3 className="text-sm font-semibold text-[var(--text)] mb-2">{p.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
