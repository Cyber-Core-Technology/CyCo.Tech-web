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

    const s = {
      name:    sanitize(name),
      company: sanitize(company ?? ''),
      email:   sanitize(email),
      message: sanitize(message),
    }

    const port   = Number(process.env.SMTP_PORT ?? 587)
    const secure = port === 465

    const t = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    await t.sendMail({
      from:    `"CyCo.tech" <${process.env.SMTP_USER}>`,
      to:      process.env.CONTACT_EMAIL,
      replyTo: s.email,
      subject: `[cyco.tech] Mensaje de ${s.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto">
          <h2 style="color:#8B1A2B;margin-bottom:16px">Nuevo mensaje desde cyco.tech</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr>
              <td style="padding:8px 12px;background:#f5f5f5;font-weight:600;width:100px">Nombre</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee">${s.name}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Empresa</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee">${s.company || '—'}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Email</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee">
                <a href="mailto:${s.email}" style="color:#1D5A7A">${s.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#f5f5f5;font-weight:600;vertical-align:top">Mensaje</td>
              <td style="padding:8px 12px;white-space:pre-wrap">${s.message}</td>
            </tr>
          </table>
          <p style="margin-top:24px;font-size:12px;color:#999">
            Enviado desde cyco.tech
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}