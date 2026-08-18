# DBSsubmit Website — Implementation Plan
**Prepared for:** Talaty Group Ltd (trading as DBSsubmit)
**Prepared by:** Development Team
**Deployment target:** Vercel

---

## 1. Project Summary

We are building a public-facing **marketing and lead-generation website** for DBSsubmit. The site explains DBS check services, builds trust with employers and individuals, captures leads, and hands visitors off to uCheck's secure white-labelled platform to complete the actual DBS application.

**We are NOT building:** authentication, user accounts, applicant data storage, or DBS processing logic. That remains entirely within uCheck's system.

---

## 2. Tech Stack (Vercel-optimised)

Since deployment is on **Vercel**, the stack is built around Vercel's strengths — a fast, modern **Jamstack/headless architecture** rather than traditional WordPress hosting.

| Layer | Choice | Why |
|---|---|---|
| **Frontend Framework** | **Next.js** (React) | Native to Vercel, built-in image optimisation, fast page loads, excellent SEO support (SSR/SSG) |
| **CMS (content layer)** | **Sanity.io** (headless CMS) | Lets non-technical staff edit blog posts, FAQs, and pricing without redeploying code; clean editorial UI; free tier available |
| **Styling** | **Tailwind CSS** | Fast, consistent design system; easy to enforce the navy/orange brand palette across every component |
| **Forms handling** | **Next.js API routes + Resend (or SendGrid)** for email delivery | Serverless, no separate backend server needed; submissions route straight to business email/CRM |
| **Hosting/Deployment** | **Vercel** (UK/EU edge network enabled) | Auto-deploys from Git, instant rollbacks, fast global CDN, HTTPS by default |
| **Domain** | DBSsubmit.co.uk (already owned) → pointed to Vercel via DNS | No migration needed, just DNS records |
| **Cookie consent / GDPR** | **Cookiebot** or **Osano** (JS snippet, easy Next.js integration) | UK/EU compliant consent banner, no backend needed |
| **Analytics** | **Vercel Analytics** + **Google Analytics 4** | Privacy-conscious, works well with cookie consent |
| **Version control** | **GitHub** (private repo) | Connected directly to Vercel for CI/CD — every push auto-deploys a preview |

**Why this over WordPress:** Since we're deploying on Vercel, a headless setup (Next.js + Sanity) is the natural fit — WordPress isn't designed for Vercel's serverless model. This approach gives faster performance, better SEO scores, and a modern editing experience for the Resources/Blog section, while still letting the client's team update content without touching code.

---

## 3. Site Architecture

```
/                     → Homepage
/employers            → Employers page
/individuals          → Individuals page
/pricing              → Pricing page
/resources             → Blog listing (CMS-driven)
/resources/[slug]      → Individual blog article (CMS-driven)
/about                → About Us
/faq                  → FAQ (accordion + search)
/contact              → Contact page
/team                 → Meet the Team (built, unpublished — not in nav)
/api/contact-form      → Serverless form handler
/api/quote-form        → Serverless form handler
```

Header, footer, and Login button are shared components rendered on every route from a single source — so updates apply site-wide instantly.

---

## 4. Page-by-Page Build Plan

### Global Header (all pages)
- Logo (top left, linked to homepage)
- Nav: Employers · Individuals · Pricing · Resources · About · FAQ · Contact · **Login**
- Phone number + "Lines open 9-5, Mon–Fri" (top right)
- **Login button** → plain external link to uCheck's white-label dashboard URL (opens in new tab)

