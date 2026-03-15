import { PILLARS } from '@/lib/data'

export default function About() {
  return (
    <section id="nosotros" aria-labelledby="about-heading"
      className="border-y border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="wrapper">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Izquierda — texto */}
          <div className="anim">
            <span className="tag">Quiénes somos</span>
            <span className="accent-line"/>
            <h2 id="about-heading"
                className="text-[clamp(1.7rem,4vw,2.4rem)] font-bold leading-tight mb-5">
              Tecnología al alcance<br/>de cualquier empresa
            </h2>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-4">
              Somos un equipo mexicano que combina desarrollo de software y ciberseguridad
              en soluciones concretas, accesibles y adaptadas a la realidad de cada negocio.
            </p>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
              No vendemos plantillas ni soluciones genéricas. Cada proyecto empieza
              entendiendo tu proceso, tus riesgos y tus objetivos.
            </p>
          </div>

          {/* Derecha — pilares */}
          <div className="flex flex-col gap-4">
            {PILLARS.map((p, i) => (
              <div key={p.title}
                   className="anim card p-5 flex gap-4 items-start"
                   style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center mt-0.5"
                     style={{ background: 'var(--red-dim)' }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: 'var(--red)' }}/>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[var(--text)] mb-1">{p.title}</h3>
                  <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}