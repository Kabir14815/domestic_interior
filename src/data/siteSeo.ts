import type { DomesticDialServiceId } from './domesticDialServices'

/** Production origin — override with VITE_SITE_URL in Netlify env if different. */
export const SITE_URL = (
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
  'https://www.domesticdial.in'
).replace(/\/$/, '')

export const SITE_NAME = 'Domestic Dial Home Solutions'
export const SITE_LEGAL_NAME = 'Domestic Dial Home Solutions LLP'
export const SITE_TAGLINE = 'Architectural Fenestration & Home Solutions'
export const SITE_MOTTO = 'Your Trusted Partner for Quality Home Solutions'
export const SITE_PHONE = '+919255045552'
export const SITE_PHONE_DISPLAY = '92550 45552'
export const SITE_WHATSAPP = '919255045552'
export const SITE_INSTAGRAM = 'https://www.instagram.com/domesticdial2021'
export const SITE_LOCALE = 'en_IN'

export const SERVICE_AREA = [
  'North India',
  'Zirakpur',
  'Gurugram',
  'Chandigarh',
  'Mohali',
  'Panchkula',
  'Kharar',
  'Derabassi',
  'Punjab',
  'Haryana',
  'Chandigarh Tricity',
] as const

export const BUSINESS_ADDRESS = {
  streetAddress: 'Office No. 17, Motia Guildford Square, Aerocity Rd',
  addressLocality: 'Zirakpur',
  addressRegion: 'Punjab',
  postalCode: '140603',
  addressCountry: 'IN',
} as const

export const HOME_SEO = {
  title: 'Domestic Dial Home Solutions | Design to Handover — North India',
  description:
    'Your trusted partner for quality home solutions across North India—architectural fenestration, design & visualization, interiors, engineered systems, shading, and turnkey handover. Call 92550 45552.',
  keywords:
    'Domestic Dial Home Solutions, architectural fenestration, turnkey handover North India, interior design Zirakpur, aluminium windows Chandigarh, 3D visualization, pergola shading',
}

export type ServiceSeo = {
  title: string
  description: string
  keywords: string
  h1?: string
}

