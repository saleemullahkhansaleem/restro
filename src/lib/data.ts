// ─── NAVIGATION ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Features',    href: '#features' },
  { label: 'Why RESTRO',  href: '#why' },
  { label: 'Pricing',     href: '#pricing' },
  { label: 'Contact',     href: '#contact' },
]

// ─── HERO STATS ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: '9+',    label: 'Core feature modules' },
  { value: '24/7',  label: 'Technical support' },
  { value: '100%',  label: 'Cloud-based platform' },
]

// ─── TABLE STATUS DATA (hero floor view) ──────────────────────────────────────
export type TableStatus = 'free' | 'occupied' | 'reserved' | 'cleaning'

export const TABLES: { id: string; status: TableStatus }[] = [
  { id: 'T1', status: 'free' },
  { id: 'T2', status: 'occupied' },
  { id: 'T3', status: 'reserved' },
  { id: 'T4', status: 'free' },
  { id: 'T5', status: 'occupied' },
  { id: 'T6', status: 'cleaning' },
  { id: 'T7', status: 'free' },
  { id: 'T8', status: 'occupied' },
]

export const TABLE_STATUS_STYLES: Record<TableStatus, { bg: string; border: string; text: string }> = {
  free:     { bg: 'bg-white/10',            border: 'border-white/15',           text: 'text-white/50' },
  occupied: { bg: 'bg-magenta-500/20',      border: 'border-magenta-500/40',     text: 'text-pink-300' },
  reserved: { bg: 'bg-amber-400/20',        border: 'border-amber-400/35',       text: 'text-amber-300' },
  cleaning: { bg: 'bg-blue-400/20',         border: 'border-blue-400/35',        text: 'text-blue-300' },
}

export const TABLE_LEGEND: { label: string; color: string }[] = [
  { label: 'Free',     color: 'bg-white/30' },
  { label: 'Occupied', color: 'bg-magenta-500/80' },
  { label: 'Reserved', color: 'bg-amber-400/80' },
  { label: 'Cleaning', color: 'bg-blue-400/80' },
]

// ─── FEATURES ─────────────────────────────────────────────────────────────────
export interface Feature {
  number: string
  icon: string
  title: string
  description: string
  bullets: string[]
}

export const FEATURES: Feature[] = [
  {
    number: '01',
    icon: '🪑',
    title: 'Table & Seating Management',
    description: 'Visualize your entire floor in real time with drag-and-drop layout design and instant status updates.',
    bullets: [
      'Live table occupancy status',
      'Custom floor layout & drag-and-drop design',
      'Multi-floor management',
      'Table assignment, transfer & merging',
      'Colour-coded statuses (Free / Reserved / Occupied / Cleaning)',
    ],
  },
  {
    number: '02',
    icon: '📅',
    title: 'Reservation & Waitlist System',
    description: 'Manage bookings online with automated confirmations, guest history, and a smart waitlist queue.',
    bullets: [
      'Online reservation portal',
      'Guest profiles with visit history',
      'SMS/Email confirmations',
      'Waitlist with estimated waiting time',
      'VIP and recurring guest tagging',
    ],
  },
  {
    number: '03',
    icon: '📱',
    title: 'Order Management System',
    description: 'Mobile and tablet-based ordering with real-time updates, customizations, and flexible billing options.',
    bullets: [
      'Mobile/tablet-based ordering',
      'Real-time order updates',
      'Add-ons, customization & special instructions',
      'Split bill & merge bill options',
      'Course-wise ordering (Starter / Main / Dessert)',
    ],
  },
  {
    number: '04',
    icon: '💳',
    title: 'POS & Billing',
    description: 'Fast and secure checkout with multiple payment options, taxes, service charges, discounts, and digital receipts.',
    bullets: [
      'Quick and secure checkout',
      'Multiple payment options',
      'Taxes, service charges & discounts',
      'Digital receipts (SMS/Email)',
      'Shift-wise and daily closing reports',
    ],
  },
  {
    number: '05',
    icon: '🍳',
    title: 'Kitchen Display System (KDS)',
    description: 'Real-time kitchen order display with color-coded timing and item-level notes to reduce preparation delays.',
    bullets: [
      'Real-time order display',
      'Colour-coded order timing',
      'Item-level notes for chefs',
      'Completed order tracking',
      'Reduced preparation delays',
    ],
  },
  {
    number: '06',
    icon: '📦',
    title: 'Inventory & Menu Management',
    description: 'Automatically deduct stock per recipe, track wastage, and update menus dynamically in real time.',
    bullets: [
      'Recipe-based inventory deduction',
      'Stock alerts & wastage tracking',
      'Dynamic menu updates',
      'Category & item-level pricing',
    ],
  },
  {
    number: '07',
    icon: '👥',
    title: 'Staff & CRM Management',
    description: 'Manage staff access levels, customer preferences, loyalty programs, and feedback from one dashboard.',
    bullets: [
      'Staff accounts & access levels',
      'Customer history & preferences',
      'Loyalty points & reward programs',
      'Feedback and ratings dashboard',
    ],
  },
  {
    number: '08',
    icon: '📊',
    title: 'Reporting & Analytics',
    description: 'Get a clear view of revenue, staff performance, table turnover, and order trends across all branches.',
    bullets: [
      'Sales & revenue dashboards',
      'Table turnover analytics',
      'Staff performance reports',
      'Peak hours & order trends',
      'Multi-branch comparison reports',
    ],
  },
  {
    number: '09',
    icon: '🔗',
    title: 'QR Code & Integrations',
    description: 'Enable QR-powered guest experiences and connect RESTRO with your full restaurant tech stack.',
    bullets: [
      'QR-based digital menu',
      'QR table check-in',
      'Customer self-ordering',
      'Digital receipts',
      'Online payments',
      'Payment gateways',
      'SMS/Email providers',
      'Thermal printers',
      'Kitchen Display Screens (KDS)',
      'Tablets & POS systems',
    ],
  },
]

