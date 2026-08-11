import type { DomesticDialServiceId } from './domesticDialServices'

export type ServicePillarStep = {
  title: string
  description: string
  bullets?: string[]
}

export type ServicePillarGalleryImage = {
  src: string
  alt: string
}

export type ServicePillarItem = {
  id: string
  title: string
  description: string
  linkedServiceId?: DomesticDialServiceId
  /** Optional hero image for the item detail page */
  image?: string
  imageAlt?: string
  /** Optional photo gallery on the item detail page */
  galleryImages?: ServicePillarGalleryImage[]
  /** Optional long-form content shown on the item detail page */
  tagline?: string
  highlight?: string
  intro?: string
  processTitle?: string
  steps?: ServicePillarStep[]
  offeringsTitle?: string
  offeringsPoints?: string[]
  whyTitle?: string
  whyPoints?: string[]
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
    image: '/services/interiors-craftsmanship.jpg?v=swap1',
    imageAlt: 'Domestic Dial design visualization from 2D floor plans to 3D interior and exterior renders',
    items: [
      {
        id: '2d-layouts-space-planning',
        title: '2D Layouts & Space Planning',
        description: 'Accurate, customized layouts designed to make the best use of every space.',
        image: '/services/2d-layouts-space-planning.jpg',
        imageAlt: '2D layouts and space planning with floor plans, optimized flow, and tailored design',
        tagline: 'The Foundation of Perfect Interiors',
        highlight:
          'Starting interiors without proper planning leads to wasted budget, space, and time.',
        intro:
          'At Domestic Dial, we begin by analyzing every single square foot of your space alongside your lifestyle and requirements. This ensures your home or commercial area is not only aesthetically pleasing but also 100% practical and functional.',
        processTitle: 'Step-by-Step Planning Process',
        steps: [
          {
            title: 'Step 1: On-Site Laser Measurement',
            description:
              'Our expert team uses precision laser measuring tools to record 100% accurate dimensions of every corner, wall, window, door, and structural column on your site.',
          },
          {
            title: 'Step 2: Space Zoning & Traffic Flow',
            description:
              'We design intelligent walking passages and clearance zones to maintain smooth movement throughout the property, ensuring the space never feels cramped or cluttered.',
          },
          {
            title: 'Step 3: Furniture & Ergonomic Layout',
            description:
              'We strategically place beds, sofas, wardrobes, and vanity units to scale. This guarantees that all doors, drawers, and cabinet shutters open effortlessly without any obstructions.',
          },
          {
            title: 'Step 4: Electrical, Plumbing & HVAC Layouts',
            description:
              'We create detailed technical drawings for electricians, plumbers, and contractors:',
            bullets: [
              'Electrical: Switchboard placements, TV wall points, AC piping routes, and magnetic track/profile lighting points.',
              'Plumbing: Precise water supply and drainage points for sinks, geysers, and shower areas.',
            ],
          },
          {
            title: 'Step 5: Architectural Civil Modifications',
            description:
              'If your layout requires removing non-structural walls to expand spaces or adding partition walls for privacy, we prepare exact civil marking drawings.',
          },
        ],
        whyTitle: 'Why Choose Domestic Dial for 2D Planning?',
        whyPoints: [
          'Zero On-Site Re-Work: Having everything mapped out in advance prevents costly demolitions and mid-project changes.',
          '100% Space Utilization: We optimize every inch of compact apartments and large floor plates alike.',
        ],
      },
      {
        id: '3d-interior-exterior-renderings',
        title: '3D Interior & Exterior Renderings',
        description:
          'High-quality 3D visuals that show how your home or commercial space will look before work begins.',
        linkedServiceId: '3d-visualization',
        image: '/services/3d-interior-exterior-renderings.jpg',
        imageAlt: '3D interior and exterior renderings with photo-realistic quality for homes and outdoor spaces',
        tagline: 'Visualize Your Dream Space Before Construction Begins',
        highlight:
          "Don't rely on imagination or rough sketches. See your finished home in high definition before spending a single Rupee on materials.",
        intro:
          'At Domestic Dial, we turn 2D floor plans into photo-realistic 3D visual models. Experience the exact colors, textures, lighting, and furniture placement of your future home or commercial space—eliminating guesswork and ensuring complete satisfaction.',
        processTitle: 'Our Step-by-Step 3D Visualization Process',
        steps: [
          {
            title: 'Step 1: Concept & Material Mood Boarding',
            description:
              'We discuss your design preferences, color palettes, preferred finishes (veneer, acrylic, PU, natural stone), and lighting styles to establish the project’s visual direction.',
          },
          {
            title: 'Step 2: 3D Spatial Modeling',
            description:
              'Based on our precision 2D floor plans, we build an exact 3D digital model of your rooms, structure, and architectural features down to the exact millimeter.',
          },
          {
            title: 'Step 3: Material, Texture & Lighting Application',
            description:
              'We apply real-world textures—from high-gloss kitchen acrylics and marble flooring to ambient ceiling LED strips and exterior wall cladding—simulating natural daylight and evening lighting conditions.',
          },
          {
            title: 'Step 4: High-Definition Photo-Realistic Rendering',
            description:
              'We generate ultra-crisp, high-resolution 3D images from multiple camera angles, giving you a comprehensive view of how every corner connects visually.',
          },
          {
            title: 'Step 5: Client Review & Material Finalization',
            description:
              'You review the renders and request tweaks to finishes or lighting. Once approved, these renders serve as the master reference guide for our site execution team.',
          },
        ],
        offeringsTitle: 'What We Render',
        offeringsPoints: [
          'Interior Spaces: Living rooms, bespoke modular kitchens, luxury bedrooms, walk-in closets, false ceilings, and smart lighting layouts.',
          'Exterior Facades: Modern elevation designs, louver panels, glass railings, exterior lighting, and architectural entrance features.',
          'Outdoor & Landscape Spaces: Covered terraces, motorized pergolas, balcony garden setups, and outdoor seating areas.',
        ],
        whyTitle: 'Why Domestic Dial 3D Visualizations?',
        whyPoints: [
          '100% Material Accuracy: The textures and finishes shown in our renders are matched directly with actual market-available materials.',
          'Zero Costly Revision Mistakes: Try different color combinations or furniture styles digitally before committing to physical installation.',
          'Seamless On-Site Execution: Your execution team and craftsmen receive exact visual benchmarks, ensuring the final output matches the approved design 1:1.',
        ],
      },
      {
        id: 'material-selection-moodboards',
        title: 'Material Selection & Moodboards',
        description:
          'A complete visual guide to wood, finishes, fabrication metals, fabrics, and colour combinations.',
        linkedServiceId: '3d-visualization',
        image: '/services/material-selection-moodboards.jpg',
        imageAlt: 'Material selection and moodboards with curated finishes, color palettes, and texture samples',
        tagline: 'Feel, Touch, and Coordinate Every Finish Before Execution',
        highlight:
          "A great design isn't just about how a space looks—it's about how every texture, grain, and finish works together in real life.",
        intro:
          'At Domestic Dial, we bridge the gap between 3D renders and site execution. Through curated physical and digital moodboards, we help you select, touch, and approve real-world materials before any installation begins—ensuring zero color mismatches and complete quality assurance.',
        processTitle: 'Our Step-by-Step Selection & Curation Process',
        steps: [
          {
            title: 'Step 1: Aesthetic & Functional Briefing',
            description:
              'We understand your lifestyle, usage requirements, maintenance expectations, and budget to shortlist the most suitable material grades for your project.',
          },
          {
            title: 'Step 2: Physical Material Sampling (The Touch & Feel Experience)',
            description:
              'We compile actual physical samples—laminates, veneers, PU paint swatches, acrylic sheets, stone, upholstery fabrics, and glass types—so you can inspect their texture, sheen, and durability firsthand.',
          },
          {
            title: 'Step 3: Lighting & Color Coordination',
            description:
              'We test material swatches under different light temperatures (Warm, Cool, Natural Day) to ensure colors look consistent and rich across day and night settings.',
          },
          {
            title: 'Step 4: Hardware & Fitting Alignment',
            description:
              'We curate functional hardware options—from soft-close hinges and tandem drawers to profile handles and magnetic track channels—matching aesthetic finishes (matte black, brushed gold, chrome, or rose gold).',
          },
          {
            title: 'Step 5: Final Material Board Sign-Off',
            description:
              'Once you approve the tactile moodboard, every selected item is documented with exact brand codes and specifications. This forms the master material kit for our site craftsmen.',
          },
        ],
        offeringsTitle: 'What We Help You Select',
        offeringsPoints: [
          'Woodwork & Finishes: BWP Plywoods, HDMR, Veneers, Anti-Scratch Acrylics, High-Gloss PU, and Textured Laminates.',
          'Countertops & Cladding: Quartz, Italian Marble, Sintered Stone, Granite, and Fluted Acoustic Paneling.',
          'Hardware & Fittings: Hettich, Blum, and Hafele mechanisms, soft-closing systems, and profile handles.',
          'Fabrics & Upholstery: Stain-resistant sofa fabrics, curtains, leatherette accents, and outdoor-grade all-weather textiles.',
          'Lighting & Glass: Profile LED strips, magnetic tracks, tinted/frosted glass, and acoustically insulated glazing.',
        ],
        whyTitle: 'Why Domestic Dial Moodboards?',
        whyPoints: [
          'Eliminates Surprises: No mismatch between what you saw on a screen and what gets installed on your site.',
          'Budget-Aligned Curation: We guide you on where to invest in luxury finishes and where to opt for cost-effective, high-durability alternatives.',
          'Single-Point Sourcing: You don’t need to visit dozens of showrooms; we bring curated, top-tier options directly to you.',
        ],
      },
    ],
  },
  {
    id: 'interiors-craftsmanship',
    title: 'Interiors (Premium Craftsmanship)',
    shortTitle: 'Interiors',
    cardLabel: 'Interiors & Craftsmanship',
    blurb: 'Bespoke woodwork, modular kitchens, and smart lighting.',
    image: '/services/engineered-systems.jpg?v=swap1',
    imageAlt: 'Domestic Dial interiors craftsmanship with precision woodwork, paneling, and cabinetry installation',
    items: [
      {
        id: 'bespoke-modular-kitchens',
        title: 'Bespoke Modular Kitchens (Woodwork & Aluminium)',
        description:
          'Waterproof aluminium and premium woodwork kitchens with precision hardware and smart storage.',
        linkedServiceId: 'wooden-work',
        image: '/services/bespoke-modular-kitchens.jpg',
        imageAlt: 'Bespoke modular kitchens in woodwork and aluminium with smart storage and premium finishes',
        tagline: 'Bespoke Woodwork, Modular Kitchens & Smart Lighting',
        highlight:
          'Aesthetics matter, but durability and functional design define true craftsmanship.',
        intro:
          'At Domestic Dial, we engineer long-lasting, highly functional spaces using high-grade materials, precision joinery, and international hardware standards—giving you a home that stays flawless for years.',
        processTitle: 'Detailed Breakdown of Services',
        steps: [
          {
            title: 'Aluminium Modular Kitchens',
            description:
              '100% waterproof, termite-proof, fire-resistant, and eco-friendly kitchens built with slim-profile aluminium frames and sleek glass/ACP panel finishes.',
          },
          {
            title: 'Premium Finishes',
            description:
              'Anti-scratch PU paint, high-gloss acrylics, natural veneers, and textured laminates.',
          },
          {
            title: 'Precision Hardware',
            description:
              'Soft-closing hinges, lift-up systems, and heavy-duty runners powered by Hettich & Blum.',
          },
          {
            title: 'Smart Storage Solutions',
            description:
              'Space-maximizing tandem drawer systems, tall pantry units, corner pull-outs, and built-in appliance modules.',
          },
        ],
        whyTitle: 'Why Domestic Dial Craftsmanship?',
        whyPoints: [
          'Zero Termite & Moisture Risks: Specialized material choices (HDMR, BWP Plywood, Aluminium) suited to regional humidity and water exposure.',
          'Flawless Finish: Precision factory-machine edge banding and dust-free on-site assembly.',
          'End-to-End Execution: Single-window management covering carpentry, electricals, plumbing, and civil masonry.',
        ],
      },
      {
        id: 'luxury-wardrobes-custom-closets',
        title: 'Luxury Wardrobes & Custom Closets',
        description:
          'Floor-to-ceiling wardrobes, walk-in closets, and motion-sensor cabinet lighting.',
        linkedServiceId: 'wooden-work',
        image: '/services/luxury-wardrobes-custom-closets.jpg',
        imageAlt: 'Luxury wardrobes and custom closets with walk-in designs, smart storage, and premium finishes',
        tagline: 'Custom Storage Tailored to Your Space',
        intro:
          'From sliding floor-to-ceiling wardrobes to fully organized walk-in closets, we design storage that maximizes every inch while looking refined and effortless to use.',
        offeringsTitle: 'What We Deliver',
        offeringsPoints: [
          'Floor-to-Ceiling Wardrobes: Custom sliding and openable designs tailored to your space limits.',
          'Walk-In Closets: Tinted profile glass doors, integrated vanity modules, and organized accessory drawers.',
          'Smart Cabinet Lighting: Concealed motion-sensor LED strip lights that illuminate automatically upon opening.',
        ],
      },
      {
        id: 'false-ceiling-architectural-lighting',
        title: 'False Ceiling & Architectural Lighting',
        description:
          'Gypsum ceilings, magnetic tracks, COB lighting, and architectural wall paneling.',
        linkedServiceId: 'wall-decor-finishes',
        image: '/services/false-ceiling-architectural-lighting.jpg',
        imageAlt: 'False ceiling and architectural lighting with cove lights, linear profiles, and custom designs',
        tagline: 'Ceilings, Lighting & Accent Features',
        intro:
          'We integrate ceilings, lighting, and wall features into one cohesive architectural language—so every room feels finished, layered, and intentional.',
        offeringsTitle: 'What We Deliver',
        offeringsPoints: [
          'Seamless Ceilings: High-durability gypsum ceiling designs integrated with modern recessed profile channels.',
          'Smart & Accent Lighting: Magnetic track light systems, focused COB spotlights, and ambient dimmable COB cove lighting.',
          'Wall Paneling & Accent Features: Acoustic wooden paneling, fluted louvers, and natural veneer accent walls.',
        ],
      },
      {
        id: 'turnkey-civil-modifications',
        title: 'Turnkey Civil Modifications & Renovations',
        description:
          'Wall modifications, space expansions, tiling, and surface laying managed end to end.',
        linkedServiceId: 'wall-decor-finishes',
        image: '/services/turnkey-civil-modifications.jpg',
        imageAlt:
          'Turnkey civil modifications and renovations from planning and construction through finishing and handover',
        tagline: 'Civil Works Coordinated With Interiors',
        intro:
          'When layout changes or surface upgrades are needed, we coordinate civil work with the interior plan so finishes, services, and structure stay aligned.',
        offeringsTitle: 'What We Deliver',
        offeringsPoints: [
          'Structural Wall Modifications: Safe wall removals, space expansions, and partition wall additions.',
          'Tiling & Surface Laying: Precision installation of large-format vitrified tiles, Italian marble flooring, and wall cladding.',
        ],
      },
    ],
  },
  {
    id: 'engineered-systems',
    title: 'Engineered Systems',
    shortTitle: 'Systems',
    cardLabel: 'Engineered Systems',
    blurb: 'Windows, screens, glass partitions, and precision metalwork.',
    image: '/services/shading-solutions.jpg?v=swap1',
    imageAlt: 'Domestic Dial engineered systems with premium window, glass, and facade solutions',
    items: [
      {
        id: 'upvc-aluminium-doors-windows',
        title: 'UPVC & Aluminium Doors & Windows',
        description: 'High-end sliding windows and sound-insulated glazing systems.',
        linkedServiceId: 'aluminium-windows',
        image: '/services/upvc-aluminium-doors-windows.jpg',
        imageAlt:
          'UPVC and aluminium doors and windows including sliding, casement, tilt and turn, and French door styles',
        tagline: 'Noise control, energy efficiency, and weather-tight performance',
        offeringsTitle: 'Key Features',
        offeringsPoints: [
          'Acoustic Noise Insulation: Multi-chambered uPVC and slim-profile aluminium frames engineered to block out urban noise and dust.',
          'Double & Triple Glazed Systems: Toughened Insulated Glass Units (DGU/TGU) that block heat transfer, keeping rooms cooler and cutting energy costs.',
          'Weather-Sealed Leak-Proof Profiles: Heavy-duty EPDM gaskets and weather strips that prevent rainwater leakage and drafty winds.',
          'Sleek Sliding & Openable Designs: Custom-built smooth sliding, tilt-and-turn, and casement solutions for residential and commercial spaces.',
        ],
      },
      {
        id: 'foldable-mosquito-screens',
        title: 'Foldable Mosquito Screens',
        description: 'Premium mosquito screens for sliding and custom-made doors and windows.',
        linkedServiceId: 'mosquito-doors',
        image: '/services/foldable-mosquito-screens.jpg',
        imageAlt:
          'Mosquito screen folding door for balconies, patios, cafés, and open spaces',
        tagline: 'Concealed protection without blocking breeze or view',
        offeringsTitle: 'Key Features',
        offeringsPoints: [
          'Concealed Plissé Mesh: High-durability pleated mesh that glides effortlessly and folds neatly into a side track when not in use.',
          'Custom Fit for Doors & Windows: Precision-fitted for large sliding doors, casement windows, and balcony openings.',
          'Unobstructed Views & Airflow: Ultra-slim profiles that preserve your exterior view without bulky frames or visible cords.',
          'Rust-Free & All-Weather: UV-resistant mesh and powder-coated aluminium frames built to withstand harsh sunlight and monsoons.',
        ],
      },
      {
        id: 'foldable-honeycomb-partitions',
        title: 'Foldable Honeycomb Partitions',
        description:
          'Sleek, modern honeycomb (plissé) collapsible systems that divide spaces intelligently.',
        linkedServiceId: 'glass-partitions',
        image: '/services/foldable-honeycomb-partitions.jpg',
        imageAlt:
          'Honeycomb foldable screen partitions for balconies, patios, interiors, and modern spaces',
        tagline: 'Divide open-plan spaces instantly',
        offeringsTitle: 'Key Features',
        offeringsPoints: [
          'Intelligent Space Division: Sleek, modern collapsible (plissé) honeycomb systems designed to divide open-plan spaces instantly.',
          'Thermal & Acoustic Insulation: Air-trapping cellular structure provides effective heat resistance and sound dampening.',
          'Lightweight & Cordless Handling: Smooth side-to-side operation with zero floor tracks required, preserving seamless flooring.',
          'Blackout & Translucent Options: Available in light-filtering or complete blackout fabrics for bedrooms, office cabins, and lounges.',
        ],
      },
      {
        id: 'architectural-glass-partitions',
        title: 'Architectural Glass Partitions',
        description:
          'Toughened-glass solutions for shower cubicles, office cabins, balconies, and interior partitions.',
        linkedServiceId: 'glass-partitions',
        galleryImages: [
          {
            src: '/services/architectural-glass-partitions/gold-fluted-panels.jpg',
            alt: 'Gold-framed fluted glass partition panels in a luxury living space',
          },
          {
            src: '/services/architectural-glass-partitions/black-sliding-divider.jpg',
            alt: 'Black-framed sliding glass partition dividing a hallway and living room',
          },
        ],
        tagline: 'Light, privacy, and safety in one system',
        offeringsTitle: 'Key Features',
        offeringsPoints: [
          'Stain-Free Shower Cubicles: Premium toughened glass enclosures with water-repellent, anti-limescale coatings and rust-proof SS fittings.',
          'Office & Interior Partitions: Acoustic glass walls and doors for study areas, office cabins, and living dividers—maintaining natural light while ensuring privacy.',
          'Balcony & Staircase Glass Railings: Laminated toughened glass railing systems for uninterrupted views and maximum safety.',
          'Custom PVD Accent Frames: Option to frame glass partitions in Titanium PVD-coated Stainless Steel (Gold, Rose Gold, Matte Black).',
        ],
      },
      {
        id: 'premium-ms-ss-railings',
        title: 'Premium MS & SS Railings',
        description:
          'Premium mild-steel and stainless-steel railings with precision laser-cut designs.',
        linkedServiceId: 'glass-skylight',
        image: '/services/premium-ms-ss-railings.jpg',
        imageAlt:
          'Premium MS and SS railings including glass, horizontal, cable, and designer styles',
        tagline: 'Laser-cut precision with lasting finishes',
        offeringsTitle: 'Key Features',
        offeringsPoints: [
          'Laser-Cut Precision Designs: Custom CNC laser-cut mild steel (MS) and stainless steel (SS) pattern panels for balconies and staircases.',
          'Titanium PVD Finishes: High-end PVD coating in Gold, Rose Gold, Bronze, and Matte Black that never chips, peels, or rusts.',
          'Sturdy Structural Fabrication: High-strength structural steel frameworks built with flawless concealed joints and premium powder coating.',
          'Modern Architectural Aesthetic: Designed to complement contemporary interior and exterior facade themes seamlessly.',
        ],
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
    image: '/services/design-visualization-hero.png?v=swap1',
    imageAlt: 'Domestic Dial shading solutions with outdoor living systems and smart home integration',
    items: [
      {
        id: 'motorized-retractable-pergolas',
        title: 'Motorized & Retractable Pergolas',
        description: 'Remote-controlled aluminium pergolas and retractable roof systems.',
      },
      {
        id: 'tensile-structures-gazebos',
        title: 'Tensile Structures & Gazebos',
        description: 'Designer tensile shades for rooftops, cafés, gardens, and villa lawns.',
      },
      {
        id: 'awnings-vertical-balcony-blinds',
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
    blurb:
      'From construction dust to keys in hand—we clean, pack, move, and settle you in with one accountable team across Zirakpur and the Chandigarh Tricity.',
    image: '/services/turnkey-relocation.jpg',
    imageAlt: 'Domestic Dial turnkey relocation with deep cleaning and professional packing and moving',
    items: [
      {
        id: 'turnkey-project-management',
        title: 'Turnkey Project Management',
        description:
          'Complete, hassle-free project management covering materials, labour, timelines, and on-site execution—so every trade stays aligned.',
        tagline: 'One accountable partner from plan to handover',
        highlight:
          'One timeline. One point of contact. One team responsible for the finish you approved.',
        intro:
          'We coordinate materials, labour, and site execution under a single timeline—so you are not managing separate vendors for every trade. From kickoff to snag-free handover, progress stays visible and decisions stay clear.',
        offeringsTitle: 'What We Manage',
        offeringsPoints: [
          'End-to-end scheduling across carpentry, electricals, plumbing, civil, and finishing trades.',
          'Material coordination and quality checks against approved drawings and moodboards.',
          'Single-point communication so decisions stay clear and accountable through the build.',
          'Site supervision with regular updates, milestone reviews, and snag-list closure before move-in.',
        ],
        whyTitle: 'Why Domestic Dial Project Management?',
        whyPoints: [
          'Fewer handoffs between vendors means fewer delays and fewer costly miscommunications.',
          'Quality benchmarks stay tied to your approved design—not last-minute substitutions.',
          'You get a clear path from construction completion to a livable, finished home.',
        ],
      },
      {
        id: 'seamless-relocation-handover',
        title: 'Seamless Relocation & Handover',
        description:
          'Post-construction cleaning, asset packing, safe shifting, and direct key handover—so your first day feels like home.',
        linkedServiceId: 'packers-movers',
        tagline: 'Post-construction cleaning, packing & direct key handover',
        highlight:
          'Forget the nightmare of dirty floors, construction dust, and relocation stress after your project is done.',
        intro:
          "At Domestic Dial, our relationship doesn't end when the civil work finishes. We handle post-construction deep cleaning, professional multi-layer packing, safe shifting, and zero-damage re-assembly—delivering a spotless, ready-to-move space right into your hands.",
        processTitle: 'Step-by-Step Handover & Transition Process',
        steps: [
          {
            title: '1. Post-Construction Deep Chemical Cleaning',
            description: 'A full construction-to-clean reset before any belongings move in:',
            bullets: [
              'De-Dusting & De-Grime: Complete removal of paint splatter, grout marks, cement residue, and fine construction dust from windows, tiles, and cabinetry.',
              'Surface Polish & Treatment: High-grade chemical cleaning for sanitary fittings and diamond mirror polishing for marble and granite floors.',
            ],
          },
          {
            title: '2. Premium Multi-Layer Asset Packing',
            description: 'Professional packing that protects fragile and high-value items:',
            bullets: [
              'Cushion Protection: Multi-layer bubble wrapping, foam padding, and heavy-duty corrugated sheets for fragile electronics, glass items, and high-value furniture.',
              'Organized Tagging: Systematically labeled boxes for room-by-room inventory tracking, ensuring zero misplaced belongings during shifting.',
            ],
          },
          {
            title: '3. Safe Transportation & Zero-Damage Re-Assembly',
            description: 'Secure transit and careful setup at the destination:',
            bullets: [
              'Secure Transit: Covered transport vehicles to protect your assets against weather, road dust, and transit vibration.',
              'Expert Re-Fitting: Professional unboxing, placement, and precision re-assembly of beds, wardrobes, and wall-mounted electronics at your new space.',
            ],
          },
          {
            title: '4. Final Inspection & Direct Key Handover',
            description: 'A verified, move-in-ready finish:',
            bullets: [
              'Joint Walkthrough: A complete room-by-room quality audit with you to verify every detail, light fixture, and finish meets your expectations.',
              'Ready-To-Move Key Handover: Receiving your keys to a pristine, fully functional home or office space—ready for immediate living.',
            ],
          },
        ],
        whyTitle: 'Why Domestic Dial Relocation & Handover?',
        whyPoints: [
          "True Single-Window Convenience: You don't need to hire separate cleaning crews or third-party packers and movers.",
          'Zero Stress & Damage Risk: Complete accountability from construction dust cleanup to your first night in the new home.',
          '100% Move-In Ready: Step into a fully polished, clean, and organized space from day one.',
        ],
      },
    ],
  },
]

export type ServicePillarId = (typeof servicePillars)[number]['id']

export function getServicePillar(id: string): ServicePillar | undefined {
  return servicePillars.find((p) => p.id === id)
}

export function getServicePillarItem(
  categoryId: string,
  itemId: string,
): { pillar: ServicePillar; item: ServicePillarItem } | undefined {
  const pillar = getServicePillar(categoryId)
  if (!pillar) return undefined
  const item = pillar.items.find((i) => i.id === itemId)
  if (!item) return undefined
  return { pillar, item }
}
