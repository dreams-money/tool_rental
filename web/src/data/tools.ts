export interface Reservation {
  to: Date;
  from: Date;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  dailyRate: number;
  weeklyRate: number;
  image: string;
  specs: string[];
  reservations: Reservation[];
}

// const resp = await fetch("/tools")
// if (! resp.ok) {
//   throw new Error("failed to fetch tools")
// }

// export const tools: Tool[] = await resp.json()

export const tools: Tool[] = [
  {
    id: 'excavator-mini',
    name: 'Mini Excavator',
    category: 'Heavy Equipment',
    description: 'Compact excavator perfect for digging, trenching, and landscaping projects. Easy to maneuver in tight spaces.',
    dailyRate: 299,
    weeklyRate: 1200,
    image: 'construction excavator',
    specs: ['Operating Weight: 3,000 lbs', 'Max Dig Depth: 8 ft', 'Diesel Powered', 'Zero Tail Swing']
  },
  {
    id: 'skid-steer',
    name: 'Skid Steer Loader',
    category: 'Heavy Equipment',
    description: 'Versatile machine for moving materials, grading, and more. Compatible with various attachments.',
    dailyRate: 275,
    weeklyRate: 1100,
    image: 'skid steer loader',
    specs: ['Operating Capacity: 1,900 lbs', 'Horsepower: 74 HP', 'Hydraulic Flow: 26 gpm', 'Enclosed Cab']
  },
  {
    id: 'jackhammer',
    name: 'Electric Jackhammer',
    category: 'Demolition',
    description: 'Powerful 60-lb jackhammer for breaking concrete, asphalt, and rock. Electric powered for less maintenance.',
    dailyRate: 65,
    weeklyRate: 260,
    image: 'jackhammer demolition',
    specs: ['Weight: 60 lbs', '1800 BPM', 'Electric - 15 Amp', 'Includes Chisels']
  },
  {
    id: 'pressure-washer',
    name: 'Pressure Washer',
    category: 'Cleaning',
    description: 'High-powered gas pressure washer. Perfect for cleaning driveways, decks, siding, and equipment.',
    dailyRate: 75,
    weeklyRate: 300,
    image: 'pressure washer',
    specs: ['4200 PSI', '4.0 GPM', 'Gas Powered', '50 ft Hose Included']
  },
  {
    id: 'concrete-mixer',
    name: 'Portable Concrete Mixer',
    category: 'Concrete',
    description: 'Gas-powered concrete mixer for on-site mixing. Ideal for concrete, mortar, and stucco projects.',
    dailyRate: 85,
    weeklyRate: 340,
    image: 'concrete mixer',
    specs: ['9 cu ft Drum', 'Gas Engine', 'Towable', 'Heavy Duty Steel']
  },
  {
    id: 'plate-compactor',
    name: 'Plate Compactor',
    category: 'Compaction',
    description: 'Vibratory plate compactor for soil, gravel, and asphalt compaction. Essential for proper base preparation.',
    dailyRate: 70,
    weeklyRate: 280,
    image: 'plate compactor',
    specs: ['21" Plate Width', '5000 lbs Force', 'Gas Powered', 'Water Tank Included']
  },
  {
    id: 'generator-7500',
    name: '7500W Generator',
    category: 'Power',
    description: 'Reliable gas generator for job site power. Powers multiple tools and equipment simultaneously.',
    dailyRate: 95,
    weeklyRate: 380,
    image: 'power generator',
    specs: ['7500W Running', '9500W Starting', 'Gas Powered', 'Electric Start', 'GFCI Protected']
  },
  {
    id: 'scaffold-set',
    name: 'Scaffold Tower Set',
    category: 'Access',
    description: 'Complete mobile scaffold system with platforms. Adjustable height for various projects. Easy setup.',
    dailyRate: 55,
    weeklyRate: 220,
    image: 'scaffold construction',
    specs: ['12 ft Working Height', 'Mobile with Casters', 'Aluminum Construction', 'Platform Included']
  },
  {
    id: 'post-hole-digger',
    name: 'Auger Post Hole Digger',
    category: 'Digging',
    description: 'Two-man gas-powered earth auger. Perfect for fence posts, deck footings, and tree planting.',
    dailyRate: 80,
    weeklyRate: 320,
    image: 'auger drill',
    specs: ['9" Auger Bit', 'Gas Powered', 'Two-Man Operation', '3 ft Max Depth']
  },
  {
    id: 'tile-saw',
    name: 'Professional Tile Saw',
    category: 'Cutting',
    description: 'Wet tile saw with laser guide for precision cuts. Ideal for ceramic, porcelain, and stone tile.',
    dailyRate: 60,
    weeklyRate: 240,
    image: 'tile saw',
    specs: ['10" Blade', '24" Rip Capacity', 'Laser Guide', 'Water Pump System']
  },
  {
    id: 'carpet-cleaner',
    name: 'Commercial Carpet Cleaner',
    category: 'Cleaning',
    description: 'Professional carpet cleaning machine with heated cleaning for deep extraction and fast drying.',
    dailyRate: 55,
    weeklyRate: 220,
    image: 'carpet cleaner',
    specs: ['Heated Cleaning', 'Large Capacity Tanks', 'Upholstery Attachment', 'Commercial Grade']
  },
  {
    id: 'chainsaw',
    name: '20" Gas Chainsaw',
    category: 'Cutting',
    description: 'Professional grade chainsaw for tree trimming, firewood cutting, and land clearing.',
    dailyRate: 50,
    weeklyRate: 200,
    image: 'chainsaw',
    specs: ['20" Bar Length', 'Gas Powered', 'Anti-Vibration', 'Chain Brake Safety']
  }
];
