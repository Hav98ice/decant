export const site = {
  name: 'Decant',
  tagline: 'Fine Dining · Wine · Cocktails',
  city: 'Medford, Oregon',
  address: '1108 E. Main St, Medford, OR 97504',
  phone: '541-776-1234',
  phoneHref: 'tel:+15417761234',
  reserveHref: '#reserve',
  mapsHref: 'https://maps.google.com/?q=1108+E+Main+St+Medford+OR+97504',
  hours: [
    { days: 'Tuesday – Saturday', time: '4:00 — 8:30 PM' },
    { days: 'Happy Hour', time: '4:00 — 5:30 PM' },
    { days: 'Sunday & Monday', time: 'Closed' },
  ],
  awards: [
    'Wine Spectator — Award of Excellence 2025',
    'Wine Spectator — Award of Excellence 2024',
    'Wine Spectator — Award of Excellence 2023',
  ],
} as const

export const nav = [
  { label: 'The Table', href: '#intro' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Visit', href: '#visit' },
] as const
