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
      html: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f6f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f7fb;padding:40px 16px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

  <!-- HEADER -->
  <tr>
    <td style="background:#07080d;border-radius:16px 16px 0 0;padding:32px 32px 28px;">

      <!-- Logo wordmark -->
      <div style="margin-bottom:24px;">
        <span style="font-size:20px;font-weight:700;letter-spacing:-0.5px;line-height:1;">
          <span style="color:#c0374a;">Cy</span><span style="color:#6b7490;">co</span><span style="color:#2d8ab8;">.tech</span>
        </span>
      </div>

      <!-- Badge -->
      <div style="margin-bottom:10px;">
        <span style="display:inline-block;font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;padding:3px 9px;border-radius:4px;background:rgba(192,55,74,0.18);color:#c0374a;">
          Nuevo contacto
        </span>
      </div>

      <!-- Title -->
      <h1 style="margin:0 0 10px;font-size:22px;font-weight:700;color:#e8ecf5;letter-spacing:-0.3px;line-height:1.2;">
        Nuevo mensaje recibido
      </h1>

      <!-- Accent line -->
      <div style="width:32px;height:2px;background:#c0374a;border-radius:2px;"></div>
    </td>
  </tr>

  <!-- BODY -->
  <tr>
    <td style="background:#ffffff;border:1px solid rgba(0,0,0,0.08);border-top:none;border-radius:0 0 16px 16px;padding:32px;">

      <!-- Data table -->
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 2px;font-size:14px;">

        <tr>
          <td style="padding:12px 14px;background:#f6f7fb;border-radius:8px 0 0 0;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9199b0;width:100px;vertical-align:middle;">Nombre</td>
          <td style="padding:12px 14px;background:#f6f7fb;border-radius:0 8px 0 0;font-size:14px;color:#0c0e14;font-weight:500;vertical-align:middle;">${s.name}</td>
        </tr>

        <tr>
          <td style="padding:12px 14px;background:#edeff6;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9199b0;vertical-align:middle;">Empresa</td>
          <td style="padding:12px 14px;background:#edeff6;font-size:14px;color:#0c0e14;font-weight:500;vertical-align:middle;">${s.company || '—'}</td>
        </tr>

        <tr>
          <td style="padding:12px 14px;background:#f6f7fb;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9199b0;vertical-align:middle;">Email</td>
          <td style="padding:12px 14px;background:#f6f7fb;font-size:14px;vertical-align:middle;">
            <a href="mailto:${s.email}" style="color:#1D5A7A;text-decoration:none;font-weight:500;">${s.email}</a>
          </td>
        </tr>

        <tr>
          <td style="padding:12px 14px;background:#edeff6;border-radius:0 0 0 8px;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9199b0;vertical-align:top;">Mensaje</td>
          <td style="padding:12px 14px;background:#edeff6;border-radius:0 0 8px 0;font-size:14px;color:#0c0e14;line-height:1.65;white-space:pre-wrap;vertical-align:top;">${s.message}</td>
        </tr>

      </table>

      <!-- CTA button -->
      <div style="margin-top:28px;text-align:center;">
        <a href="mailto:${s.email}"
           style="display:inline-block;padding:12px 28px;background:#8B1A2B;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;border-radius:10px;letter-spacing:0.2px;">
          Responder a ${s.name}
        </a>
      </div>

      <!-- Footer -->
      <div style="margin-top:28px;padding-top:20px;border-top:1px solid rgba(0,0,0,0.06);text-align:center;">
        <p style="margin:0;font-size:11px;color:#9199b0;letter-spacing:0.3px;">
          Enviado desde&nbsp;<span style="color:#8B1A2B;font-weight:600;">cyco.tech</span>
        </p>
      </div>

    </td>
  </tr>

</table>
</td></tr>
</table>

</body>
</html>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}