// ─── WHY CARDS ────────────────────────────────────────────────────────────────
export interface WhyCard {
  icon: string
  title: string
  description: string
}

export const WHY_CARDS: WhyCard[] = [
  {
    icon: '⚡',
    title: 'Built for fast-paced F&B',
    description: 'Designed for high-volume food and hospitality operations where speed and reliability are critical.',
  },
  {
    icon: '🏢',
    title: 'Scales with your business',
    description: 'Ideal for single branches and large multi-branch chains with flexible growth support.',
  },
  {
    icon: '🔧',
    title: '24/7 technical support',
    description: 'Round-the-clock support from the Creative Garage team to keep operations running smoothly.',
  },
  {
    icon: '🎨',
    title: 'Modern UI for your team',
    description: 'Clean, intuitive UI/UX for staff and management to reduce training time and errors.',
  },
  {
    icon: '🛡️',
    title: 'Secure and reliable infrastructure',
    description: 'Cloud architecture built for uptime, data security, and dependable day-to-day service continuity.',
  },
  {
    icon: '⚙️',
    title: 'Fully customizable',
    description: 'Adapt workflows, menus, pricing, and operational settings to your specific business model.',
  },
]

// ─── PRICING ──────────────────────────────────────────────────────────────────
export const MONTHLY_ITEMS = [
  { name: 'RESTRO System License',         price: 'PKR 25,000 / month' },
  { name: 'Mobile Application (Add-on)',   price: 'PKR 5,000 / month' },
  { name: 'Server Hosting Charges',        price: 'PKR 2,000 / month' },
]

export const SETUP_INCLUDES = [
  'System setup',
  'Configuration',
  'Staff training',
  'Deployment',
]

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export const CONTACT_DETAILS = [
  { icon: '📍', label: 'Office Address', value: '1402, 14th Floor, ISE Towers, Islamabad, Pakistan', href: null },
  { icon: '📞', label: 'Phone',          value: '051-8911883',              href: 'tel:0518911883' },
  { icon: '✉️', label: 'Email',          value: 'info@creativegarage.org',  href: 'mailto:info@creativegarage.org' },
  { icon: '🌐', label: 'Website',        value: 'www.creativegarage.org',   href: 'https://www.creativegarage.org' },
]

export const DEMO_OPTIONS = [
  'Full RESTRO Demo',
  'Pricing Information',
  'Custom / Multi-branch Setup',
  'Technical Support Questions',
]
