'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
    } catch {
      setStatus('error')
    }
  }

  const inputCls = `w-full px-3 py-2.5 rounded-lg text-sm
    bg-[var(--bg-surface)] border border-[var(--border)]
    text-[var(--text)] placeholder-[var(--text-hint)]
    focus:outline-none focus:border-[var(--accent)]
    transition-colors`

  return (
    <section id="contacto" aria-labelledby="contact-heading"
      className="bg-[var(--bg-surface)] border-t border-[var(--border)]">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Info */}
          <div className="anim">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
              Contacto
            </p>
            <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
              Hablemos
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              ¿Tienes un proyecto en mente? Escríbenos y te respondemos en menos de 24 horas.
            </p>
            {[
              { label: 'Email', value: 'hola@cyco.tech' },
              { label: 'Web',   value: 'cyco.tech' },
              { label: 'País',  value: 'México' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 mb-3">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }}/>
                <span className="text-sm text-[var(--text-muted)]">
                  <span className="font-medium text-[var(--text)]">{item.label}:</span>{' '}{item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Formulario */}
          <div className="anim" style={{ transitionDelay: '0.1s' }}>
            <form onSubmit={submit} noValidate
                  className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] space-y-4">

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">
                    Nombre <span aria-hidden className="text-[var(--accent)]">*</span>
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name"
                         value={form.name} onChange={set('name')}
                         className={inputCls} placeholder="Tu nombre"/>
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">
                    Empresa
                  </label>
                  <input id="company" name="company" type="text" autoComplete="organization"
                         value={form.company} onChange={set('company')}
                         className={inputCls} placeholder="Nombre de tu empresa"/>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">
                  Email <span aria-hidden className="text-[var(--accent)]">*</span>
                </label>
                <input id="email" name="email" type="email" required autoComplete="email"
                       value={form.email} onChange={set('email')}
                       className={inputCls} placeholder="tu@email.com"/>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">
                  Mensaje <span aria-hidden className="text-[var(--accent)]">*</span>
                </label>
                <textarea id="message" name="message" required rows={4}
                          value={form.message} onChange={set('message')}
                          className={`${inputCls} resize-none`}
                          placeholder="¿En qué podemos ayudarte?"/>
              </div>

              <button type="submit" disabled={status === 'loading' || status === 'ok'}
                      className="w-full py-2.5 px-4 rounded-lg text-sm font-medium text-white
                                 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                      style={{ background: 'var(--accent)' }}
                      onMouseEnter={e => { if (status === 'idle') e.currentTarget.style.background = 'var(--accent-hover)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)' }}>
                {status === 'loading' ? 'Enviando…' : status === 'ok' ? '¡Mensaje enviado!' : 'Enviar mensaje'}
              </button>

              {status === 'error' && (
                <p role="alert" className="text-xs text-center" style={{ color: 'var(--accent)' }}>
                  Error al enviar. Por favor intenta de nuevo.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
