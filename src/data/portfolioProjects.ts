/**
 * Portfolio grid + detail pages for /our-work/:projectId
 */
export type PortfolioProject = {
  id: string
  src: string
  title: string
  category: string
  year?: string
  location?: string
  /** Short line used on the featured strip when present */
  lead?: string
  /** Longer copy on the project detail page */
  paragraphs: string[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'featured-lounge',
    src: '/portfolio/images/render-lounge.png',
    title: 'Lounge study',
    category: 'Concept',
    year: '2025',
    location: 'New Delhi',
    lead: 'Light, proportion, and a restrained palette—concept work that sets the tone for full execution.',
    paragraphs: [
      'Light, proportion, and a restrained palette—concept work that sets the tone for full execution. This study locks seating, circulation, and ceiling rhythm before joinery and finishes are specified in detail.',
      'We use stills like this to align clients and site teams on mood and scale. The same frame becomes a reference for lighting layouts, curtain stacks, and feature walls as the project moves from render to site.',
    ],
  },
  {
    id: 'hero-elevation',
    src: '/portfolio/images/hero-elevation.jpg',
    title: 'Signature residence',
    category: 'Residential',
    paragraphs: [
      'A multi-storey residential elevation balancing wood texture, glazing, and depth of reveal. The composition reads clearly at dusk when interior light defines the rhythm of openings.',
      'Facade studies like this inform waterproofing, shading, and aluminium or uPVC window schedules so the built result matches the intent of the concept imagery.',
    ],
  },
  {
    id: 'render-dining',
    src: '/portfolio/images/render-dining.png',
    title: 'Dining light',
    category: 'Concept',
    paragraphs: [
      'A concept view focused on how daylight and artificial light meet over the dining zone. Glass partitions keep sightlines open while defining acoustic pockets for conversation.',
      'Used early in design, this frame helps choose finishes and fixture temperatures before mock-ups, reducing changes during execution.',
    ],
  },
  {
    id: 'render-foyer',
    src: '/portfolio/images/render-foyer.png',
    title: 'Arrival sequence',
    category: 'Concept',
    paragraphs: [
      'The arrival sequence sets expectations: material change, ceiling height, and the first glimpse of the plan beyond. Colour and glass here are tuned for calm transition from outside in.',
      'We coordinate door hardware, thresholds, and lighting scenes so the real foyer matches the designed first impression.',
    ],
  },
  {
    id: 'render-kitchen',
    src: '/portfolio/images/render-kitchen.png',
    title: 'Kitchen rhythm',
    category: 'Joinery',
    paragraphs: [
      'Kitchen rhythm is about module size, handle lines, and how tall units meet the ceiling. This study aligns appliance gaps with joinery panels for a flush, readable elevation.',
      'From here we move to shop drawings, services coordination, and site checks at critical heights for counters and splashbacks.',
    ],
  },
  {
    id: 'warm-01',
    src: '/portfolio/images/project-warm-01.jpg',
    title: 'Layered living',
    category: 'Residential',
    paragraphs: [
      'Layered seating, rugs, and lighting create zones without walls. Warm neutrals let timber and brass accents read clearly without visual noise.',
      'Delivered as a full interior package: loose furniture layout, fixed joinery, and finishing schedules tied to a single palette.',
    ],
  },
  {
    id: 'warm-02',
    src: '/portfolio/images/project-warm-02.jpg',
    title: 'Warm minimal',
    category: 'Residential',
    paragraphs: [
      'Minimal doesn’t mean empty—it means every surface and joint is intentional. Soft daylight and a single feature wall anchor the room.',
      'We document junctions between floor, skirting, and joinery so site teams achieve the same crisp lines you see in photography.',
    ],
  },
  {
    id: 'warm-03',
    src: '/portfolio/images/project-warm-03.jpg',
    title: 'Quiet detail',
    category: 'Residential',
    paragraphs: [
      'Quiet detail is in the skirting curve, the door architrave, and how paint meets timber. This room keeps hardware understated so grain and light lead.',
      'Our site visits focus on these junctions during the final weeks so touch-up and alignment stay controlled before handover.',
    ],
  },
  {
    id: 'warm-04',
    src: '/portfolio/images/project-warm-04.jpg',
    title: 'Evening glow',
    category: 'Residential',
    paragraphs: [
      'Evening scenes test layered lighting: cove, floor lamps, and accents. We balance colour temperature so the room feels warm without muddying art or wood tones.',
      'Lighting layouts from this stage feed electrical drawings and switching groups for daily use and entertaining.',
    ],
  },
  {
    id: 'detail-01',
    src: '/portfolio/images/project-detail-01.jpg',
    title: 'Craft & texture',
    category: 'Residential',
    paragraphs: [
      'Craft and texture show in stone, timber, and woven materials chosen for touch and durability. Large-format surfaces need careful substrate and movement planning.',
      'We sample materials at scale under project lighting so veining and colour variation are approved before supply.',
    ],
  },
  {
    id: 'detail-02',
    src: '/portfolio/images/project-detail-02.jpg',
    title: 'Spatial flow',
    category: 'Residential',
    paragraphs: [
      'Spatial flow connects living, dining, and circulation without barriers. Sightlines are cleared for safety and generosity while storage is tucked into joinery walls.',
      'Furniture plans and electrical layouts are iterated together so outlets and floor boxes don’t fight seating arrangements.',
    ],
  },
  {
    id: 'detail-03',
    src: '/portfolio/images/project-detail-03.jpg',
    title: 'Tailored joinery',
    category: 'Joinery',
    paragraphs: [
      'Tailored joinery wraps services and storage in one language of panel lines and reveals. Internal layouts are set for how you actually store and use the room.',
      'Shop drawings include hinge directions, grommet positions, and finish transitions for factory and site sign-off.',
    ],
  },
  {
    id: 'detail-04',
    src: '/portfolio/images/project-detail-04.jpg',
    title: 'Light as material',
    category: 'Residential',
    paragraphs: [
      'When light is treated as a material, we model reflectance and shadow: ceiling coves, niches, and art walls get dedicated scenes.',
      'Coordination with façade and skylight options ensures daytime behaviour matches the evening concept you approve in renders.',
    ],
  },
  {
    id: 'classic-01',
    src: '/portfolio/images/project-classic-01.jpg',
    title: 'Timeless lines',
    category: 'Residential',
    paragraphs: [
      'Timeless lines rely on symmetry, proportion, and restrained moulding profiles. This interior avoids trend-led colours in favour of enduring surfaces.',
      'Detailing extends to ironmongery and bathroom layouts so the classical language stays consistent room to room.',
    ],
  },
  {
    id: 'recent-01',
    src: '/portfolio/images/project-recent-01.jpg',
    title: 'Refined palette',
    category: 'Residential',
    paragraphs: [
      'A refined palette ties wall, floor, and upholstery in a narrow band of warm greys and naturals. Contrast comes from texture rather than strong hue.',
      'Paint schedules list system, finish, and lighting conditions for each elevation so application on site stays uniform.',
    ],
  },
  {
    id: 'archive-01',
    src: '/portfolio/images/project-archive-01.jpg',
    title: 'Courtyard edge',
    category: 'Residential',
    paragraphs: [
      'Courtyard-edge living blurs inside and out with careful sill heights, drainage, and insect screens where needed. Flooring and ceiling lines extend the eye to greenery.',
      'We align door types—sliding, folding, or fixed glass—with wind-driven rain strategy and interior traffic.',
    ],
  },
  {
    id: 'archive-02',
    src: '/portfolio/images/project-archive-02.jpg',
    title: 'Garden room',
    category: 'Residential',
    paragraphs: [
      'Garden rooms ask for generous glass and controlled solar gain. Finishes are chosen to work in both bright sun and shaded evening use.',
      'Planting, irrigation, and exterior lighting are coordinated so the interior view stays composed in every season.',
    ],
  },
]

export function getPortfolioProject(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.id === id)
}