export const SERVICE_SEO: Record<DomesticDialServiceId, ServiceSeo> = {
  '3d-visualization': {
    title: '3D Visualization & Interior Renders in Zirakpur, Chandigarh | Domestic Dial',
    description:
      'Photoreal 3D visualization and walkthroughs in Zirakpur & Chandigarh Tricity. Approve layouts, materials, and lighting before build. Book Domestic Dial today.',
    keywords:
      '3D visualization Zirakpur, interior rendering Chandigarh, 3D home design Mohali, VR home walkthrough Panchkula',
  },
  'aluminium-windows': {
    title: 'Aluminium Windows in Zirakpur, Chandigarh & Mohali | Domestic Dial',
    description:
      'Slim aluminium windows measured and installed in Zirakpur, Chandigarh, Mohali & Panchkula. Powder-coated profiles, weather-tight seals. Call Domestic Dial 92550 45552.',
    keywords:
      'aluminium windows Zirakpur, aluminium windows Chandigarh, aluminium sliding windows Mohali, aluminium windows Panchkula',
  },
  'upvc-windows': {
    title: 'uPVC Windows in Zirakpur, Chandigarh & Mohali | Domestic Dial',
    description:
      'Energy-efficient uPVC windows for homes in Zirakpur and Chandigarh Tricity. Low maintenance, noise control, clean sightlines. Domestic Dial installation.',
    keywords:
      'uPVC windows Zirakpur, uPVC windows Chandigarh, UPVC windows Mohali, casement windows Panchkula',
  },
  'glass-partitions': {
    title: 'Glass Partitions in Zirakpur & Chandigarh | Domestic Dial',
    description:
      'Fixed, sliding, and framed glass partitions for homes and offices in Zirakpur, Chandigarh, Mohali & Panchkula. Light-filled zones with acoustic options.',
    keywords:
      'glass partitions Zirakpur, glass partition Chandigarh, office glass partition Mohali, sliding glass partition Panchkula',
  },
  'glass-skylight': {
    title: 'Glass Skylights in Zirakpur, Chandigarh & Mohali | Domestic Dial',
    description:
      'Engineered glass skylights for daylight in Zirakpur and Chandigarh Tricity homes. Weather-tight curb details, UV control, and clean interior finishes.',
    keywords:
      'glass skylight Zirakpur, skylight Chandigarh, dome skylight Mohali, roof glass Panchkula',
  },
  'mosquito-doors': {
    title: 'Mosquito Doors & Screens in Zirakpur & Chandigarh | Domestic Dial',
    description:
      'Pleated and sliding mosquito doors for Zirakpur, Chandigarh, Mohali & Panchkula. Keep insects out without blocking breeze or views. Domestic Dial.',
    keywords:
      'mosquito doors Zirakpur, mosquito net doors Chandigarh, pleated mesh Mohali, insect screens Panchkula',
  },
  'wooden-work': {
    title: 'Wooden Work & Modular Joinery in Zirakpur, Chandigarh | Domestic Dial',
    description:
      'Custom wooden work, panelling, and modular kitchens in Zirakpur & Chandigarh Tricity. Factory-finish joinery with on-site fit. Domestic Dial.',
    keywords:
      'wooden work Zirakpur, modular kitchen Chandigarh, carpentry Mohali, wooden panelling Panchkula',
  },
  'wall-decor-finishes': {
    title: 'Wall Decor & Finishes in Zirakpur, Chandigarh & Mohali | Domestic Dial',
    description:
      'Wall textures, feature cladding, and premium finishes for homes in Zirakpur and Chandigarh Tricity. Sampled on site under real light. Domestic Dial.',
    keywords:
      'wall decor Zirakpur, wall finishes Chandigarh, feature wall Mohali, WPC wall Panchkula',
  },
  'packers-movers': {
    title: 'Turnkey Handover across North India | Domestic Dial Home Solutions',
    description:
      'Site audit, deep cleaning, and ready-to-move key handover for luxury homes across North India. Call Domestic Dial Home Solutions 92550 45552.',
    keywords:
      'turnkey handover North India, site audit Zirakpur, deep cleaning Chandigarh, key handover Mohali, Domestic Dial Home Solutions',
  },
}

export const OUR_WORK_SEO = {
  title: 'Our Work | Interior Projects across North India | Domestic Dial Home Solutions',
  description:
    'See Domestic Dial Home Solutions projects across North India—visualization, windows, joinery, finishes, and turnkey handover.',
  keywords:
    'Domestic Dial Home Solutions projects, interior design portfolio North India, home renovation Zirakpur',
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    alternateName: ['Domestic Dial', 'Domestic Dial Home Solutions LLP'],
    slogan: SITE_MOTTO,
    url: SITE_URL,
    telephone: SITE_PHONE,
    image: absoluteUrl('/domestic-dial-logo.png'),
    logo: absoluteUrl('/domestic-dial-mark.png'),
    description: HOME_SEO.description,
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_ADDRESS,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.6425,
      longitude: 76.8173,
    },
    areaServed: SERVICE_AREA.map((name) => ({
      '@type': 'City',
      name,
    })),
    sameAs: [SITE_INSTAGRAM],
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_PHONE,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Punjabi'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Domestic Dial Services',
      itemListElement: Object.entries(SERVICE_SEO).map(([id, seo], i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: seo.title.split('|')[0].trim(),
          url: absoluteUrl(`/services/${id}`),
          description: seo.description,
          areaServed: SERVICE_AREA.map((name) => ({ '@type': 'City', name })),
          provider: { '@id': `${SITE_URL}/#business` },
        },
      })),
    },
  }
}

export function serviceJsonLd(serviceId: DomesticDialServiceId, serviceName: string) {
  const seo = SERVICE_SEO[serviceId]
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: seo.description,
    url: absoluteUrl(`/services/${serviceId}`),
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      telephone: SITE_PHONE,
      address: {
        '@type': 'PostalAddress',
        ...BUSINESS_ADDRESS,
      },
    },
    areaServed: SERVICE_AREA.map((name) => ({
      '@type': 'City',
      name,
    })),
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}
