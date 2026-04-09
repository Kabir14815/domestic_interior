/**
 * Official Domestic Dial service list (flyer). Order and titles match client artwork.
 */
export const domesticDialServices = [
  {
    id: '3d-visualization',
    title: '3D Visualization',
    blurb: 'Walk through layouts, materials, and lighting before anything is built.',
  },
  {
    id: 'aluminium-windows',
    title: "Aluminium Window's",
    blurb: 'Slim profiles and durable finishes, measured and installed to spec.',
  },
  {
    id: 'upvc-windows',
    title: 'Upvc Windows',
    blurb: 'Energy-smart glazing with low maintenance and clean sightlines.',
  },
  {
    id: 'glass-partitions',
    title: 'Glass Partitions',
    blurb: 'Divide space with light—fixed, sliding, or framed to your floor plan.',
  },
  {
    id: 'glass-skylight',
    title: 'Glass sky light',
    blurb: 'Bring daylight deep into the plan with engineered, weather-tight solutions.',
  },
  {
    id: 'mosquito-doors',
    title: 'Mosquito Doors',
    blurb: 'Screens and doors that seal out pests without blocking breeze or view.',
  },
  {
    id: 'wooden-work',
    title: 'Wooden work',
    blurb: 'Joinery, panelling, and carpentry finished for long-term wear.',
  },
  {
    id: 'wall-decor-finishes',
    title: 'Wall decor & finishes',
    blurb: 'Textures, treatments, and final layers that complete the room.',
  },
] as const

export type DomesticDialServiceId = (typeof domesticDialServices)[number]['id']
