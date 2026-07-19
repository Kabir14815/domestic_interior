import type { DomesticDialServiceId } from './domesticDialServices'

export type ServicePillarItem = {
  title: string
  description: string
  linkedServiceId?: DomesticDialServiceId
}

export type ServicePillar = {
  id: string
  title: string
  shortTitle: string
  cardLabel: string
  blurb: string
  externalUrl?: string
  image: string
  imageAlt: string
  items: ServicePillarItem[]
}

export const servicePillars: ServicePillar[] = [
  {
    id: 'design-visualization',
    title: 'Design & Visualization',
    shortTitle: 'Design',
    cardLabel: 'Design & Visualization',
    blurb: 'Layouts, 3D renders, and material boards before work begins.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Luxury living room interior visualization',
    items: [
      {
        title: '2D Layouts & Space Planning',
        description: 'Accurate, customized layouts designed to make the best use of every space.',
        linkedServiceId: '3d-visualization',
      },
      {
        title: '3D Interior & Exterior Renderings',
        description:
          'High-quality 3D visuals that show how your home or commercial space will look before work begins.',
        linkedServiceId: '3d-visualization',
      },
      {
        title: 'Material Selection & Moodboards',
        description:
          'A complete visual guide to wood, finishes, fabrication metals, fabrics, and colour combinations.',
        linkedServiceId: '3d-visualization',
      },
    ],
  },
  {
    id: 'interiors-craftsmanship',
    title: 'Interiors (Premium Craftsmanship)',
    shortTitle: 'Interiors',
    cardLabel: 'Interiors & Craftsmanship',
    blurb: 'Bespoke joinery, modular kitchens, and premium finishes.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Premium modular kitchen craftsmanship',
    items: [
      {
        title: 'All Wooden Works',
        description: 'Premium carpentry and fully customized woodwork for every room.',
        linkedServiceId: 'wooden-work',
      },
      {
        title: 'Modular Kitchens & Wardrobes',
        description: 'Modern, space-efficient modular kitchens, walk-in closets, and wardrobes.',
        linkedServiceId: 'wooden-work',
      },
      {
        title: 'Luxury Living & Commercial Interiors',
        description:
          'False ceilings, wall panelling, and premium décor solutions for villas, apartments, and offices.',
        linkedServiceId: 'wall-decor-finishes',
      },
    ],
  },
  {
    id: 'engineered-systems',
    title: 'Engineered Systems',
    shortTitle: 'Systems',
    cardLabel: 'Engineered Systems',
    blurb: 'Windows, screens, glass partitions, and precision metalwork.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Engineered glass office partition system',
    items: [
      {
        title: 'UPVC & Aluminium Doors & Windows',
        description: 'High-end sliding windows and sound-insulated glazing systems.',
        linkedServiceId: 'aluminium-windows',
      },
      {
        title: 'Foldable Mosquito Screens',
        description: 'Premium mosquito screens for sliding and custom-made doors and windows.',
        linkedServiceId: 'mosquito-doors',
      },
      {
        title: 'Foldable Honeycomb Partitions',
        description:
          'Sleek, modern honeycomb (plissé) collapsible systems that divide spaces intelligently.',
        linkedServiceId: 'glass-partitions',
      },
      {
        title: 'Architectural Glass Partitions',
        description:
          'Toughened-glass solutions for shower cubicles, office cabins, balconies, and interior partitions.',
        linkedServiceId: 'glass-partitions',
      },
      {
        title: 'Premium MS & SS Railings',
        description:
          'Premium mild-steel and stainless-steel railings with precision laser-cut designs.',
        linkedServiceId: 'glass-skylight',
      },
    ],
  },
  {
    id: 'shading-solutions',
    title: 'Shading Solutions',
    shortTitle: 'Shading',
    cardLabel: 'Shading Solutions',
    blurb: 'Pergolas, tensile shades, and balcony blinds outdoors.',
    externalUrl: 'https://chhayashading.com/',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Outdoor pergola shading on a luxury terrace',
    items: [
      {
        title: 'Motorized & Retractable Pergolas',
        description: 'Remote-controlled aluminium pergolas and retractable roof systems.',
      },
      {
        title: 'Tensile Structures & Gazebos',
        description: 'Designer tensile shades for rooftops, cafés, gardens, and villa lawns.',
      },
      {
        title: 'Awnings & Vertical Balcony Blinds',
        description: 'Custom retractable shades and outdoor blinds for protection from sun and rain.',
      },
    ],
  },
  {
    id: 'turnkey-relocation',
    title: 'Turnkey Relocation',
    shortTitle: 'Relocation',
    cardLabel: 'Turnkey Relocation',
    blurb: 'Pack, move, deep-clean, and hand over the keys.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Premium home ready for turnkey relocation handover',
    items: [
      {
        title: 'Turnkey Project Management',
        description: 'Complete, hassle-free project management covering materials, labour, and execution.',
      },
      {
        title: 'Hassle-Free Packing & Moving',
        description: 'Safe packing and careful relocation of your belongings into your completed space.',
        linkedServiceId: 'packers-movers',
      },
      {
        title: 'Deep Cleaning & Final Handover',
        description: 'Professional deep cleaning and a move-in-ready final handover.',
        linkedServiceId: 'packers-movers',
      },
    ],
  },
]

export type ServicePillarId = (typeof servicePillars)[number]['id']

export function getServicePillar(id: string): ServicePillar | undefined {
  return servicePillars.find((p) => p.id === id)
}
