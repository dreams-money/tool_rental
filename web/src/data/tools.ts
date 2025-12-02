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
  reservations?: Reservation[];
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
    dailyRate: 350,
    weeklyRate: 1975,
    image: 'construction excavator',
    specs: ['Operating Weight: 3,000 lbs', 'Max Dig Depth: 8 ft', 'Diesel Powered', 'Zero Tail Swing']
  },
  {
    id: 'skid-steer',
    name: 'Skid Steer Loader',
    category: 'Heavy Equipment',
    description: 'Versatile machine for moving materials, grading, and more. Compatible with various attachments.',
    dailyRate: 350,
    weeklyRate: 1975,
    image: 'skid steer loader',
    specs: ['Operating Capacity: 1,900 lbs', 'Horsepower: 74 HP', 'Hydraulic Flow: 26 gpm', 'Enclosed Cab']
  },
  // {
  //   id: 'jackhammer',
  //   name: 'Electric Jackhammer',
  //   category: 'Demolition',
  //   description: 'Powerful 60-lb jackhammer for breaking concrete, asphalt, and rock. Electric powered for less maintenance.',
  //   dailyRate: 65,
  //   weeklyRate: 260,
  //   image: 'jackhammer demolition',
  //   specs: ['Weight: 60 lbs', '1800 BPM', 'Electric - 15 Amp', 'Includes Chisels']
  // },
  // {
  //   id: 'pressure-washer',
  //   name: 'Pressure Washer',
  //   category: 'Cleaning',
  //   description: 'High-powered gas pressure washer. Perfect for cleaning driveways, decks, siding, and equipment.',
  //   dailyRate: 75,
  //   weeklyRate: 300,
  //   image: 'pressure washer',
  //   specs: ['4200 PSI', '4.0 GPM', 'Gas Powered', '50 ft Hose Included']
  // },
  // {
  //   id: 'concrete-mixer',
  //   name: 'Portable Concrete Mixer',
  //   category: 'Concrete',
  //   description: 'Gas-powered concrete mixer for on-site mixing. Ideal for concrete, mortar, and stucco projects.',
  //   dailyRate: 85,
  //   weeklyRate: 340,
  //   image: 'concrete mixer',
  //   specs: ['9 cu ft Drum', 'Gas Engine', 'Towable', 'Heavy Duty Steel']
  // },
  // {
  //   id: 'plate-compactor',
  //   name: 'Plate Compactor',
  //   category: 'Compaction',
  //   description: 'Vibratory plate compactor for soil, gravel, and asphalt compaction. Essential for proper base preparation.',
  //   dailyRate: 70,
  //   weeklyRate: 280,
  //   image: 'plate compactor',
  //   specs: ['21" Plate Width', '5000 lbs Force', 'Gas Powered', 'Water Tank Included']
  // },
  {
    id: 'electric-hand-planner',
    name: 'Electric Hand Planner',
    category: 'Smoothing',
    description: 'Electric hand planner to smooth out uneven boards.',
    dailyRate: 19,
    weeklyRate: 76,
    image: 'hand planner',
    specs: ['Corded', '6.5 Amp motor', 'Depth Knob', 'Spring loaded stand']
  },
  // {
  //   id: 'orbit-sander',
  //   name: 'Orbit Sander',
  //   category: 'Smoothing',
  //   description: 'Strip old paint, prepare or new paint, finsh between coats, or smooth out any surface.',
  //   dailyRate: 13,
  //   weeklyRate: 51,
  //   image: 'orbit sander',
  //   specs: ['Electric']
  // },
  {
    id: 'circular-saw',
    name: '36V Circular Saw',
    category: 'Wood Cutting & Shaping',
    description: 'Use to cut framing, subfloor, large sheets of plywood, and even chopping firewood.',
    dailyRate: 27,
    weeklyRate: 105,
    image: 'wood',
    specs: ['20v Battery', '6.5" Blade', '2.25" cut depth at 90 degrees']
  },
  {
    id: 'jig-saw',
    name: 'Jig Saw',
    category: 'Wood Cutting & Shaping',
    description: 'Versatile tool for cutting curves, intricate shapes, and small notches in wood.',
    dailyRate: 15,
    weeklyRate: 56,
    image: 'wood',
    specs: ['Electric']
  },
  {
    id: 'large-wood-router',
    name: 'Large Wood Router',
    category: 'Wood Cutting & Shaping',
    description: 'Shape wood precisely - groves, precise wood joins, finished edges, trimming.',
    dailyRate: 20,
    weeklyRate: 80,
    image: 'wood',
    specs: ['Electric']
  },
  {
    id: 'reciprocating-saw',
    name: 'Reciprocating Saw',
    category: 'Wood Cutting & Shaping',
    description: 'Cut large wood sections - posts, trees, old framing',
    dailyRate: 27,
    weeklyRate: 104,
    image: 'wood',
    specs: ['Electric']
  },
  {
    id: 'oscillating-tool',
    name: 'Oscillating Saw',
    category: 'Wood Cutting & Shaping',
    description: 'Cut in hard to reach areas.  Cut precise corners.',
    dailyRate: 10,
    weeklyRate: 40,
    image: 'wood',
    specs: ['Electric']
  },
  {
    id: 'table-saw',
    name: 'Table Saw',
    category: 'Wood Cutting & Shaping',
    description: 'Precisely cut plywood or particle board.  Cut wood length wise, make bevels, miter cuts, or dado cuts. Excels at repetive and high precision cuts.',
    dailyRate: 42,
    weeklyRate: 166,
    image: 'wood',
    specs: ['Electric', '48 inch cut width']
  },
  {
    id: 'track-saw',
    name: 'Track Saw',
    category: 'Wood Cutting & Shaping',
    description: 'Make long precise cuts on large sheets of plywood, MDF, or coutertops.  Rip down sheet material to more managable pieces.  Can also cut at an angle.',
    dailyRate: 45,
    weeklyRate: 180,
    image: 'wood',
    specs: ['Electric', 'X inch long track']
  },
  {
    id: 'miter-saw-12-in',
    name: 'Miter Saw',
    category: 'Wood Cutting & Shaping',
    description: 'Make precise cuts on framing or molding.  Excels at angle cuts.',
    dailyRate: 42,
    weeklyRate: 166,
    image: 'wood',
    specs: ['Electric', '12 inch']
  },
  {
    id: 'dremel',
    name: 'Dremel Rotary Tool',
    category: 'Wood Cutting & Shaping',
    description: 'Versatile tool for detailed tasks like sanding, cutting, engraving, grinding, polishing, or carving.  Excels at small scale projects.',
    dailyRate: 20,
    weeklyRate: 70,
    image: 'wood',
    specs: ['Electric']
  },
  {
    id: 'angle-grinder',
    name: 'Angler Grider',
    category: 'Masonry & Tile',
    description: 'Cut, grind, polish, or sand a wide variety of materials.',
    dailyRate: 20,
    weeklyRate: 70,
    image: 'angle grinder',
    specs: ['Electric']
  },
  {
    id: 'finish-nailer',
    name: 'Finish Nailer',
    category: 'Nailers & Staplers',
    description: 'Join wood with small, unnoticable, nails.',
    dailyRate: 36,
    weeklyRate: 144,
    image: 'finish nailer',
    specs: ['Pneumatic']
  },
  {
    id: 'straight-nailer',
    name: 'Straight Nailer',
    category: 'Nailers & Staplers',
    description: 'Install trim, baseboards, molding, door or window casing.  Typically holes need to be filled.',
    dailyRate: 36,
    weeklyRate: 144,
    image: 'straight nailer',
    specs: ['Pneumatic']
  },
  {
    id: 'crown-stapler',
    name: 'Crown Stapler',
    category: 'Nailers & Staplers',
    description: 'Fasten thin materials to some base.  I.e. Insulation, cabinet backings, furniture upholstery.',
    dailyRate: 27,
    weeklyRate: 108,
    image: 'crown stapler',
    specs: ['Pneumatic']
  },
  {
    id: 'battery-drill',
    name: 'Electic Drill',
    category: 'General Construction',
    description: 'Drive screws or bolts, drill or cut holes.  Requires specific bits to perform a wide variety of tasks.',
    dailyRate: 23,
    weeklyRate: 90,
    image: 'battery powered drill',
    specs: ['Battery powered']
  },
  {
    id: 'battery-impact-drill',
    name: 'Impact Drill',
    category: 'General Construction',
    description: 'Drive screws or bolts into dense materials with high torque and percussive blows. Requires specific bits to perform a wide variety of tasks.',
    dailyRate: 21,
    weeklyRate: 83,
    image: 'battery powered impact drill',
    specs: ['Battery powered']
  },
  {
    id: 'pancake-compressor',
    name: 'Pancake Compressor',
    category: 'General Construction',
    description: 'Small air compressor to inflate tires, power pneumatic tools, clean sand, or airbrush paint.',
    dailyRate: 24,
    weeklyRate: 94,
    image: 'small pancake shaped air compressor',
    specs: ['Electric']
  },
  {
    id: 'manual-tamper',
    name: 'Manual Tamper',
    category: 'General Construction',
    description: 'Compress loose material like soil or gravel to stabilze a surface for small landscaping projects.',
    dailyRate: 9,
    weeklyRate: 36,
    image: 'small pancake shaped air compressor',
    specs: ['Electric']
  },
  {
    id: 'generator-200',
    name: '2000W Generator',
    category: 'Power & Heating',
    description: 'Reliable gas generator for job site power. Powers multiple tools and equipment simultaneously.',
    dailyRate: 46,
    weeklyRate: 184,
    image: 'power generator',
    specs: ['2000W Running', '9500W Starting', 'Gas Powered', 'Electric Start', 'GFCI Protected']
  },
  {
    id: '220v-welder',
    name: 'Arc Welder, 220v',
    category: 'Welding',
    description: 'Join heavy duty steel and iron.  Requires a 220v power source.',
    dailyRate: 46,
    weeklyRate: 184,
    image: 'arc welder',
    specs: ['']
  },
  {
    id: 'drywall-set',
    name: 'Drywall Knife Set w/ Pan',
    category: 'Drywall',
    description: '3 different drywall knives and a pan to tape new drywall installations or patch a hole.',
    dailyRate: 10,
    weeklyRate: 40,
    image: 'drywall set',
    specs: ['x inch knife', 'x inch knife', 'x inch knife', 'x inch plastic pan', 'Easy wash']
  },
  // {
  //   id: 'scaffold-set',
  //   name: 'Scaffold Tower Set',
  //   category: 'Access',
  //   description: 'Complete mobile scaffold system with platforms. Adjustable height for various projects. Easy setup.',
  //   dailyRate: 55,
  //   weeklyRate: 220,
  //   image: 'scaffold construction',
  //   specs: ['12 ft Working Height', 'Mobile with Casters', 'Aluminum Construction', 'Platform Included']
  // },
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
    name: 'Tile Saw',
    category: 'Masonry & Tile',
    description: 'Wet tile saw. Ideal for ceramic, porcelain, and stone tile.',
    dailyRate: 48,
    weeklyRate: 190,
    image: 'tile saw',
    specs: ['10" Blade', '24" Rip Capacity', 'Water Pump System']
  },
  {
    id: 'cement-board-scorer',
    name: 'Cement Board Scoring Tool',
    category: 'Masonry & Tile',
    description: 'Cut cement board tile backing.',
    dailyRate: 3,
    weeklyRate: 8,
    image: 'tile scorer',
    specs: ['Hand Tool']
  },
  {
    id: 'drill-drain-cleaner',
    name: 'Drill-Unit Drain Cleaner',
    category: 'Plumbing',
    description: 'Clear out clogged pipes with a drill powered drain cleaner.',
    dailyRate: 34,
    weeklyRate: 134,
    image: 'drill drain cleaner',
    specs: ['Needs drill', 'Reaches 25\'']
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
    id: 'carpet-kicker',
    name: 'Carpet Kicker',
    category: 'Flooring',
    description: 'Stretch and secure carpet in smaller areas like closets, hallways, and staircases.',
    dailyRate: 15,
    weeklyRate: 56,
    image: 'carpet kicker',
    specs: ['Heated Cleaning', 'Large Capacity Tanks', 'Upholstery Attachment', 'Commercial Grade']
  },
  {
    id: 'carpet-stretcher',
    name: 'Carpet Stretcher',
    category: 'Flooring',
    description: 'Pull and tension larger pieces of carpet to prevent wrinkles and ensure it stays in place.',
    dailyRate: 28,
    weeklyRate: 112,
    image: 'carpet stretcher',
    specs: ['X total length', 'Commercial Grade']
  },
  {
    id: 'carpet-seamer',
    name: 'Carpet Seamer',
    category: 'Flooring',
    description: 'Seam to pieces of carpet together to finish a large room.',
    dailyRate: 16,
    weeklyRate: 62,
    image: 'carpet seamer',
    specs: ['Electric']
  },
  {
    id: 'fiberglass-extension-ladder',
    name: 'Fiberglass Extension Ladder',
    category: 'Access & Handling',
    description: 'Complete any job that\'s at height.  Fiberglass is non conductive; especially good for electrical work.',
    dailyRate: 41,
    weeklyRate: 162,
    image: 'carpet stretcher',
    specs: ['32 foot']
  },
  {
    id: 'hand-truck',
    name: 'Hand truck',
    category: 'Access & Handling',
    description: 'Move heavy objects with wheels.  Perfect for moving large appliances.',
    dailyRate: 23,
    weeklyRate: 90,
    image: 'hand truck',
    specs: ['Comes with ratcheting straps']
  },
  {
    id: 'medium-paint-sprayer',
    name: 'Medium paint sprayer',
    category: 'Painting & Vacuum',
    description: 'Good for any interior paint jobs like walls, cielings, or cabinets.',
    dailyRate: 79,
    weeklyRate: 313,
    image: 'paint sprayer',
    specs: ['X PSI', 'More details']
  },
  {
    id: 'vacuum',
    name: 'Large Sized Vacuum',
    category: 'Painting & Vacuum',
    description: 'Clean car carpets and work areas.',
    dailyRate: 23,
    weeklyRate: 90,
    image: 'vacuum',
    specs: ['Comes with 1 X standard filter']
  },
  {
    id: 'lawn-mower',
    name: 'Lawn Mower',
    category: 'Landscaping',
    description: 'Trim weeds or grass that are low to the ground.',
    dailyRate: 27,
    weeklyRate: 108,
    image: 'lawn mower',
    specs: ['x horse power']
  },
  {
    id: 'kerosene-heater',
    name: 'Kerosene Heater',
    category: 'Power & Heating',
    description: 'Warm up your work area or keep your guests snug in that garage party.',
    dailyRate: 34,
    weeklyRate: 134,
    image: 'kerosense heater',
    specs: ['70,000 BTU']
  },
  // {
  //   id: 'chainsaw',
  //   name: '20" Gas Chainsaw',
  //   category: 'Wood Cutting & Shaping',
  //   description: 'Professional grade chainsaw for tree trimming, firewood cutting, and land clearing.',
  //   dailyRate: 50,
  //   weeklyRate: 200,
  //   image: 'chainsaw',
  //   specs: ['20" Bar Length', 'Gas Powered', 'Anti-Vibration', 'Chain Brake Safety']
  // }
];
