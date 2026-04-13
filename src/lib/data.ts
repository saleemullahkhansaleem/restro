// ─── NAVIGATION ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Features',    href: '#features' },
  { label: 'Why RESTRO',  href: '#why' },
  { label: 'Pricing',     href: '#pricing' },
  { label: 'Contact',     href: '#contact' },
]

// ─── HERO STATS ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: '9+',    label: 'Core modules' },
  { value: '24/7',  label: 'Technical support' },
  { value: '100%',  label: 'Cloud-based' },
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
    description: 'Tablet-based ordering with real-time updates, customizations, and flexible billing options.',
    bullets: [
      'Mobile/tablet-based ordering',
      'Real-time order updates',
      'Add-ons, customization & instructions',
      'Split bill & merge bill options',
      'Course-wise (Starter / Main / Dessert) ordering',
    ],
  },
  {
    number: '04',
    icon: '💳',
    title: 'POS & Billing',
    description: 'Fast, secure checkout with multi-payment support, taxes, discounts, and digital receipts.',
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
    description: 'Replace paper tickets with a live kitchen screen that minimizes errors and preparation delays.',
    bullets: [
      'Real-time order display',
      'Colour-coded order times',
      'Item-level notes for chefs',
      'Completed order updates',
      'Minimized preparation delays',
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
    description: 'Control access levels, track customer preferences, and run loyalty programmes from one dashboard.',
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
    description: 'Contactless QR ordering plus seamless hardware and third-party integrations out of the box.',
    bullets: [
      'QR-based digital menu & table check-in',
      'Customer self-ordering & online payments',
      'Payment gateways & SMS/Email providers',
      'Thermal printers & KDS screens',
      'Tablets & POS stations',
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
    description: 'Every workflow is optimized for the speed of restaurant service — from order entry to billing in seconds.',
  },
  {
    icon: '📡',
    title: 'Cloud-based & always on',
    description: 'Reliable cloud infrastructure means your data is always accessible, backed up, and secure from any device.',
  },
  {
    icon: '🏢',
    title: 'Scales with your business',
    description: 'Equally powerful for a single café or a multi-branch chain — RESTRO grows as your business grows.',
  },
  {
    icon: '🎨',
    title: 'Modern UI for your team',
    description: 'Designed for real users — intuitive enough that staff training takes hours, not days.',
  },
  {
    icon: '🔧',
    title: 'Fully customizable',
    description: 'Configure RESTRO around your brand, menu structure, floor layout, and reporting needs.',
  },
  {
    icon: '🛡️',
    title: '24/7 technical support',
    description: 'Our team is available around the clock to ensure your operations are never interrupted.',
  },
]

// ─── PRICING ──────────────────────────────────────────────────────────────────
export const MONTHLY_ITEMS = [
  { name: 'RESTRO System License',  price: 'PKR 25,000 / mo' },
  { name: 'Mobile App (Add-on)',     price: 'PKR 5,000 / mo' },
  { name: 'Server Hosting',          price: 'PKR 2,000 / mo' },
]

export const SETUP_INCLUDES = [
  'System setup & configuration',
  'Staff training sessions',
  'Deployment & go-live support',
  'Full onboarding assistance',
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
  'Technical Questions',
]
