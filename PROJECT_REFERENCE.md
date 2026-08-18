# DBSsubmit — Master Project Reference

> **Purpose:** Single source of truth for any developer or AI model working on this project.
> Read THIS file first. It contains everything you need: build status, file tree, tech stack,
> design system, component inventory, page specs, API routes, CMS schemas, and implementation notes.
>
> **Last updated:** 2026-08-15
> **Current status:** ✅ COMPLETED — Institutional & Gov-Adjacent Design System applied (Strict 5-color palette, Verification Stamp motif, IBM Plex Mono typography).

---

## Table of Contents

1. [Project Identity](#1-project-identity)
2. [Tech Stack & Versions](#2-tech-stack--versions)
3. [Build Status Tracker](#3-build-status-tracker)
4. [Expected File / Directory Tree](#4-expected-file--directory-tree)
5. [Design System & Tokens](#5-design-system--tokens)
6. [Shared / Global Components](#6-shared--global-components)
7. [Page-by-Page Specifications](#7-page-by-page-specifications)
8. [API Routes](#8-api-routes)
9. [Sanity CMS Schemas](#9-sanity-cms-schemas)
10. [Environment Variables](#10-environment-variables)
11. [Third-Party Integrations](#11-third-party-integrations)
12. [Key Implementation Patterns](#12-key-implementation-patterns)
13. [SEO Checklist](#13-seo-checklist)
14. [GDPR / Compliance Checklist](#14-gdpr--compliance-checklist)
15. [Outstanding Client Decisions](#15-outstanding-client-decisions)
16. [Quick-Start Commands](#16-quick-start-commands)

---

## 1. Project Identity

| Field | Value |
|---|---|
| **Project name** | DBSsubmit |
| **Legal entity** | Talaty Group Ltd (trading as DBSsubmit) |
| **Domain** | `DBSsubmit.co.uk` (owned, to be pointed at Vercel) |
| **Purpose** | Marketing & lead-generation website for DBS check services |
| **What we DO build** | Public pages, blog/CMS, FAQ, contact forms, pricing display, login/apply redirect to uCheck |
| **What we do NOT build** | Auth, user accounts, applicant data storage, DBS processing (all handled by uCheck) |
| **Deployment** | Vercel (auto-deploy from GitHub `main` branch) |
| **Logo file** | `Brand_Primary_Logo_Dual.svg` (to be placed in `/public/`) |

---

## 2. Tech Stack & Versions

| Layer | Technology | Target Version | Notes |
|---|---|---|---|
| Framework | **Next.js** (App Router) | `^15.x` | Use App Router (`/app` directory), NOT Pages Router |
| Language | **TypeScript** | `^5.x` | Strict mode enabled |
| Styling | **Tailwind CSS** | `^4.x` | User explicitly requested Tailwind |
| CMS | **Sanity.io** | `^3.x` | Headless CMS, free tier |
| Email | **Resend** (primary) or SendGrid | Latest | Serverless email delivery for form submissions |
| Cookie consent | **Cookiebot** or **Osano** | JS snippet | Loaded conditionally, UK/EU GDPR compliant |
| Analytics | **Vercel Analytics** + **GA4** | Latest | Blocked by cookie consent until accepted |
| Hosting | **Vercel** | N/A | HTTPS default, UK/EU edge, CI/CD from GitHub |
| Package manager | **npm** | Latest | Lockfile committed |

### Key dependencies to install

```
next react react-dom
typescript @types/react @types/node
tailwindcss @tailwindcss/postcss
next-sanity @sanity/image-url @sanity/client
@portabletext/react
resend
```

---

## 3. Build Status Tracker

### Legend: ⬜ Not started · 🟡 In progress · ✅ Done · 🔵 Blocked (waiting on client)

### Infrastructure

| Item | Status | Notes |
|---|---|---|
| Next.js project scaffold | ✅ | App Router + Tailwind v4 + TS |
| Tailwind config (brand tokens) | ✅ | Custom colours, fonts, breakpoints in `globals.css` |
| Sanity Studio project init | ✅ | Schemas built in `sanity/schemas/` |
| Sanity schemas defined | ✅ | `blogPost`, `author`, `category`, `faqItem`, `pricingTier`, `aboutContent` |
| Environment variables set | ✅ | Template in `.env.example` |
| Vercel project created | ⬜ | Ready for deployment |
| DNS pointed to Vercel | ⬜ | A/CNAME records on `DBSsubmit.co.uk` |

### Global Components

| Component | Status | File Path |
|---|---|---|
| `<Header />` | ✅ | `src/components/layout/Header.tsx` |
| `<Footer />` | ✅ | `src/components/layout/Footer.tsx` |
| `<MobileNav />` | ✅ | `src/components/layout/MobileNav.tsx` |
| `<RootLayout />` | ✅ | `src/app/layout.tsx` |
| `<CookieConsent />` | ✅ | `src/components/CookieConsent.tsx` |
| `<Button />` | ✅ | `src/components/ui/Button.tsx` |
| `<SectionWrapper />` | ✅ | `src/components/ui/SectionWrapper.tsx` |
| `<Card />` | ✅ | `src/components/ui/Card.tsx` |
| `<Badge />` | ✅ | `src/components/ui/Badge.tsx` |
| `<LogoStrip />` | ✅ | `src/components/ui/LogoStrip.tsx` |
| `<StatCallout />` | ✅ | `src/components/ui/StatCallout.tsx` |
| `<ProcessSteps />` | ✅ | `src/components/ui/ProcessSteps.tsx` |
| `<ImplementationModes />` | ✅ | `src/components/home/ImplementationModes.tsx` |
| `<ProductDemoPanel />` | ✅ | `src/components/home/ProductDemoPanel.tsx` |
| `<TestimonialQuote />` | ✅ | `src/components/home/TestimonialQuote.tsx` |
| `<TestimonialWall />` | ✅ | `src/components/home/TestimonialWall.tsx` |
| `<AudienceTabs />` | ✅ | `src/components/home/AudienceTabs.tsx` |

### Pages

| Route | Page | Status | File Path |
|---|---|---|---|
| `/` | Homepage | ✅ | `src/app/page.tsx` |
| `/employers` | Employers | ✅ | `src/app/employers/page.tsx` |
| `/individuals` | Individuals | ✅ | `src/app/individuals/page.tsx` |
| `/pricing` | Pricing | ✅ | `src/app/pricing/page.tsx` |
| `/resources` | Blog listing | ✅ | `src/app/resources/page.tsx` |
| `/resources/[slug]` | Blog article | ✅ | `src/app/resources/[slug]/page.tsx` |
| `/about` | About Us | ✅ | `src/app/about/page.tsx` |
| `/faq` | FAQ | ✅ | `src/app/faq/page.tsx` |
| `/contact` | Contact | ✅ | `src/app/contact/page.tsx` |
| `/team` | Meet the Team (hidden) | ✅ | `src/app/team/page.tsx` |

### API Routes

| Endpoint | Status | File Path |
|---|---|---|
| `/api/contact-form` | ✅ | `src/app/api/contact-form/route.ts` |
| `/api/quote-form` | ✅ | `src/app/api/quote-form/route.ts` |

### Compliance

| Item | Status |
|---|---|
| Cookie consent banner | ✅ |
| Privacy Policy page | ✅ (built at `/privacy-policy`) |
| Terms & Conditions page | ✅ (built at `/terms`) |
| HTTPS enforced | ✅ (automatic via Vercel deployment) |

---

## 4. Expected File / Directory Tree

```
DBSsubmit/
├── public/
│   ├── Brand_Primary_Logo_Dual.svg
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Root layout (Header, Footer, CookieConsent)
│   │   ├── page.tsx                       # Homepage
│   │   ├── globals.css                    # Tailwind directives + custom styles
│   │   ├── not-found.tsx                  # Custom 404
│   │   ├── error.tsx                      # Error boundary
│   │   ├── sitemap.ts                     # Auto-generated sitemap
│   │   ├── robots.ts                      # robots.txt
│   │   │
│   │   ├── employers/page.tsx
│   │   ├── individuals/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── resources/page.tsx
│   │   ├── resources/[slug]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── team/page.tsx                  # Hidden from nav
│   │   │
│   │   └── api/
│   │       ├── contact-form/route.ts
│   │       └── quote-form/route.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileNav.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── SectionWrapper.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WhatWeDoSection.tsx
│   │   │   ├── PricingPreview.tsx
│   │   │   ├── AudienceSection.tsx
│   │   │   └── LatestBlogSection.tsx
│   │   │
│   │   ├── employers/
│   │   │   ├── CheckLevelSelector.tsx     # Shared with individuals
│   │   │   └── EmployerCTA.tsx
│   │   │
│   │   ├── individuals/
│   │   │   └── IndividualOptions.tsx
│   │   │
│   │   ├── pricing/
│   │   │   └── PricingTable.tsx
│   │   │
│   │   ├── resources/
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogGrid.tsx
│   │   │   └── ArticleBody.tsx
│   │   │
│   │   ├── faq/
│   │   │   ├── FAQSearch.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── FAQGrid.tsx
│   │   │   └── LoadMoreButton.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── ContactForm.tsx
│   │   │
│   │   └── CookieConsent.tsx
│   │
│   ├── lib/
│   │   ├── sanity/
│   │   │   ├── client.ts
│   │   │   ├── queries.ts
│   │   │   └── image.ts
│   │   ├── resend.ts
│   │   └── constants.ts
│   │
│   └── types/
│       ├── blog.ts
│       ├── faq.ts
│       └── pricing.ts
│
├── sanity/
│   ├── sanity.config.ts
│   ├── sanity.cli.ts
│   └── schemas/
│       ├── index.ts
│       ├── blogPost.ts
│       ├── author.ts
│       ├── category.ts
│       ├── faqItem.ts
│       ├── pricingTier.ts
│       └── aboutContent.ts
│
├── .env.local                             # NOT committed
├── .env.example
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
├── PROJECT_REFERENCE.md                   # THIS FILE
└── DBSsubmit_Implementation_Plan.md       # Original plan
```

---

## 5. Design System & Tokens

### Colours

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Navy (primary) | `#27276E` | `navy` | Hero bg, headers, primary buttons |
| Orange (accent) | `#E6772C` | `orange` | CTAs, highlights, hover states |
| Light grey | `#F5F5F9` | `grey-light` | Alternate section backgrounds |
| Mid grey | `#E4E4EE` | `grey-mid` | Borders, dividers |
| Peach tint | `#FCE3CC` | `peach` | Soft accent backgrounds, badges |
| Dark | `#1A1A2E` | `dark` | Blog section bg, footer bg |
| Text primary | `#1F2937` | `gray-800` | Body text |
| Text secondary | `#6B7280` | `gray-500` | Captions, meta |

### Typography

| Role | Font | Weight | Tailwind |
|---|---|---|---|
| Headings | **Outfit** (Google Fonts) | 700 | `font-heading` |
| Body | **Inter** (Google Fonts) | 400 | `font-body` |
| UI small | **Inter** | 500 | `text-sm font-medium` |

Load via `next/font/google` in `layout.tsx`:
```tsx
import { Inter, Outfit } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
```

### Tailwind Config

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#27276E',
        orange: '#E6772C',
        'grey-light': '#F5F5F9',
        'grey-mid': '#E4E4EE',
        peach: '#FCE3CC',
        dark: '#1A1A2E',
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

### Spacing & Layout

| Token | Value | Usage |
|---|---|---|
| Section padding | `py-16 md:py-24` | All major sections |
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` | Content wrapper |
| Card radius | `rounded-2xl` | Cards, pricing tiles |
| Button radius | `rounded-lg` | CTA buttons |

### Shadows & Effects

```
Card:        shadow-lg shadow-navy/5
Hover:       shadow-xl shadow-navy/10
Glass:       bg-white/80 backdrop-blur-md border border-white/20
Hero grad:   bg-gradient-to-br from-navy via-[#1e1e5a] to-dark
```

---

## 6. Shared / Global Components

### `<Header />`
- Sticky top, `z-50`, semi-transparent on scroll (`bg-white/90 backdrop-blur-md`)
- Logo (top-left) → `/`
- Nav: Employers · Individuals · Pricing · Resources · About · FAQ · Contact
- Phone + "Lines open 9–5, Mon–Fri" (top-right, hidden on mobile)
- **Login** → external `_blank` link to uCheck dashboard
- Mobile: hamburger → `<MobileNav />` slide-out
- Active state: orange underline on current route (`usePathname()`)

### `<Footer />`
- Background: `dark` (`#1A1A2E`)
- Sections: Get in touch · Quick links · Policy links · Social icons · © Talaty Group Ltd 2026

### `<Button />` Props
```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}
// primary = navy bg, white text, orange hover
// secondary = orange bg, white text, navy hover
// outline = transparent, navy border
// ghost = transparent, subtle hover
```

### `<SectionWrapper />`
```tsx
interface SectionWrapperProps {
  bg?: 'white' | 'grey-light' | 'navy' | 'dark' | 'peach'
  className?: string
  children: React.ReactNode
  id?: string
}
// Renders: <section> → <div max-w-7xl mx-auto px-4...> → children
```

---

## 7. Page-by-Page Specifications

Every page has a distinct structural shape tailored to its specific purpose, avoiding generic hero/grid templates.

### 7.1 Homepage (`/`) — Full Narrative Structure
- **1. Hero:** `HeroSection` (navy gradient, H1 + subline + mock UI panel illustration)
- **2. Trust Bar:** `TrustBar` (white, client/partner logos)
- **3. Problem/Solution Grid:** `WhatWeDoSection` (navy-50, 3-col feature grid)
- **4. Testimonial Quote:** `TestimonialQuote` (large pull-quote)
- **5. Audience Tabs:** `AudienceTabs` (interactive tabs for employers vs individuals)
- **6. Stats Call-Outs:** `StatsSection` (stats counters)
- **7. Visitor Pathways:** `HowItWorksSection` (process steps)
- **8. Testimonial Wall:** `TestimonialWall` (customer quotes grid)
- **9. Final CTA Band:** Navy gradient CTA ("Ready to process an official DBS check?")

### 7.2 Employers (`/employers`) — Task-Oriented Structure
- **1. Compact Header:** White bg, H1 "Workforce DBS screening", `ShieldTieredIcon` right-aligned, no gradient hero.
- **2. Check Selector:** `CheckLevelSelector` on navy-50 bg.
- **3. Pricing Table:** `PricingPreview` on white bg.
- **4. Employer Proof Points:** Single wide illustrated banner on white bg (`TeamHiringIcon` + 2-item compact list: volume discounts at 20+ checks, dedicated account manager at 100+ checks).
- **5. Single CTA Band:** Navy gradient CTA ("Set up your employer account").

### 7.3 Individuals (`/individuals`) — Sibling Task Structure
- **1. Compact Header:** White bg, H1 "Apply for your DBS check", `PersonCertificateIcon` right-aligned, no gradient hero.
- **2. Check Selector:** `CheckLevelSelector` on navy-50 bg with eligibility note.
- **3. Q&A Block:** 4 short individual Q&A pairs on white bg (no 3-step process repeat).
- **4. Single CTA Band:** Navy gradient CTA ("Start your Basic DBS application on uCheck").

### 7.4 Pricing (`/pricing`) — Data-First Structure
- **1. Compact Header:** White bg, H1 "DBS check pricing", transparent rate summary, no gradient hero.
- **2. Full Pricing Table:** `PricingPreview` component on white bg.
- **3. Annual Volume Tiers:** 3-card scale discount matrix on white bg.
- **4. Pricing Details:** 3-item inline Q&A clarification block on navy-50 bg. No bottom CTA band.

### 7.5 Resources Listing (`/resources`) — Card Grid Layout
- **1. Compact Header:** White bg, H1 "Resources & guides", `DocumentCheckIcon` right-aligned, no gradient hero.
- **2. Blog Grid:** 3-col card grid on navy-50 bg. No bottom CTA band.

### 7.6 Blog Article (`/resources/[slug]`) — Editorial Layout
- **1. Editorial Header:** White bg, breadcrumbs, title, author/date/read-time meta. No gradient hero.
- **2. Article Body:** Prose text on white bg with pull-out advisory box.

### 7.7 About Us (`/about`) — Origin Narrative Structure
- **1. Compact Header:** White bg, H1 "About DBSsubmit", company origin summary. No gradient hero.
- **2. Company Story:** Text-led history on navy-50 bg with `PartnershipShapesIcon` (why DBSsubmit exists, Talaty Group Ltd & uCheck partnership).
- **3. Operational Commitments:** 2-item commitment cards (direct uCheck processing, published rates).
- **4. Mission Quote:** Single navy statement section with large pull-quote.
- **5. Contact CTA:** White bg, "Questions about DBSsubmit or our uCheck partnership?".

### 7.8 FAQ (`/faq`) — Search Utility Layout
- **1. Compact Header:** White bg, H1 "Frequently asked questions", `MagnifyingSearchIcon` right-aligned, no gradient hero.
- **2. Search & Accordion:** `FAQClientContainer` on navy-50 bg (live search + 3-col accordion grid + load more).

### 7.9 Contact (`/contact`) — Split Functional Layout
- **1. Compact Header:** White bg, H1 "Get in touch", `EnvelopeMessageIcon` right-aligned, no gradient hero.
- **2. Split Panel:** 2-column layout on navy-50 bg (office/phone/email details on left, `ContactForm` on right). Smallest, most functional page.

### 7.10 Team (`/team`) — Hidden Team Grid
- **1. Compact Header:** White bg, H1 "Our team", no gradient hero.
- **2. Team Grid:** 3-column team cards on navy-50 bg.

---

## 8. API Routes

### `POST /api/contact-form`
```ts
// Body: { name: string, email: string, phone?: string, message: string }
// Response: { success: true } | { error: string }
// Validates → Resend email to CONTACT_EMAIL → JSON response
```

### `POST /api/quote-form`
```ts
// Body: { companyName, contactName, email, phone?, checkType, estimatedVolume?, message? }
// Response: { success: true } | { error: string }
// Same pattern, different email template
```

---

## 9. Sanity CMS Schemas

### `blogPost`
| Field | Type | Required |
|---|---|---|
| title | string | ✅ |
| slug | slug (from title) | ✅ |
| author | ref → author | ✅ |
| mainImage | image (hotspot) | ✅ |
| categories | array ref → category | |
| publishedAt | datetime | ✅ |
| excerpt | text (200 chars) | ✅ |
| body | blockContent | ✅ |

### `author`
| Field | Type | Required |
|---|---|---|
| name | string | ✅ |
| image | image | |
| bio | text | |

### `category`
| Field | Type | Required |
|---|---|---|
| title | string | ✅ |
| description | text | |

### `faqItem`
| Field | Type | Required |
|---|---|---|
| question | string | ✅ |
| answer | blockContent | ✅ |
| order | number | |
| category | string | |

### `pricingTier`
| Field | Type | Required |
|---|---|---|
| checkType | string enum | ✅ |
| displayName | string | ✅ |
| description | text | |
| price | number (GBP) | ✅ |
| volumeTiers | array {min, price} | |
| features | array string | |
| turnaround | string | |
| popular | boolean | |
| order | number | |

### `aboutContent` (singleton)
| Field | Type | Required |
|---|---|---|
| headline | string | ✅ |
| story | blockContent | ✅ |
| mission | text | |
| values | array {title, desc} | |

---

## 10. Environment Variables

```bash
# .env.example
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-08-15
SANITY_API_TOKEN=
RESEND_API_KEY=
CONTACT_EMAIL=
NEXT_PUBLIC_UCHECK_LOGIN_URL=
NEXT_PUBLIC_UCHECK_APPLY_URL=
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
NEXT_PUBLIC_COOKIEBOT_ID=
NEXT_PUBLIC_SITE_URL=https://dbssubmit.co.uk
```

---

## 11. Third-Party Integrations

### uCheck — purely outbound links, no API. Login button + Apply CTAs. URLs pending.
### Resend — email delivery for form submissions. Rate limit: 5/IP/hour.
### Sanity — CMS for blog, FAQ, pricing, about. ISR with `revalidate: 60`.
### Cookiebot/Osano — JS snippet in `<head>`, blocks analytics until consent.

---

## 12. Key Implementation Patterns

### Data Fetching (Server Components)
```tsx
import { client } from '@/lib/sanity/client'
export const revalidate = 60
export default async function Page() {
  const data = await client.fetch(query)
  return <Component data={data} />
}
```

### Client Components — Only for: useState, useEffect, event handlers, browser APIs
Mark with `'use client'`: FAQSearch, FAQAccordion, ContactForm, CheckLevelSelector, MobileNav, CookieConsent

### Images — `next/image` everywhere. Sanity images via `@sanity/image-url`.

### SEO Metadata per page:
```tsx
export const metadata: Metadata = {
  title: 'Page Title | DBSsubmit',
  description: '...',
  openGraph: { title, description, url, siteName: 'DBSsubmit', images: ['/og-image.jpg'] },
}
```

### Error handling — `not-found.tsx` (404), `error.tsx` (boundary), API returns proper status codes.

---

## 13. SEO Checklist

- [ ] Unique `<title>` per page
- [ ] Meta descriptions per page
- [ ] Open Graph tags per page
- [ ] Single `<h1>` per page
- [ ] Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`)
- [ ] Image alt text on all `<Image>`
- [ ] Auto sitemap via `src/app/sitemap.ts`
- [ ] `robots.ts`
- [ ] Canonical URLs
- [ ] JSON-LD: FAQPage schema on `/faq`, Article schema on blog posts
- [ ] Lighthouse 90+ target

---

## 14. GDPR / Compliance Checklist

- [ ] Cookie consent banner (Cookiebot/Osano)
- [ ] Privacy Policy page (🔵 awaiting legal copy)
- [ ] Terms & Conditions page (🔵 awaiting legal copy)
- [ ] HTTPS everywhere (Vercel default)
- [x] No applicant data stored (confirmed out of scope)
- [ ] Form data: HTTPS only, emailed, not persisted
- [ ] Cookie declaration link in footer

---

## 15. Outstanding Client Decisions

| # | Decision | Impact | Status |
|---|---|---|---|
| 1 | Sign-off Next.js + Sanity + Vercel | Blocks all dev | 🔵 |
| 2 | Form submission destination | Blocks API routes | 🔵 |
| 3 | Pricing figures from uCheck | Blocks pricing data | 🔵 |
| 4 | Final copy (About, FAQ, blog) | Blocks content | 🔵 |
| 5 | uCheck login/apply URLs | Blocks Login + CTAs | 🔵 |
| 6 | Vercel Pro budget approval | Blocks production | 🔵 |
| 7 | Privacy Policy / T&Cs text | Blocks compliance | 🔵 |
| 8 | Team member details | Blocks `/team` content | 🔵 |

---

## 16. Quick-Start Commands

```bash
# Scaffold
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Install deps
npm install next-sanity @sanity/image-url @sanity/client @portabletext/react resend

# Dev
npm run dev

# Build
npm run build
```

---

## Appendix A: Constants

```ts
// src/lib/constants.ts
export const SITE = {
  name: 'DBSsubmit',
  legalName: 'Talaty Group Ltd',
  tagline: 'DBS checks, done properly.',
  phone: '',   // TBC
  email: '',   // TBC
  address: '', // TBC
  hours: 'Mon–Fri, 9am–5pm',
  social: { linkedin: '', twitter: '', facebook: '' },
} as const

export const NAV_LINKS = [
  { label: 'Employers', href: '/employers' },
  { label: 'Individuals', href: '/individuals' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const

export const UCHECK_LOGIN_URL = process.env.NEXT_PUBLIC_UCHECK_LOGIN_URL || '#'
export const UCHECK_APPLY_URL = process.env.NEXT_PUBLIC_UCHECK_APPLY_URL || '#'
```

## Appendix B: Import Paths

```ts
// Layout
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileNav } from '@/components/layout/MobileNav'

// UI
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

// Home sections
import { HeroSection } from '@/components/home/HeroSection'
import { WhatWeDoSection } from '@/components/home/WhatWeDoSection'
import { PricingPreview } from '@/components/home/PricingPreview'
import { AudienceSection } from '@/components/home/AudienceSection'
import { LatestBlogSection } from '@/components/home/LatestBlogSection'

// Feature components
import { CheckLevelSelector } from '@/components/employers/CheckLevelSelector'
import { PricingTable } from '@/components/pricing/PricingTable'
import { BlogCard, BlogGrid, ArticleBody } from '@/components/resources/...'
import { FAQSearch, FAQAccordion, FAQGrid, LoadMoreButton } from '@/components/faq/...'
import { ContactForm } from '@/components/contact/ContactForm'
import { CookieConsent } from '@/components/CookieConsent'

// Lib
import { client } from '@/lib/sanity/client'
import { allPostsQuery, postBySlugQuery, allFaqsQuery, pricingQuery, aboutQuery } from '@/lib/sanity/queries'
import { urlForImage } from '@/lib/sanity/image'
import { SITE, NAV_LINKS, UCHECK_LOGIN_URL, UCHECK_APPLY_URL } from '@/lib/constants'
```

---

> **Usage:** Any model starting work → read this file first → check Build Status → use File Tree for paths → follow Design System → refer to Page Specs → update Build Status as items complete.
