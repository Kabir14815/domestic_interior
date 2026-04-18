import type { DomesticDialServiceId } from './domesticDialServices'

/** Unsplash stills; fit=crop keeps layout stable. */
function img(photoId: string, w: number) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=82`
}

/** Stills — IDs chosen for theme; keep in sync with alt text. */
const P = {
  livingWarm: 'photo-1618221195710-dd6b41faaea6',
  livingSofa: 'photo-1600210492486-724fe5c67fb0',
  facadeWindows: 'photo-1600607687939-ce8a6c25118c',
  modernHome: 'photo-1600585154526-990dced4db0d',
  windowDetail: 'photo-1600585154340-be6161a56a0c',
  whiteFrames: 'photo-1589939705384-5185137a7f0f',
  brightInterior: 'photo-1600607688960-e095ff83135c',
  woodSlats: 'photo-1615529328331-f8917597711f',
  glassOffice: 'photo-1497366216548-37526070297c',
  openWorkspace: 'photo-1524758631624-e2822e304c36',
  ceilingLines: 'photo-1600585154363-67eb9e2e2099',
  sunlitRoom: 'photo-1600566753086-00f18fb6b3ea',
  architecture: 'photo-1503387762-592deb58ef4e',
} as const

export type ServiceImage = {
  src: string
  alt: string
}

export type ServicePageContent = {
  id: DomesticDialServiceId
  heroImage: ServiceImage
  galleryImages: [ServiceImage, ServiceImage]
  paragraphs: string[]
}

export const servicePageContent: Record<DomesticDialServiceId, ServicePageContent> = {
  '3d-visualization': {
    id: '3d-visualization',
    heroImage: {
      src: img(P.livingWarm, 1800),
      alt: 'Warm contemporary living room with layered lighting and materials',
    },
    galleryImages: [
      {
        src: img(P.livingSofa, 1200),
        alt: 'Open-plan seating and circulation for layout review',
      },
      {
        src: img(P.windowDetail, 1200),
        alt: 'Finishes and glazing studied under natural light',
      },
    ],
    paragraphs: [
      'Photoreal renders and walkthrough stills let you judge proportion, circulation, and mood before site work begins. We align views with your approval milestones so decisions stay traceable.',
      'Lighting scenarios—day, evening, and task—can be compared quickly to judge finishes and colour temperature. That reduces costly changes after mock-ups or material orders are locked.',
      'Deliverables can include stills, elevation studies, and views keyed to your floor plans so everyone references the same version.',
    ],
  },
  'aluminium-windows': {
    id: 'aluminium-windows',
    heroImage: {
      src: img(P.facadeWindows, 1800),
      alt: 'Modern facade with large aluminium-framed glazing',
    },
    galleryImages: [
      {
        src: img(P.modernHome, 1200),
        alt: 'Slim profiles and glass fields on a contemporary elevation',
      },
      {
        src: img(P.architecture, 1200),
        alt: 'Window rhythm and shadow lines on the exterior',
      },
    ],
    paragraphs: [
      'Powder-coated aluminium gives slim sightlines with strong weather performance. We coordinate shop drawings with structural allowances so frames, brackets, and seals fit the first time.',
      'Hardware, drainage, and safety glazing are specified to match wind load and acoustic targets for your floor. Finishes are sampled on site under real light before batch production.',
      'Installation is sequenced with waterproofing and interior trims so silicone lines stay even and the facade reads crisp from both inside and out.',
    ],
  },
  'upvc-windows': {
    id: 'upvc-windows',
    heroImage: {
      src: img(P.whiteFrames, 1800),
      alt: 'Interior with white window frames and soft daylight',
    },
    galleryImages: [
      {
        src: img(P.brightInterior, 1200),
        alt: 'Energy-efficient glazing with clean sightlines indoors',
      },
      {
        src: img(P.woodSlats, 1200),
        alt: 'Window wall paired with joinery for a calm interior palette',
      },
    ],
    paragraphs: [
      'Multi-chamber uPVC frames with low-e glazing cut heat gain and noise without heavy maintenance. We help pick opening types for ventilation paths that match your furniture plan.',
      'Colour foils and mesh options are chosen for UV stability and cleaning effort in your environment. Hardware cycles are matched to daily use so operation stays light over the years.',
      'Site checks verify plumb, square, and seal compression after install, with touch-up plans for interior architraves.',
    ],
  },
  'glass-partitions': {
    id: 'glass-partitions',
    heroImage: {
      src: img(P.glassOffice, 1800),
      alt: 'Glass partitions in a bright office with depth and reflections',
    },
    galleryImages: [
      {
        src: img(P.openWorkspace, 1200),
        alt: 'Open workspace with glass zones for acoustic control',
      },
      {
        src: img(P.ceilingLines, 1200),
        alt: 'Tracks, head detail, and minimal joints in a linear plan',
      },
    ],
    paragraphs: [
      'Fixed, sliding, or framed partitions carve zones while keeping daylight and visual connection. We detail head tracks, floor guides, and acoustic seals for the STC you need.',
      'Switchable or tinted options can be mocked in previews so you can balance privacy with openness in meeting rooms or studios.',
      'Coordination with MEP keeps diffusers, sensors, and power off the glass joints you want kept minimal.',
    ],
  },
  'glass-skylight': {
    id: 'glass-skylight',
    heroImage: {
      src: img(P.sunlitRoom, 1800),
      alt: 'Sunlit interior with strong ceiling light and soft walls',
    },
    galleryImages: [
      {
        src: img(P.livingWarm, 1200),
        alt: 'Daylight washing interior surfaces from above',
      },
      {
        src: img(P.modernHome, 1200),
        alt: 'Ceiling plane and volume for skylight placement studies',
      },
    ],
    paragraphs: [
      'Daylighting sketches show how sun paths hit key surfaces across seasons. We engineer curb details, flashing, and condensation management for your roof build-up.',
      'Laminated or insulated units are chosen for safety, UV control, and thermal targets. Motorised venting or fixed options are priced with maintenance access in mind.',
      'Interior finishes around the well are coordinated so trim rings, blinds, and paint lines stay crisp.',
    ],
  },
  'mosquito-doors': {
    id: 'mosquito-doors',
    heroImage: {
      src: img(P.modernHome, 1800),
      alt: 'Glass doors opening to a terrace — indoor–outdoor threshold',
    },
    galleryImages: [
      {
        src: img(P.whiteFrames, 1200),
        alt: 'Door opening with clear sightlines for screen or mesh integration',
      },
      {
        src: img(P.facadeWindows, 1200),
        alt: 'Large openings that need insect protection without blocking breeze',
      },
    ],
    paragraphs: [
      'Pleated, sliding, or hinged screens keep insects out while preserving airflow and views. We measure for even gaps so seals work without scraping.',
      'Pet-resistant meshes and low-threshold options are available where toddlers or wheelchairs cross often.',
      'Colour-matched profiles sit quietly against your joinery so the screen reads as part of the opening, not an add-on.',
    ],
  },
  'wooden-work': {
    id: 'wooden-work',
    heroImage: {
      src: img(P.openWorkspace, 1800),
      alt: 'Rich wood surfaces and built-in joinery in a living space',
    },
    galleryImages: [
      {
        src: img(P.woodSlats, 1200),
        alt: 'Vertical timber slats and grain direction for panelling',
      },
      {
        src: img(P.architecture, 1200),
        alt: 'Wood tones balanced with architecture and light',
      },
    ],
    paragraphs: [
      'Joinery, panelling, and built-ins are detailed for grain continuity, expansion, and hardware mortises. Finishes are built in controlled coats so colour reads evenly on large surfaces.',
      'We align veneer sequences with lighting so figure doesn’t fight the room. Soft-close and push-touch hardware is set to comfortable heights for daily use.',
      'Site protection and final touch-up plans keep corners sharp through paint and handover.',
    ],
  },
  'wall-decor-finishes': {
    id: 'wall-decor-finishes',
    heroImage: {
      src: img(P.windowDetail, 1800),
      alt: 'Textured walls and soft neutrals with feature lighting',
    },
    galleryImages: [
      {
        src: img(P.livingSofa, 1200),
        alt: 'Wall treatments behind seating — texture and sheen',
      },
      {
        src: img(P.glassOffice, 1200),
        alt: 'Feature surfaces and contrast in a finished room',
      },
    ],
    paragraphs: [
      'Textures, paint systems, wallpaper, and feature cladding are sampled at scale on site boards. We sequence trades so critical walls stay clean for final layers.',
      'Accent lighting is coordinated with relief and sheen so highlights land where you expect in the evening.',
      'Touch-up kits and care notes are handed over so the finish survives move-in and future maintenance.',
    ],
  },
}

export function getServicePageContent(id: string): ServicePageContent | undefined {
  return servicePageContent[id as DomesticDialServiceId]
}
