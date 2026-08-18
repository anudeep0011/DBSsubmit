export const SITE = {
  name: 'DBSsubmit',
  legalName: 'Talaty Group Ltd',
  tagline: 'DBS checks, done properly.',
  phone: '0800 123 4567',
  email: 'info@dbssubmit.co.uk',
  address: 'Talaty Group Ltd, London, United Kingdom',
  hours: 'Lines open 9am–5pm, Mon–Fri',
  social: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Employers', href: '/employers' },
  { label: 'Individuals', href: '/individuals' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const;

export const UCHECK_LOGIN_URL = process.env.NEXT_PUBLIC_UCHECK_LOGIN_URL || 'https://www.ucheck.co.uk';
export const UCHECK_APPLY_URL = process.env.NEXT_PUBLIC_UCHECK_APPLY_URL || 'https://www.ucheck.co.uk/apply';
