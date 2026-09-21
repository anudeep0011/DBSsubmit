export const SITE = {
  name: 'DBS-Express',
  legalName: 'Talaty Group Ltd',
  tagline: 'DBS checks, done properly.',
  phone: '01254 432655',
  email: 'contact@dbs-express.co.uk',
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

export const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL || 'https://www.dbs-express.co.uk/app/login_direct';
export const REGISTER_URL = process.env.NEXT_PUBLIC_REGISTER_URL || 'https://www.dbs-express.co.uk/app/ci/index_controller/sign_up';
