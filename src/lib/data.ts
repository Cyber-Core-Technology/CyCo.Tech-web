export const SITE = {
  name:        'CyCo.tech',
  legalName:   'Cyber Core Technology, S.A.S.',
  slogan:      'Seguridad en cada byte.',
  description: 'Empresa mexicana de tecnología especializada en software empresarial y ciberseguridad para PyMEs.',
  url:         process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cyco.tech',
  email:       'hola@cyco.tech',
  location:    'México',
  year:        2025,
  social: {
    linkedin: 'https://linkedin.com/company/cyco-tech',
    github:   'https://github.com/cyco-tech',
  },
}

export const NAV_LINKS = [
  { label: 'Nosotros',       href: '#nosotros' },
  { label: 'Servicios',      href: '#servicios' },
  { label: 'Casos de éxito', href: '#casos' },
  { label: 'Contacto',       href: '#contacto' },
]

export const SERVICES = [
  {
    slug:        'pycore-erp',
    tag:         'SaaS',
    title:       'PyCore ERP',
    description: 'Sistema ERP en la nube para gestión integral: ventas, inventario, facturación CFDI y reportes. Sin instalación.',
  },
  {
    slug:        'ciberseguridad',
    tag:         'Consultoría',
    title:       'Ciberseguridad',
    description: 'Diagnóstico de vulnerabilidades, auditorías de seguridad y estrategia de protección para empresas sin área de TI.',
  },
  {
    slug:        'desarrollo',
    tag:         'Desarrollo',
    title:       'Software a medida',
    description: 'Aplicaciones y sistemas en Python y tecnologías cloud, adaptados exactamente a tu proceso de negocio.',
  },
  {
    slug:        'transformacion',
    tag:         'Estrategia',
    title:       'Transformación digital',
    description: 'Migración de procesos al entorno digital: automatización, integración de herramientas y capacitación de equipos.',
  },
]

export const PILLARS = [
  {
    title:       'Tecnología accesible',
    description: 'Herramientas de clase mundial a precios que las PyMEs pueden pagar.',
  },
  {
    title:       'Seguridad de fábrica',
    description: 'La ciberseguridad está integrada en el diseño de cada producto y servicio.',
  },
  {
    title:       'Hecho en México',
    description: 'Soporte en español, CFDI nativo y cumplimiento con regulaciones fiscales mexicanas.',
  },
]

export const CASES = [
  {
    industry: 'Manufactura',
    service:  'PyCore ERP',
    title:    'Digitalización de inventario',
    body:     'PyME con 45 empleados migró de hojas de cálculo a gestión centralizada en tiempo real.',
    result:   '↓ 60% en tiempo de reportes de inventario',
  },
  {
    industry: 'Servicios financieros',
    service:  'Ciberseguridad',
    title:    'Auditoría de seguridad',
    body:     'Despacho contable identificó y resolvió 12 vulnerabilidades críticas en su infraestructura.',
    result:   '0 incidentes en los 8 meses siguientes',
  },
]

export const WHY_US = [
  { stat: 'Python',  label: 'Stack moderno y escalable' },
  { stat: 'CFDI',    label: 'Cumplimiento SAT integrado' },
  { stat: '< 24h',   label: 'Tiempo de respuesta soporte' },
  { stat: '100% MX', label: 'Empresa mexicana' },
  { stat: 'SaaS',    label: 'Sin instalación ni licencias' },
  { stat: 'RESICO',  label: 'Régimen fiscal simplificado' },
]
