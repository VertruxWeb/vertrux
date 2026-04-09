# Vertrux — B2B CBD Extract Website

Premium B2B frontend for Yunnan Vertrux, a pharmaceutical-grade CBD extract manufacturer. Built with React + TypeScript + Vite + Tailwind CSS, ready for Vercel deployment.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 (custom design tokens) |
| Routing | React Router v6 |
| Icons | Lucide React |
| Font | Manrope (Google Fonts) |
| Deployment | Vercel (SPA rewrites via `vercel.json`) |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
vertrux-web/
├── index.html                    # Entry HTML — SEO meta, Manrope font
├── vercel.json                   # Vercel SPA rewrite rules
├── tailwind.config.js            # Custom design token system
├── vite.config.ts
├── tsconfig.app.json
│
└── src/
    ├── index.css                 # Tailwind directives + global component classes
    ├── main.tsx                  # React DOM entry point
    ├── App.tsx                   # BrowserRouter + all route definitions
    │
    ├── components/               # Atomic Design component hierarchy
    │   ├── atoms/                # Smallest, stateless UI primitives
    │   │   ├── Badge.tsx         # Chip/tag — variants: default, primary, glass
    │   │   ├── Button.tsx        # 5 variants: primary, secondary, ghost, glass, outline
    │   │   └── SectionLabel.tsx  # Uppercase tracking section identifier text
    │   │
    │   ├── molecules/            # Composed from atoms; may hold local state
    │   │   ├── InquiryForm.tsx   # Reusable B2B wholesale inquiry form (with submit state)
    │   │   ├── SpecRow.tsx       # Technical spec key-value row with divider
    │   │   └── StatCard.tsx      # Single metric display card
    │   │
    │   └── organisms/            # Full-section-level components
    │       ├── Layout.tsx        # Page shell: Navbar + main content + Footer
    │       ├── Navbar.tsx        # Fixed top nav — desktop links + mobile hamburger
    │       └── Footer.tsx        # Dark footer with brand, nav columns, certifications
    │
    └── pages/                    # One file per route
        ├── HomePage.tsx          # Hero, industrial scale, CBD Isolate bento, inquiry CTA
        ├── GalleryPage.tsx       # 4-sector campus visual documentation
        ├── InquiryPage.tsx       # Full B2B inquiry form + contact sidebar
        ├── EquipmentPage.tsx     # cGMP standards, equipment showcase, specs table
        ├── InsightsPage.tsx      # Featured article, article grid, newsletter, stats strip
        └── ProductPage.tsx       # CBD Isolate 99.9% — COA metrics, spec sheet, wholesale form
```

---

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | HomePage | Hero + key product sections |
| `/gallery` | GalleryPage | Campus visual documentation by sector |
| `/inquiry` | InquiryPage | B2B strategic partnership inquiry form |
| `/equipment` | EquipmentPage | Factory equipment specs + cGMP standards |
| `/insights` | InsightsPage | Industry articles + newsletter signup |
| `/products/cbd-isolate` | ProductPage | CBD Isolate product detail + wholesale form |

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#154212` | Brand green — CTAs, accents, highlights |
| `primary-container` | `#2d5a27` | Hover states on primary elements |
| `primary-fixed` | `#bcf0ae` | Light green tint — icon backgrounds |
| `on-background` | `#0b1c30` | Dark navy — hero sections, dark backgrounds |
| `surface` | `#f8f9ff` | Main page background |
| `surface-container-lowest` | `#ffffff` | Cards, elevated surfaces |
| `surface-container-low` | `#eff4ff` | Alternate section backgrounds |
| `on-surface-variant` | `#42493e` | Secondary text, labels |
| `outline-variant` | `#c2c9bb` | Subtle dividers (no hard borders) |
| `inverse-surface` | `#213145` | Footer background |

### Typography

- **Font:** Manrope (weights 200–800)
- **Headlines:** `font-extrabold`, `tracking-tighter` (`-0.02em`), `leading-[0.95]`
- **Labels:** `text-xs`, `tracking-widest`, `uppercase`, `font-semibold`
- **Body:** `text-sm`, `leading-relaxed`

### Design Principles

- **No visible borders** — surface hierarchy via background color shifts
- **Intentional asymmetry** — 12-column bento grids, not centered layouts
- **Industrial sharp corners** — border-radius max `0.25rem`
- **Inputs** — bottom-border only, no box borders
- **Hover states** — translate + color shift (300ms ease)
- **Images** — `grayscale` default, `grayscale-0` on hover (gallery)

---

## B2B Features

- **Wholesale Inquiry Form** — company, contact, volume estimate, requirements; present on `/inquiry` and `/products/cbd-isolate`
- **Product Specifications** — full COA metrics grid, spec sheet table, compliance checklist
- **Trust Signals** — ISO 9001:2015, GMP, purity benchmarks, carbon neutral badge throughout
- **Equipment Documentation** — detailed cGMP specs per machine with alternating showcase layout
- **Industry Insights** — article grid with newsletter subscription

---

## Deployment (Vercel)

```bash
# One-command deploy via Vercel CLI
vercel deploy
```

`vercel.json` rewrites all paths to `index.html` for client-side routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

No additional environment variables required.
