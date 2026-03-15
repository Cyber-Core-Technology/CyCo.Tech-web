import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function sanitize(s: string) { return s.replace(/[<>]/g, '').trim().slice(0, 1000) }

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, message } = await req.json()

    if (!name || !email || !message)
      return NextResponse.json({ error: 'Campos requeridos: name, email, message' }, { status: 400 })

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })

    const s = { name: sanitize(name), company: sanitize(company ?? ''), email: sanitize(email), message: sanitize(message) }

    const t = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    await t.sendMail({
      from:    `"CyCo.tech" <${process.env.SMTP_USER}>`,
      to:      process.env.CONTACT_EMAIL,
      replyTo: s.email,
      subject: `[cyco.tech] Mensaje de ${s.name}`,
      html: `<h2 style="color:#8B1A2B">Nuevo mensaje</h2>
             <p><b>Nombre:</b> ${s.name}</p>
             <p><b>Empresa:</b> ${s.company || '—'}</p>
             <p><b>Email:</b> ${s.email}</p>
             <p><b>Mensaje:</b><br/>${s.message}</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
