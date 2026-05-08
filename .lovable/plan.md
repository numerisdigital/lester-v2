# Lester Solutions LTD — Homepage Plan

A single-route, fully static homepage built in TanStack Start + Tailwind v4, executing the "Financial-Grade Trust" brief end-to-end. No backend, no routing beyond `/`, all CTAs as `href="#"` placeholders.

## Design system (src/styles.css)

Replace default tokens with the briefed palette (oklch equivalents) and IBM Plex typography:

- `--background` Frost White `#F7F9FC`
- `--foreground` Body grey `#333333`
- `--primary` Signal Blue `#1A6FD4` (+ `--primary-foreground` white)
- `--secondary` Slate Mist `#E8EDF4`
- `--accent` Teal `#00C2A8`
- `--navy` Deep Navy `#0C2340` (custom token for dark sections / headlines)
- Soft radii: `--radius: 0.75rem`
- Custom utilities/keyframes: `fade-up`, `fade-in`, slow `drift` (hero blob motion ~20s), `hover-lift` (translateY + shadow).

Fonts loaded via `<link>` in `__root.tsx` head (Google Fonts: IBM Plex Sans 400/600/700, IBM Plex Mono 400). Tailwind utilities `font-sans` / `font-mono` mapped to these families.

## File changes

- `src/styles.css` — palette, fonts, keyframes, base typography.
- `src/routes/__root.tsx` — meta (title "Lester Solutions — Expert IT Strategy. Secure Business Outcomes.", description, og tags), preconnect + Google Fonts link.
- `src/routes/index.tsx` — replace placeholder, compose section components.
- `src/components/site/` (new):
  - `Header.tsx` — minimal sticky top bar: wordmark left, single "Client Portal" ghost link + "Book a Consultation" primary button right.
  - `Hero.tsx`
  - `TrustBar.tsx`
  - `Services.tsx`
  - `Process.tsx`
  - `Differentiator.tsx`
  - `Testimonial.tsx`
  - `FinalCTA.tsx`
  - `Footer.tsx` — slim, navy, copyright + minimal links.
  - `Reveal.tsx` — IntersectionObserver wrapper applying `animate-fade-up` once in view.
  - `HeroBackdrop.tsx` — inline SVG with two soft, blurred organic blobs + faint grid lines, animated via CSS `drift`.

## Section specs

1. **Hero** — full-viewport, Frost White base with `HeroBackdrop` (cool teal/blue gradient blobs, slow drift, low opacity grid). Mono eyebrow `// 01 — IT Consultancy`. H1 (IBM Plex Sans Bold, ~clamp(2.75rem, 6vw, 5rem), navy): "Expert IT Strategy. Secure Business Outcomes." Subhead (1 sentence). Primary button "Book a Consultation" (Signal Blue, lift on hover). Secondary ghost link "Client Portal Login →" (muted, underline on hover). Scroll cue at bottom.

2. **Trust Bar** — thin section, mono label "Trusted partners & certifications", row of 6 monochrome SVG/text logos (Microsoft, AWS, Google Cloud, Cisco, ISO 27001, Cyber Essentials Plus) rendered as styled text marks for crispness (no external assets needed); subtle dividers.

3. **Core Services — "Our Expertise"** — 3-column grid on `lg`, stacked on mobile. Cards: Frost White with 1px slate border, soft radius, hover lift + accent teal top-border reveal. Each card: large lucide icon in Signal Blue circle, H3, 2-line benefit copy, "Learn more →" link.
   - Cloud Infrastructure
   - Cyber Security
   - Managed IT Support

4. **Process — "Our Proven Process"** — Slate Mist background. Three numbered circles (navy fill, mono numerals) connected by a horizontal line with a teal progress segment; on mobile becomes vertical. Each step: short title + one-line description. Steps: Discover & Strategise / Implement & Integrate / Optimise & Support.

5. **Key Differentiator — "Security-First by Design"** — 50/50 split. Left: AI-generated image (`src/assets/collaboration.jpg`, generated via imagegen, cool-toned diverse team around a screen, 1280×960). Right: navy headline, 4 bullet rows with small teal check icons (Zero-trust architecture, ISO 27001 aligned processes, Continuous threat monitoring, Compliance-ready reporting), CTA link.

6. **Testimonial** — full-width Slate Mist. Large italic IBM Plex Sans quote (~2rem), subtle teal opening quote glyph, attribution: name, title, company. Single quote only.

7. **Final CTA** — full-width Deep Navy background with faint blob backdrop. Centered H2 ("Ready to make IT a competitive advantage?"), one-line subhead, large Signal Blue "Book a Consultation" button + small "Or call +44 …" mono line.

8. **Footer** — navy, two rows: wordmark + tagline left, minimal `#` links (Services, Process, Contact, Client Portal) right; bottom row mono `© 2026 Lester Solutions LTD`.

## Motion

- `Reveal` wrapper applies `opacity-0 translate-y-4` → `animate-fade-up` (0.6s ease-out) on intersect, `once: true`.
- Hero blobs: CSS `@keyframes drift` translating/scaling subtly over 18–24s, `prefers-reduced-motion` disables.
- Buttons: `transition-colors transition-transform duration-200`, hover `-translate-y-0.5` + shadow.
- Service cards: `hover:-translate-y-1 hover:shadow-lg` + teal top-border opacity transition.

## Imagery

- One generated asset: `src/assets/collaboration.jpg` (premium tier for fidelity). Cool tones, navy/teal lighting, diverse professionals reviewing dashboards. Used in Differentiator section.
- Hero uses pure SVG/CSS backdrop (no raster) to keep load light and sharp.
- All other "logos" rendered as typographic marks to avoid trademark issues and stay crisp.

## SEO / head

- `<title>` ≤60 chars, meta description ≤160 chars, single H1 (Hero), semantic landmarks (`header`, `main`, `section`, `footer`), alt text on the one image, JSON-LD `Organization` script in root head.

## Out of scope (per brief)

No additional routes, no forms wiring, no auth, no CMS, no analytics, no DB.

## Verification

After build: visual scroll-through in preview at desktop + mobile viewport, confirm no placeholder remains, fonts loaded, animations trigger, contrast passes on navy sections.
