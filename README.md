# CyCo.tech — Sitio Web Corporativo

Sitio web oficial de **Cyber Core Technology, S.A.S.** — empresa mexicana especializada en software empresarial y ciberseguridad.

**Live:** [cyco.tech](https://cyco.tech)

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Runtime:** Node.js 20
- **Contenedor:** Docker (multi-stage build)
- **Proxy:** Nginx Proxy Manager
- **CI/CD:** GitHub Actions → GHCR → SSH deploy

---

## Estructura
```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts   # Formulario de contacto (SMTP)
│   │   └── health/route.ts    # Health check
│   ├── layout.tsx             # Metadata SEO + ThemeProvider
│   ├── page.tsx               # Landing one-page
│   ├── sitemap.ts             # Sitemap automático
│   └── robots.ts              # Robots.txt
├── components/
│   ├── layout/                # Navbar, Footer, ThemeToggle
│   └── sections/              # Hero, About, Services, Cases, Contact
├── context/
│   └── ThemeContext.tsx       # Dark / Light mode
├── hooks/
│   └── useScrollAnimation.ts  # Animaciones on scroll
└── lib/
    └── data.ts                # Todo el contenido del sitio
```

---

## Desarrollo local
```bash
# 1. Clonar
git clone git@github.com:Cyber-Core-Technology/CyCo.Tech-web.git
cd CyCo.Tech-web

# 2. Variables de entorno
cp .env.example .env.local
# Edita .env.local con tus valores

# 3. Instalar dependencias
npm install

# 4. Levantar en desarrollo
npm run dev
# → http://localhost:3000
```

---

## Variables de entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio |
| `CONTACT_EMAIL` | Correo donde llegan los mensajes |
| `SMTP_HOST` | Host del servidor SMTP |
| `SMTP_PORT` | Puerto SMTP (465 con SSL) |
| `SMTP_USER` | Usuario SMTP |
| `SMTP_PASS` | Contraseña SMTP |

---

## Docker
```bash
# Build local
docker build -t cycotech-web:local .

# Levantar
docker compose up -d

# Logs
docker logs cycotech-web -f
```

> El contenedor no expone puertos al host. El acceso se gestiona desde Nginx Proxy Manager en la red `cycotech_net`.

---

## CI/CD

Cada push a `main` dispara automáticamente:
```
push → Lint & Typecheck → Build imagen → Push GHCR → Deploy SSH
```

### Secrets requeridos en GitHub

| Secret | Descripción |
|---|---|
| `SSH_HOST` | IP del servidor |
| `SSH_USER` | Usuario SSH |
| `SSH_PRIVATE_KEY` | Llave privada SSH |
| `SSH_PORT` | Puerto SSH |
| `DEPLOY_PATH` | Ruta del proyecto en el servidor |

---

## Comandos útiles
```bash
# Verificar tipos
npm run typecheck

# Lint
npm run lint

# Build producción
npm run build

# Ver estado del contenedor
docker ps
docker logs cycotech-web --tail 50
```

---

## Licencia

Propietario — © 2025 Cyber Core Technology, S.A.S. Todos los derechos reservados.
