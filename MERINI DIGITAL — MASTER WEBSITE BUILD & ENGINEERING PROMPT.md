MERINI DIGITAL — MASTER WEBSITE BUILD & ENGINEERING PROMPT (PRODUCTION-READY)

1. ROLE & MULTI-DISCIPLINARY EXECUTION METHODOLOGY
Act as a senior multidisciplinary core team consisting of:
- Senior Brand Strategist & Copywriter
- Creative Director & UX/UI Designer
- Senior Full-Stack & Performance Engineer (Next.js / TypeScript)
- Technical SEO & GEO/LLM Optimization Specialist
- Cybersecurity & Accessibility Engineer (WCAG 2.2 AA)

Your task is to DESIGN, BUILD, TEST, OPTIMIZE, and DELIVER a production-ready website for:
MERINI DIGITAL

To prevent AI output truncation, execute the build process systematically in 4 logical phases:
- Phase 1: Architecture, Configuration & i18n Engine (`next.config.js`, `tailwind.config.js`, `middleware.ts`, `locales`)
- Phase 2: Design System, Core UI Components & Navigation Framework
- Phase 3: Page Architectures, Interactive Conversion Forms & Lead Capture Webhooks
- Phase 4: Technical SEO, JSON-LD Schemas, Security Headers & Performance Optimization

---

2. BRAND POSITIONING & NAME
- Official Brand Name: MERINI DIGITAL (Never use Moncef, MERINI DEGITAL, or generic agency names).
- Core Positioning: "We help businesses build digital experiences that make them easier to discover, trust, and contact."
- Value Spectrum: Strategy → Digital Presence → Web Design → Technical SEO → Business Conversion.
- Brand Tone: Modern, Premium, Intelligent, Minimal, Editorial, Trustworthy, and Culturally Authentic (Subtle Moroccan nuance without orientalist clichés).

---

3. TARGET CLIENTELE & SERVICES
Primary Target: Moroccan and international SMBs across high-touch verticals:
- Hospitality (Riads, Hotels, Tourism)
- Dining & Retail (Restaurants, Cafés, Boutiques, Digital Menus)
- Professional Services (Real Estate, Salons, Wellness, B2B Services)

Core Service Offerings:
1. Web Design & Custom UI/UX
2. Web Development (Fast, Responsive, Maintainable)
3. Local & Technical SEO
4. Multilingual & RTL Website Systems
5. Digital Menus & Hospitality Experience Systems
6. Conversion Rate Optimization (WhatsApp & Lead Capture Flows)
7. Digital Presence Audits & Maintenance

---

4. SYSTEM ARCHITECTURE & TECH STACK
- Framework: Next.js (App Router, Server Components where applicable)
- Language: TypeScript (Strict mode enabled)
- Styling: Tailwind CSS (Design tokens, clean utility classes)
- Validation: Zod (Schema-based input validation)
- Icons: Lucide-react or FontAwesome SVG icons
- Internationalization: `next-intl` or native locale-based routing with JSON translation bundles

---

5. INTERNATIONALIZATION (i18n) & RTL ENGINE
- Supported Locales: English (`en` - Default), Arabic (`ar` - RTL), French (`fr`), Spanish (`es`).
- Language Selector: Clear text switcher (`EN / العربية / FR / ES`). Do NOT use country flags as language identifiers.
- RTL Implementation Standards:
  - `dir="rtl"` dynamically set on the root element for `ar`.
  - Proper mirror-alignment for margins, padding, navigation menus, flex/grid directions, and icons.
  - Arabic typography configured via readable Naskh/Sans fonts (e.g., Cairo, Tajawal, or IBM Plex Arabic).
- Localized Routing & Metadata: Clean hreflang tags and localized canonical URLs.

---

6. SITEMAP & PAGE ARCHITECTURES
Implement clean, modular URLs:
- `/` (Homepage)
- `/services` & `/services/[service-slug]`
- `/work` & `/work/[project-slug]`
- `/process`
- `/about`
- `/pricing`
- `/audit` (Dedicated Free Audit Landing Page)
- `/contact`
- `/faq`
- `/privacy` & `/terms`

