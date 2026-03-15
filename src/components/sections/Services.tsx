import { SERVICES } from '@/lib/data'
import ServiceCard from '@/components/ui/ServiceCard'

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="services-heading"
      className="bg-[var(--bg)]">
      <div className="section-wrapper">
        <div className="anim mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
            Servicios y soluciones
          </p>
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-3">
            Lo que hacemos
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-lg leading-relaxed">
            Cubrimos el espectro tecnológico que tu empresa necesita para operar con confianza.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => (
            <div key={s.slug} className="anim" style={{ transitionDelay: `${i * 0.08}s` }}>
              <ServiceCard tag={s.tag} title={s.title} description={s.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