### Global Footer (all pages)
- Get in touch block
- Policy links (Privacy Policy, T&Cs — to be drafted/approved by client's solicitor)
- Address + social media icons

### Homepage
1. Hero — navy background, headline "DBS checks, done properly.", subline, CTA button → Pricing or Apply flow
2. What we do / Is DBSsubmit right for me — secondary colour background, three copy blocks per brief
3. Pricing matrix — placeholder "Pricing coming soon" table, structured so real figures drop in later without a rebuild
4. Employers / Individuals two-column section with CTAs to their respective pages
5. Blog section (dark grey bg) — auto-pulls latest 3 articles from Sanity CMS
6. Footer content block (light grey bg)

### Employers Page
- "What level of check do you require?" selector (Basic/Standard/Enhanced — dropdown or button group)
- Pricing table (shared component with homepage pricing section)
- CTA → uCheck apply link, parameterised with selected check type if uCheck supports it

### Individuals Page
- Same check-level selector
- Application options per individual check type
- CTA → uCheck apply link

### Pricing Page
- Full pricing matrix, including volume tiers — placeholder values until uCheck confirms figures
- Built as a CMS-editable table (via Sanity) so the client can update pricing themselves once confirmed, without a dev ticket

### Resources / Blog
- Listing page: card grid of articles (image, title, excerpt, date)
- Article template: rich text, images, author, published date, related articles
- Fully managed via Sanity Studio — client's marketing person can write and publish posts directly

### About Us
- Static page, CMS-editable text blocks for company story/culture (copy TBC — placeholder Lorem-style content until final copy delivered)

### FAQ Page
- 3-column gallery grid, wrapping to further rows
- Accordion expand/collapse per question
- Live search bar filtering questions as you type
- "Load more" button to reveal additional questions
- Questions/answers stored in Sanity so client can add FAQs without a developer

### Contact Page
- Contact form (name, email, message) → serverless API route → email to business inbox
- Address, phone, hours displayed statically

### Meet the Team (hidden)
- Built and deployed, but excluded from nav — accessible only via direct URL until client is ready to publish

---

## 5. Automation Points

| Automation | How it works |
|---|---|
| Contact/Quote form submissions | Serverless function sends email instantly to business inbox (and optionally logs to a Google Sheet/CRM) |
| Blog → Homepage feed | New Sanity CMS posts automatically appear on homepage/blog listing — zero manual work |
| Login/Apply buttons | Static or parameterised link out to uCheck (check type passed via URL if uCheck's platform supports it) |
| Deployments | Every Git push to `main` auto-deploys to production via Vercel; every pull request gets its own preview URL for client review before going live |

---

## 6. Brand & Design System

- Colours strictly from logo: Navy `#27276E`, Orange `#E6772C`, plus provided tints (`#F5F5F9`, `#E4E4EE`, `#FCE3CC`)
- Logo file: `Brand_Primary_Logo_Dual.svg`
- Reference sites (tone/structure only, not copied): staging-ucheckcouk.kinsta.cloud, personnelchecks.co.uk
- Fully responsive (mobile, tablet, desktop) — built mobile-first in Tailwind

---

## 7. Compliance (UK GDPR)

- Cookie consent banner on first visit, blocking non-essential scripts until accepted
- Privacy Policy and T&Cs pages (final legal copy to be supplied/approved by client)
- All form data transmitted over HTTPS; no personal data stored beyond what's needed to respond to the enquiry
- No DBS applicant data ever touches this site — confirmed out of scope, stays with uCheck

---

## 8. Project Phases & Timeline

| Phase | Deliverable | Duration |
|---|---|---|
| **1. Discovery & Setup** | Confirm sitemap, set up GitHub repo, Vercel project, Sanity CMS schema, DNS planning | 3–4 days |
| **2. Design** | Homepage + inner page mockups in brand palette, client sign-off | 1–2 weeks |
| **3. Core Build** | Home, Employers, Individuals, Pricing, About, Contact, header/footer, Login link | 1.5–2 weeks |
| **4. FAQ Build** | Accordion, search, load-more, CMS-connected | 3–5 days |
| **5. Resources/Blog Build** | Sanity schema, listing page, article template, homepage feed | 4–6 days |
| **6. Forms & Compliance** | Contact/quote forms, cookie consent, privacy policy integration | 3–4 days |
| **7. QA & Content Population** | Cross-device/browser testing, placeholder swap-out, real copy entry | 1 week |
| **8. Client Review & Revisions** | Preview deployments on Vercel for feedback rounds | 1 week |
| **9. Launch** | DNS cutover to Vercel, go-live, post-launch monitoring | 1–2 days |

**Total estimated timeline: 6–8 weeks** (single developer + designer), or **4–5 weeks** with a two-person team working in parallel.

### Dependencies that can delay this timeline
- Final pricing figures from uCheck (volume tiers)
- Final written copy: About Us, FAQ answers, blog articles
- Legally-reviewed Privacy Policy / T&Cs text
- Confirmation of uCheck's white-label login URL and whether it accepts URL parameters

---

## 9. Outstanding Decisions Needed From Client

1. Confirm CMS/dev approach in this document (Next.js + Sanity on Vercel) — sign-off to proceed
2. Confirm where form submissions should route (email inbox address / CRM name if applicable)
3. Provide final pricing figures once available from uCheck
4. Provide final copy for About Us, FAQ, and initial blog articles (or confirm if we should draft placeholders)
5. Confirm uCheck's exact white-label login/apply URL(s)
6. Confirm hosting budget approval for Vercel (Pro plan likely needed for production use) and Sanity (free tier likely sufficient initially)

---

## 10. What "Done" Looks Like

- Live at DBSsubmit.co.uk on Vercel, HTTPS enabled
- All 9 pages built, responsive, and linked correctly in header/footer
- Blog/Resources fully CMS-editable by client's team
- FAQ fully interactive (search, accordion, load more)
- Contact/quote forms delivering leads to the client's inbox
- Cookie consent + privacy policy live and GDPR-compliant
- Login/Apply buttons correctly routing to uCheck's platform
- Meet the Team page built but hidden from navigation, ready to publish later
