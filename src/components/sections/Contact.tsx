'use client'
import { useState, FormEvent } from 'react'
import { SITE } from '@/lib/data'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'error')
      if (res.ok) setForm({ name: '', company: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" aria-labelledby="contact-heading"
      className="bg-[var(--bg)]">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <div className="anim">
            <span className="tag">Contacto</span>
            <span className="accent-line"/>
            <h2 id="contact-heading"
                className="text-[clamp(1.7rem,4vw,2.4rem)] font-bold leading-tight mb-5">
              Hablemos
            </h2>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-10">
              ¿Tienes un proyecto en mente? Escríbenos y te respondemos
              en menos de 24 horas.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  label: 'Email',
                  value: SITE.email,
                  href:  `mailto:${SITE.email}`,
                },
                {
                  label: 'Web',
                  value: 'cyco.tech',
                  href:  SITE.url,
                },
                {
                  label: 'País',
                  value: 'México',
                  href:  null,
                },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                       style={{ background: 'var(--red-dim)' }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: 'var(--red)' }}/>
                  </div>
                  <div>
                    <p className="text-[11px] text-[var(--text-hint)] uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href}
                         className="text-[14px] font-medium text-[var(--text)]
                                    hover:text-[var(--red)] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[14px] font-medium text-[var(--text)]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="anim" style={{ transitionDelay: '0.1s' }}>
            <form onSubmit={submit} noValidate
                  className="card p-8 flex flex-col gap-5">

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name"
                         className="text-[12px] font-medium text-[var(--text-muted)]">
                    Nombre <span style={{ color: 'var(--red)' }}>*</span>
                  </label>
                  <input id="name" name="name" type="text" required
                         autoComplete="name" value={form.name} onChange={set('name')}
                         className="input" placeholder="Tu nombre"/>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company"
                         className="text-[12px] font-medium text-[var(--text-muted)]">
                    Empresa
                  </label>
                  <input id="company" name="company" type="text"
                         autoComplete="organization" value={form.company} onChange={set('company')}
                         className="input" placeholder="Nombre de tu empresa"/>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email"
                       className="text-[12px] font-medium text-[var(--text-muted)]">
                  Email <span style={{ color: 'var(--red)' }}>*</span>
                </label>
                <input id="email" name="email" type="email" required
                       autoComplete="email" value={form.email} onChange={set('email')}
                       className="input" placeholder="tu@email.com"/>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message"
                       className="text-[12px] font-medium text-[var(--text-muted)]">
                  Mensaje <span style={{ color: 'var(--red)' }}>*</span>
                </label>
                <textarea id="message" name="message" required rows={4}
                          value={form.message} onChange={set('message')}
                          className="input resize-none"
                          placeholder="¿En qué podemos ayudarte?"/>
              </div>

              <button type="submit" disabled={status === 'loading' || status === 'ok'}
                      className="btn btn-primary w-full justify-center py-3
                                 disabled:opacity-50 disabled:cursor-not-allowed
                                 disabled:transform-none">
                {status === 'loading' ? 'Enviando…'
                  : status === 'ok' ? '✓ Mensaje enviado'
                  : 'Enviar mensaje'}
              </button>

              {status === 'error' && (
                <p role="alert" className="text-[12px] text-center"
                   style={{ color: 'var(--red)' }}>
                  Error al enviar. Intenta de nuevo o escríbenos directamente.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}