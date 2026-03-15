export const SITE = {
  name:        'CyCo.tech',
  legalName:   'Cyber Core Technology, S.A.S.',
  slogan:      'Seguridad en cada byte.',
  description: 'Empresa mexicana de tecnología especializada en software empresarial y ciberseguridad para empresas que quieren crecer con tecnología moderna.',
  url:         process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cyco.tech',
  email:       'scorpion@cyco.tech',
  location:    'México',
  year:        2026,
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
    description: 'Sistema ERP en la nube para gestión integral: ventas, inventario, facturación y reportes. Sin instalación, sin complicaciones.',
  },
  {
    slug:        'ciberseguridad',
    tag:         'Consultoría',
    title:       'Ciberseguridad',
    description: 'Diagnóstico de vulnerabilidades, auditorías y estrategia de protección adaptada al tamaño y necesidades de tu empresa.',
  },
  {
    slug:        'desarrollo',
    tag:         'Desarrollo',
    title:       'Software a medida',
    description: 'Aplicaciones y sistemas construidos con tecnologías modernas, adaptados exactamente a tu proceso de negocio.',
  },
  {
    slug:        'transformacion',
    tag:         'Estrategia',
    title:       'Transformación digital',
    description: 'Acompañamiento para migrar tus procesos al entorno digital: automatización, integración de herramientas y capacitación.',
  },
]

export const PILLARS = [
  {
    title:       'Tecnología accesible',
    description: 'Soluciones de alto nivel diseñadas para que cualquier empresa pueda adoptarlas sin importar su tamaño.',
  },
  {
    title:       'Seguridad desde el diseño',
    description: 'La ciberseguridad no es un extra — está integrada desde la primera línea de código en cada proyecto.',
  },
  {
    title:       'Soporte local',
    description: 'Equipo mexicano, atención en español y respuesta garantizada en menos de 24 horas.',
  },
]

export const CASES = [
  {
    industry: 'Manufactura',
    service:  'PyCore ERP',
    title:    'Digitalización de inventario',
    body:     'PyME con 45 empleados migró de hojas de cálculo a gestión centralizada en tiempo real con trazabilidad completa.',
    result:   '60% menos tiempo en reportes',
  },
  {
    industry: 'Servicios financieros',
    service:  'Ciberseguridad',
    title:    'Auditoría de seguridad',
    body:     'Despacho contable identificó y resolvió vulnerabilidades críticas en su infraestructura interna.',
    result:   'Cero incidentes en 8 meses',
  },
]