Homepage Layout Sequence:
1. Hero Section: Direct headline, short value statement, dual CTAs ("Get Free Digital Audit" + "Chat on WhatsApp").
2. Core Values & Capabilities Overview.
3. Services Grid: Modular service cards with clear deliverables.
4. Highlighted Work / Case Studies Grid (Explicitly labeled as "Client Project" or "Concept Project").
5. Process Section: 5-step methodology (Discover → Strategize → Design → Build → Launch).
6. Transparent Pricing Framework.
7. High-Conversion Audit CTA Banner.
8. Machine-Readable FAQ Section.
9. Footer with explicit entity details and locale navigation.

---

7. CONVERSION & LEAD CAPTURE PIPELINE
Primary Conversion Targets:
1. Free Digital Audit Form (`/audit`)
2. WhatsApp Direct Inquiry
3. Project Inquiry Form (`/contact`)

Lead Capture Technical Architecture:
- Server-side API Routes (`/api/audit`, `/api/contact`) backed by Zod schema validation.
- Webhook Integration: Payload dispatched to external webhook endpoints (e.g., n8n, Make, HubSpot, or Email API like Resend/SendGrid).
- Spam Protection: Honeypot field (`_b_trap`), strict rate limiting, and input sanitization.
- Form UX: Field preservation, explicit loading states, accessibility labels, and informative error/success states in all 4 languages.

---

8. SECURITY, PERFORMANCE & ACCESSIBILITY HARDENING
Security Standards:
- Zero Exposed Secrets: All API keys and endpoints driven by `.env.example`.
- Security Headers: CSP, HSTS, X-Content-Type-Options, Referrer-Policy configured in `next.config.js`.
- Endpoint Protection: Rate limiting on all public `/api/*` endpoints.

Performance Targets (Core Web Vitals):
- Sub-second LCP, zero CLS, low INP.
- Explicit image width/height dimensions and modern web formats (WebP/AVIF).
- Optimized font loading (`next/font`) and zero heavy decorative JS libraries.

Accessibility Standards:
- Target WCAG 2.2 AA compliance.
- Keyboard navigable, visible focus rings, aria-labels where applicable, minimum 4.5:1 contrast ratios, and `prefers-reduced-motion` support.

---

9. SEO & GEO / LLM DISCOVERABILITY
- Search Technicals: Unique `<title>`, meta description, H1 hierarchy, canonical URLs, `robots.txt`, and dynamic `sitemap.xml`.
- Structured Data (JSON-LD):
  - `Organization` & `ProfessionalService` schemas on Homepage.
  - `Service` schema on Service pages.
  - `FAQPage` schema for structured questions.
- LLM Discoverability (GEO):
  - Explicit, machine-readable text blocks defining WHO MERINI DIGITAL is, WHAT it does, WHERE it operates (Morocco & globally), and HOW it delivers digital solutions.
  - Factually consistent entity naming across all metadata and body text.

---

10. DESIGN SYSTEM & VISUAL DIRECTION
- Aesthetic Vision: Premium editorial studio. Calm, precise, intelligent, and clean.
- Color Harmony: Warm neutral backgrounds, deep dark slate/charcoal typography, restrained accent colors (e.g., deep indigo or warm terracotta), and crisp subtle borders.
- Typography: High-contrast pairings (e.g., Playfair/Merriweather or Syne for titles + DM Sans/Inter for body).
- Visual Media: High-fidelity UI mockups, real architectural/hospitality environments, and clean digital compositions.

---

11. MANDATORY NO-FAKE-DATA POLICY
- Strictly NO fabricated client logos, fake review counts, fake revenue statistics, fake awards, or non-existent partner certifications.
- If showing portfolio examples before client authorization, explicitly label them as "Concept Project".
- Never promise unverifiable outcomes (e.g., "Guaranteed #1 Google Rank" or "10x Revenue").

---

12. REQUIRED INFRASTRUCTURE ARTIFACTS & DELIVERABLES
Generate clean, production-ready implementation code for:
1. `middleware.ts` — i18n routing and RTL directional context.
2. `next.config.js` — Security headers and image domains.
3. `tailwind.config.js` — Design tokens, color palette, and custom fonts.
4. `lib/validations.ts` — Zod schemas for Audit and Contact forms.
5. Key Component UI files (Header, Hero, Service Grid, Lead Form, Footer).