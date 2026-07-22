import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Endurecimiento de seguridad (incidente 2026-07-22).
 *
 * Esta app NO define Server Actions ("use server"): el formulario de contacto
 * usa fetch() -> /api/contact. Por tanto, CUALQUIER invocación de Server Action
 * (POST con cabecera `Next-Action`) es abuso y se rechaza. Esto neutraliza la
 * superficie de RSC/Server Actions que fue explotada para RCE.
 *
 * También se rechaza `x-middleware-subrequest`, la cabecera usada por
 * CVE-2025-29927 para saltarse el middleware (mitigado además al actualizar
 * Next.js a >= 15.2.3).
 */
export function middleware(req: NextRequest) {
  if (req.headers.has('next-action')) {
    return new NextResponse('Forbidden', { status: 403 })
  }
  if (req.headers.has('x-middleware-subrequest')) {
    return new NextResponse('Forbidden', { status: 403 })
  }
  return NextResponse.next()
}

export const config = {
  // Se ejecuta en todas las rutas salvo los assets estáticos.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
